// auth.service.ts
import {Injectable, signal} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, tap} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";
import {IAuthUser, IUser} from "../../models/types/user.interface";
import {API_URL} from "../../constants/constants";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // real-project = false
  isAuthSig = signal<boolean>(true)

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    const token = localStorage.getItem('token')
    this.isAuthSig.set(!!token)
  }

  // signUp
  signUp(userData: IAuthUser) {
    return this.http.post<any>(`${API_URL}/signup`, userData)
      .pipe(
        tap(() =>
          this.login(userData)
        ),
        catchError((error) => {
          console.error('Login error:', error);
          this.handeError(error);
          throw new Error(error.message);
        })
      )
      .subscribe(() =>
        this.toastr.success('created')
      )
  }

  login(userData: IAuthUser) {
    return this.http.post<IUser>(`${API_URL}/auth`, userData)
      .pipe(
        tap((res: IUser)=> {
          localStorage.setItem('token', res.token)
          this.isAuthSig.set(true)
        }),
        catchError((error) => {
          console.error('Login error:', error);
          this.handeError(error);
          throw new Error(error.message);
        })
      )
      .subscribe(
        ()=> {
          this.toastr.success('logged in')
          this.router.navigate(['/rehabilitation'])
        });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthSig.set(false)
    this.router.navigate(['/login']).then(r =>of() )
    this.toastr.success('Logged out')
  }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return of(!!token);
  }

  redirectToLogin(): Promise<Observable<never>> {
    return this.router.navigate(['login']).then(() => of());
  }

  private handeError(err: HttpErrorResponse) {
    this.toastr.error(err.error.message)
  }
}
