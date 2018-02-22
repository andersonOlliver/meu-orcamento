import {Injectable} from '@angular/core';
import {Lancamento, TipoLancamento} from '../model/lancamento';
// import {AngularFireDatabase} from 'angularfire2/database';
import {Categoria} from '../model/categoria';
import {CategoriaService} from './categoria.service';

@Injectable()
export class LancamentoService {

  private categorias: Categoria[];

  private lancamentos: Lancamento[] = [];

  constructor(private categoriaService: CategoriaService
              // private angularFire: AngularFireDatabase
  ) {
    this.categorias = this.categoriaService.getAll();
    this.lancamentos.push(<Lancamento>{
      position: 1,
      descricao: 'Salário Sigma',
      valor: 2900.0,
      data: Date.now(),
      categoria: this.categoriaService.getByTitulo('Salário'),
      tipoLancamento: TipoLancamento.RECEITA
    });
    this.lancamentos.push(<Lancamento>{
      position: 2,
      descricao: 'Aluguel',
      valor: 20.0,
      data: Date.now(),
      categoria: this.categorias[2],
      tipoLancamento: TipoLancamento.DESPESA
    });
    this.lancamentos.push(<Lancamento>{
      position: 3,
      descricao: 'Almoço',
      valor: 40.0,
      data: Date.now(),
      categoria: this.categoriaService.getByTitulo('Alimentação'),
      tipoLancamento: TipoLancamento.DESPESA
    });
    this.lancamentos.push(<Lancamento>{
      position: 4,
      descricao: 'Combustível',
      valor: 20.0,
      data: Date.now(),
      categoria: this.categoriaService.getByTitulo('Transporte'),
      tipoLancamento: TipoLancamento.DESPESA
    });
  }

  getAll() {
    return this.lancamentos;
  }


  add(lancamento: Lancamento) {
    // this.angularFire.list('lançamentos').push(lancamento)
    //   .then((t: any) => console.log('dados gravados: ' + t.key)),
    //   (e: any) => console.log(e.message);
    this.lancamentos.push(lancamento);
  }
}
