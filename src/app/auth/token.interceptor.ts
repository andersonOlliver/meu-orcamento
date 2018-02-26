import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

    console.log(request);
    return next.handle(request);
  }
}
