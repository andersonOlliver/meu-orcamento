import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor() { }

  public getToken(): string {
    // return localStorage.getItem('token');
    return 'SHn6GuUFdxWyKOBfpDCsUFoBcsYOQ8c3eAAnpDbcD2WLG_88Vt3oz3Bw3M2qD2CaEgAXAIL5mzXYvs1bDUiEvzz6LjW-EZpKJNqJ0roxHqwwwo2x0PoBLN-7U-oKIpCJh0sE-S-BdQfeBXX6Kw9-BqjTDn-EPm0qbDbah5oe-EjbO346yYYA94FzvWIrOGp_loorh19gd2AA7GltOH-i9IF_pxR203Vd-iZHhNFcOiHl6X7kZWy43CJIGoi1FmI3y854eJvp9NpC0hyY0gpcuH7K_iuAUWKnKJzl591vf7ZHvbJnEOTKg4e4s-TlfjnI4wlk2B5TLbMK3Fv35VceuIMGtZwWGYdSPlMTE2Lpqro';
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }
}
