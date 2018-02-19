import {Injectable} from '@angular/core';
import {Lancamento} from '../model/lancamento';
import {AngularFireDatabase} from 'angularfire2/database';
import {Categoria} from '../model/categoria';

@Injectable()
export class LancamentoService {

  private categorias: Categoria[] = [
    {id: '01', titulo: 'Alimentacao', categoriaPai: null},
    {id: '02', titulo: 'Transporte', categoriaPai: null},
    {id: '03', titulo: 'Salario', categoriaPai: null}
  ];

  private lancamentos: Lancamento[] = [];

  constructor(
    // private angularFire: AngularFireDatabase
  ) {
    this.lancamentos.push(<Lancamento>{position: 1, descricao: '  ', valor: 20.0, data: Date.now(), categoria: this.categorias[2]});
    this.lancamentos.push(<Lancamento>{position: 2, descricao: '  ', valor: 40.0, data: Date.now(), categoria: 'Alimentacao'});
    this.lancamentos.push(<Lancamento>{position: 3, descricao: '  ', valor: 20.0, data: Date.now(), categoria: 'Transporte'});
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
