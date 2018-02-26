import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public login(email: string, senha: string) {

    const body = new HttpParams()
      .set(`username`, email)
      .set(`password`, senha)
      .set(`grant_type`, 'password');
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post(`http://localhost:51404/token`, body.toString(), {headers, observe: 'response'})
      .map(res => {
        const token = (<any> res.body).access_token;
        // salvar no localStorage
        console.log(token);
        return res;
      });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
