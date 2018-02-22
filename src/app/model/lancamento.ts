import {Categoria} from './categoria';

export class Lancamento {
  id: AAGUID;
  position: number;
  descricao: string;
  valor: number;
  data: Date | number | string;
  categoria: Categoria | string;
  tipoLancamento?: TipoLancamento | string;
}

export enum TipoLancamento {
  RECEITA = 'Receita', DESPESA = 'Despesa'
}
