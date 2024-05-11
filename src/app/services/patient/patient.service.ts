import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {API_URL} from "../../constants/constants";
import {ErrorService} from "../error/error.service";
import {IPatientStatus} from "../../models/patientstatus";
import {IPatient} from "../../models/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  // http://localhost:8081/api/v1/patient/me
  private _baseUrl = `${API_URL}`;
  private patientSubject = new BehaviorSubject<IPatient[]>([]);
  patient$ = this.patientSubject.asObservable();

  constructor(private _http: HttpClient,
              private errorService: ErrorService) {
    this.getMe();
  }

  getMe() {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") }

    return this._http.get<IPatient>(`${this._baseUrl}/me`, {headers: headers})
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
