import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../constants/constants";

export class AuthInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ) {
    const token = localStorage.getItem('token')

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        },
        url: `${API_URL}/${req.url}`
      })
    }

    return next.handle(req)
  }
}
