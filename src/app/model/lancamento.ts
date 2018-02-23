import {Categoria} from './categoria';

export class Lancamento {
  LancamentoId: AAGUID;
  Descricao: string;
  Valor: number;
  DataLancamento: Date | number | string;
  CategoriaId: AAGUID;
  Categoria: Categoria;
  TipoLancamento?: TipoLancamento | number;

  constructor(dataLancamento?: Date) {
    this.DataLancamento = dataLancamento;
  }
}

export enum TipoLancamento {
  Receita = 1, Despesa = 0
}
