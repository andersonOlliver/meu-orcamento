export class Categoria {
  categoriaId: AAGUID;
  titulo: string;
  categoriaPai?: Categoria;
  cor?: string;

  constructor(cor?: string){
    this.cor = cor;
  }
}
