import {Injectable} from "@angular/core";
import {API_URL} from "../../constants/constants";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {IPatient} from "../../models/response/patient";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "../error/error.service";
import {IRehabProgram} from "../../models/response/rehab/rehab_program";
import {IAnswerRequest} from "../../models/request/answerRequest";
import {IScoreResponse} from "../../models/response/score";
import {IForm} from "../../models/form";


@Injectable({
  providedIn: 'root'
})
export class FormService {
  // http://localhost:8081/api/v1/patient/me
  private _baseUrl = `${API_URL}/forms`;
  // private formSubject = new BehaviorSubject<IForm[]>([]);
  // patient$ = this.formSubject.asObservable();

  constructor(private _http: HttpClient,
              private errorService: ErrorService) {
  }

  submitModuleFormAnswers(moduleFormId:string, answers: IAnswerRequest[]) {
    return this._http.post<IScoreResponse>(`${this._baseUrl}/answers/modules/${moduleFormId}/submit`, answers)
      .pipe(
        tap((response: IScoreResponse) => {
          console.log(response);
        }),
        catchError(this.errorHandler.bind(this))
      )
  }

  submitProgramFormAnswers(programFormId:string, answers: IAnswerRequest[]) {
    return this._http.post<IScoreResponse>(`${this._baseUrl}/answers/programs/${programFormId}/submit`, answers)
      .pipe(tap((response: IScoreResponse) => {
          console.log(response);
        }),
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
