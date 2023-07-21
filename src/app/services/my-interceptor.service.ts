import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService {
  constructor(private user: UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('access-token')
    const authReq = req.clone({

      setHeaders: {
        Authorization: `${authToken}`,
      }
    });
    return next.handle(authReq);
  }
}
