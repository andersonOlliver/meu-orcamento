import {Injectable} from '@angular/core';
import {Categoria} from '../model/categoria';

@Injectable()
export class CategoriaService {

  private categorias: Array<Categoria>;

  constructor() {
    this.categorias = new Array<Categoria>();

    this.categorias.push({id: '01', titulo: 'Alimentação', cor: 'rgb(255, 153, 0)'});
    this.categorias.push({id: '02', titulo: 'Lazer', cor: '#33ffff'});
    this.categorias.push({id: '04', titulo: 'Moradia', cor: 'rgb(204, 204, 204)'});
    this.categorias.push({id: '05', titulo: 'Salário', cor: '#66ff99'});
    this.categorias.push({id: '06', titulo: 'Saúde', cor: '#cc0000'});
    this.categorias.push({id: '07', titulo: 'Transporte', cor: '#ffff00'});
    this.categorias.push({id: '08', titulo: 'Outros', cor: '#000000'});
  }


  getAll() {
    return this.categorias;
  }

  getByTitulo(titulo: string): Categoria {
    return this.categorias.find(c => c.titulo === titulo);
  }

  adicionar(categoria: Categoria) {
    this.categorias.push(categoria);
  }

}
