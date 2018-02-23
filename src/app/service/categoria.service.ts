import {Injectable} from '@angular/core';
import {Categoria} from '../model/categoria';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CategoriaService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.api_endpoint}categoria`;
  }


  getAll() {
    // return this.categorias;
    return this.http.get(this.url);
  }

  getByTitulo(titulo: string): Categoria | void {
    // return this.categorias.find(c => c.titulo === titulo);
  }

  adicionar(categoria: Categoria) {
    return this.http.post(this.url, categoria);
  }

}
