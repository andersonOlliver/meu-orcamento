import {EventEmitter, Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Usuario} from '../model/usuario';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {isNullOrUndefined} from 'util';

@Injectable()
export class AuthService {
  cachedRequests: Array<HttpRequest<any>> = [];
  public eventAuthenticated = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
  }

  public getToken(): string {
    const user = localStorage.getItem('currentUser');
    if (user) {
      return user;
    }
    return null;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    // return tokenNotExpired(null, token);
    return !isNullOrUndefined(token);
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }



}
