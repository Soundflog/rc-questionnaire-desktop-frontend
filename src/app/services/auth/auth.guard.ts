// auth.guard.ts
import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';

import {map} from "rxjs/operators";
import {AuthService} from "./auth.service";

/*@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | Promise<Observable<never>>> {
    return this.authService.isAuthenticated().pipe(
      map((authenticated) => {
        if (authenticated) {
          return true;
        } else {
          return this.authService.redirectToLogin();
        }
      })
    );
  }
}*/

export function authGuard():CanActivateFn{
  return () => {
    const authService: AuthService = inject(AuthService)
    const router: Router = inject(Router)

    if (authService.isAuthSig()){
      return true
    }
    router.navigate(['/'])
    return false
  }
}
