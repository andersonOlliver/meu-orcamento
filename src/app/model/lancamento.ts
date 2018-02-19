import {Categoria} from './categoria';

export class Lancamento {
  id: AAGUID;
  position: number;
  descricao: string;
  valor: number;
  data: Date | number;
  categoria: Categoria | string;

}
