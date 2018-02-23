export class Categoria {
  CategoriaId: AAGUID;
  Titulo: string;
  categoriaPai?: Categoria;
  Cor?: string;

  constructor(cor?: string){
    this.Cor = cor;
  }
}
