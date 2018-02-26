import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth/auth.service';

export class HeaderInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dummyrequest = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.auth.getToken()}`
      }
    });
    console.log('Cloned Request');
    console.log(dummyrequest);
    return next.handle(dummyrequest);
  }

}
