import {Injectable} from '@angular/core';
import {Categoria} from '../model/categoria';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CategoriaService {

  private url: string;
  public categorias: Array<Categoria>;

  constructor(private http: HttpClient) {
    this.url = `${environment.api_endpoint}categoria`;
    this.categorias = new Array<Categoria>();

    this.categorias.push({CategoriaId: '01', Titulo: 'Alimentação', Cor: 'rgb(255, 153, 0)'});
    this.categorias.push({CategoriaId: '02', Titulo: 'Lazer', Cor: '#33ffff'});
    this.categorias.push({CategoriaId: '04', Titulo: 'Moradia', Cor: 'rgb(204, 204, 204)'});
    this.categorias.push({CategoriaId: '05', Titulo: 'Salário', Cor: '#66ff99'});
    this.categorias.push({CategoriaId: '06', Titulo: 'Saúde', Cor: '#cc0000'});
    this.categorias.push({CategoriaId: '07', Titulo: 'Transporte', Cor: '#ffff00'});
    this.categorias.push({CategoriaId: '08', Titulo: 'Outros', Cor: '#000000'});
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
