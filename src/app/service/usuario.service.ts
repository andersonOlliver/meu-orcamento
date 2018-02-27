import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Usuario} from '../model/usuario';
import {Observable} from 'rxjs/Observable';
import {ErrorService} from '../shared/service/error.service';

@Injectable()
export class UsuarioService {
  private url: string;

  constructor(private http: HttpClient, private errorService: ErrorService) {
    this.url = `${environment.api_endpoint}usuario`;
  }

  adicionar(usuario: Usuario) {
    return this.http.post(this.url, usuario)
      .catch(err => {
        console.log(err);
        if (err.name === 'HttpErrorResponse') {
          this.errorService.emitirErros(['Erro ao conectar ao serviço', 'Tente novamente']);
        }
        return err;
      });
  }

  getById(id: AAGUID) {
    return this.http.get(this.url);
  }

}
