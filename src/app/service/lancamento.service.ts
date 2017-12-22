import { Injectable } from '@angular/core';
import { Lancamento } from '../model/lancamento';
import { Observable } from 'rxjs/Observable';
import { Promise } from 'q';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class LancamentoService {

  private lancamentos: Lancamento[] = [
    { position: 1, descricao: '  ', valor: 20.0, data: Date.now(), categoria: 'Aimentacao' },
    { position: 2, descricao: '  ', valor: 40.0, data: Date.now(), categoria: 'Alimentacao' },
    { position: 3, descricao: '  ', valor: 20.0, data: Date.now(), categoria: 'Transporte' }
  ];

  constructor(private angularFire: AngularFireDatabase) { }

  getAll() {
    return this.lancamentos;
  }


  add(lancamento: Lancamento){
    this.angularFire.list("lançamentos").push(lancamento)
      .then((t: any) => console.log('dados gravados: ' + t.key)),
      (e:any) => console.log(e.message);
    this.lancamentos.push(lancamento);
  }
}
