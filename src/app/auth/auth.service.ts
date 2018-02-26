import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor() { }

  public getToken(): string {
    // return localStorage.getItem('token');
    return '5VSFo7saVFciIXJULmYvcBv3mTdKGor6lfma568tka_4NZoN-tIAdMlG0XkszDDKiREWb-WCY3DvFckSTSBPZ8uG5NqaBL0EIEjS5tFjLOaksomfuEOoArSMlWV8y9717KJ9GA6Idl1W7xcZECWvMAfDR_XTfa8DVekz0ym7QYfb-5ZsM1NhUQu-FYY4cLOJSl4xkbwzyEDYGW3x_56bT7RA3FWR1TZn76Yl1xh2hgsUPShwuzYhgJ554kML5twJAI2tg5ileaJ0BzkOXs308xegr3zAcPvR_1vmO5L5fvyOSabVyb0jzeSUZSORh0KXw-aLPtzzW7wECmSvErjFWd8OFbm_1mj8MwSbCa6qiWU';
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }
}
