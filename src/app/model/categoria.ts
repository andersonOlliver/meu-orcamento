export class Categoria {
  id: AAGUID;
  titulo: string;
  categoriaPai?: Categoria;
  cor?: string;
}
