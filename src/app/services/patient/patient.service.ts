import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {API_URL} from "../../constants/constants";
import {ErrorService} from "../error/error.service";
import {IPatientStatus} from "../../models/patientstatus";
import {IPatient} from "../../models/response/patient";
import {IRehabProgram} from "../../models/response/rehab/rehab_program";
import {IHistoryResponse} from "../../models/response/history/historyResponse";
import {IModule} from "../../models/response/module/module";
import {IExercise} from "../../models/exercise";
import {IForm} from "../../models/form";

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

  getRehab() {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") }

    return this._http.get<IRehabProgram>(`${this._baseUrl}/rehab`, {headers: headers})
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getModule(moduleId: string) {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") }

    return this._http.get<IModule>(`${this._baseUrl}/modules/${moduleId}`, {headers: headers})
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getHistory() {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") }

    return this._http.get<IHistoryResponse[]>(`${this._baseUrl}/history`, {headers: headers})
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getExercise(moduleId: string, exerciseId: string) {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") }

    return this._http.get<IExercise>(`${this._baseUrl}/modules/${moduleId}/exercises/${exerciseId}`, {headers: headers})
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getForm(moduleId: string, formId: string) {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") }

    return this._http.get<IForm>(`${this._baseUrl}/modules/${moduleId}/forms/${formId}`, {headers: headers})
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
