// auth.service.ts
import {Injectable, signal} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, tap} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";
import {IAuthUser, IUser} from "../../models/types/user.interface";
import {API_URL} from "../../constants/constants";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // real-project = false
  isAuthSig = signal<boolean>(false)

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    const token = localStorage.getItem('token')
    this.isAuthSig.set(!!token)
  }

  login(userData: IAuthUser) {
    return this.http.post<IUser>(`${API_URL}/auth/auth`, userData)
      .pipe(
        tap((res: IUser)=> {
          localStorage.setItem('token', res.token)
          this.isAuthSig.set(true)
        }),
        catchError((error) => {
          this.handeError(error);
          throw new Error(error.message);
        })
      )

  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthSig.set(false)
    this.router.navigate(['/']).then(r =>of() )
    this.toastr.success('Logged out')
  }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return of(!!token);
  }

  private handeError(err: HttpErrorResponse) {
    this.toastr.error(err.error.message)
  }
}
