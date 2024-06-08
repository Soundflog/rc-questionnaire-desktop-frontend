import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {API_URL} from "../../constants/constants";
import {ErrorService} from "../error/error.service";
import {IPatient} from "../../models/response/patient";
import {IRehabProgram} from "../../models/response/rehab/rehab_program";
import {IHistoryResponse} from "../../models/response/history/historyResponse";
import {IModule} from "../../models/response/module/module";
import {IExercise} from "../../models/exercise";
import {IForm} from "../../models/form";
import {IFormShortResponse} from "../../models/response/module/formShort";

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
    return this._http.get<IPatient>(`${this._baseUrl}/me`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getRehab() {
    return this._http.get<IRehabProgram>(`${this._baseUrl}/rehab`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getModule(moduleId: string) {
    return this._http.get<IModule>(`${this._baseUrl}/modules/${moduleId}`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getHistory() {
    return this._http.get<IHistoryResponse[]>(`${this._baseUrl}/history`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getExercise(moduleId: string, exerciseId: string) {
    return this._http.get<IExercise>(`${this._baseUrl}/modules/${moduleId}/exercises/${exerciseId}`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getForm(moduleId: string, formId: string) {
    return this._http.get<IForm>(`${this._baseUrl}/modules/${moduleId}/forms/${formId}`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getAllFormModule(moduleId: string) {
    return this._http.get<IFormShortResponse[]>(`${this._baseUrl}/modules/${moduleId}/forms/all`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getProgramForm(programFormId: string) {
    return this._http.get<IForm>(`${this._baseUrl}/rehab/forms/${programFormId}`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
