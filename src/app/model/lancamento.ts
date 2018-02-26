import {Categoria} from './categoria';

export class Lancamento {
  lancamentoId: AAGUID;
  descricao: string;
  valor: number;
  dataLancamento: Date | number | string;
  categoriaId: AAGUID;
  categoria: Categoria;
  tipoLancamento?: TipoLancamento | number;

  constructor(dataLancamento?: Date) {
    this.dataLancamento = dataLancamento;
  }
}

export enum TipoLancamento {
  Receita = 1, Despesa = 0
}
