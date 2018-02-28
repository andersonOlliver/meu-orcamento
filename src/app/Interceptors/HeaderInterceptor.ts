import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth/auth.service';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import {Router} from '@angular/router';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dummyrequest = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(dummyrequest)
    // .do((ev: any) => {
    //   console.log(ev);
    //   if (ev instanceof HttpResponse) {
    //   }
    // }, (e: HttpErrorResponse) => {
    //   console.log(e);
    // })
      .catch(response => {
        if (response instanceof HttpErrorResponse) {
          console.log('Processing http error', response);
          console.log(window.location);
          this.router.navigate([`login`], {queryParams: {navigate: window.location.pathname.substring(1)}});
        }
        return Observable.throw(response);
      });
  }

}
