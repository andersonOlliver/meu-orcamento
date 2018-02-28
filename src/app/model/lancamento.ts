import {Categoria} from './categoria';

export class Lancamento {
  lancamentoId: AAGUID;
  descricao: string;
  valor: number;
  dataLancamento: Date | number | string;
  categoriaId: AAGUID;
  private _categoria: Categoria;
  tipoLancamento?: TipoLancamento | number;

  constructor(dataLancamento?: Date) {
    this.dataLancamento = dataLancamento;
  }

  public get categoria(){
    return this._categoria;
  }

  public set categoria(categoria: Categoria){
    this.categoriaId = categoria.categoriaId;
    this._categoria = categoria;
  }
}

export enum TipoLancamento {
  Receita = 1, Despesa = 0
}
