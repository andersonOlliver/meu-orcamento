import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Usuario} from '../model/usuario';

@Injectable()
export class UsuarioService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.api_endpoint}usuario`;
  }

  adicionar(usuario: Usuario) {
    return this.http.post(this.url, usuario);
  }

  getById(id: AAGUID) {
    return this.http.get(this.url);
  }
  
}
