import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {API_URL} from "../../constants/constants";
import {ErrorService} from "../error/error.service";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private _baseUrl = `${API_URL}/patient`;
  private patientSubject = new BehaviorSubject<[]>([]);
  patient$ = this.patientSubject.asObservable();

  constructor(private _http: HttpClient,
              private errorService: ErrorService) {
    this.get(null);
  }

  get(name:string | null) {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") }

    return this._http.get<[]>(`${this._baseUrl}/all`, {headers: headers})
      .pipe(
        tap(scales => this.patientSubject.next(scales)),
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
