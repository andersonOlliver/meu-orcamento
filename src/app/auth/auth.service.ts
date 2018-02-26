import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Usuario} from '../model/usuario';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  cachedRequests: Array<HttpRequest<any>> = [];
  public token: string;

  constructor(private http: HttpClient) {
  }

  public getToken(): string {
    return JSON.parse(localStorage.getItem('currentUser')).token;
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }


}
