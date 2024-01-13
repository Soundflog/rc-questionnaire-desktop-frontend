import {Injectable} from "@angular/core";
import {ILoginRequest} from "../loginRequest.interface";
import {Observable} from "rxjs";
import {ICurrentUser} from "../../shared/types/currentUser";
import {HttpClient} from "@angular/common/http";
import {AuthResponseInterface} from "../types/authResponse.interface";
import {map} from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  getUser(response: AuthResponseInterface):ICurrentUser{
    return response.user
  }

  //register
  register(data: ILoginRequest): Observable<ICurrentUser>{
    const url = 'http://conduit.productionready.io/api/users'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(
        map(this.getUser)
      )
  }

  login(data: ILoginRequest): Observable<ICurrentUser>{
    // const url = '/auth'
    const url = 'http://conduit.productionready.io/api/users/login'
    return this.http.post<AuthResponseInterface>(url, data)
      .pipe(
        map(this.getUser)
      )
  }
}
