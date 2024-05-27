import {Injectable} from "@angular/core";
import {API_URL} from "../../constants/constants";
import {BehaviorSubject, catchError, throwError} from "rxjs";
import {IPatient} from "../../models/response/patient";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "../error/error.service";
import {IRehabProgram} from "../../models/response/rehab/rehab_program";
import {IAnswerRequest} from "../../models/request/answerRequest";




@Injectable({
  providedIn: 'root'
})
export class FormService {
  // http://localhost:8081/api/v1/patient/me
  private _baseUrl = `${API_URL}/forms`;
  private formSubject = new BehaviorSubject<IPatient[]>([]);
  patient$ = this.formSubject.asObservable();

  constructor(private _http: HttpClient,
              private errorService: ErrorService) {
  }

  submitAnswers(moduleId:number, answers: IAnswerRequest[]) {
    return this._http.post(`${this._baseUrl}/${moduleId}`, answers)
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


  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
