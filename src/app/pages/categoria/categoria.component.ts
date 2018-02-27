import {ChangeDetectorRef, Component, ContentChild, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Categoria} from '../../model/categoria';
import {CategoriaService} from '../../service/categoria.service';
import {MatDialog} from '@angular/material';
import {AdicionaCategoriaComponent} from '../../component/adiciona-categoria/adiciona-categoria.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @ViewChildren('span') spans: QueryList<any>;
  @ContentChild('links') links;

  categorias: Array<Categoria>;
  showActionLinks = false;

  constructor(private categoriaService: CategoriaService,
              public dialog: MatDialog,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.categoriaService.getAll()
      .subscribe((res: Array<Categoria>) => {
        this.categorias = res;
      });
  }

  show(item) {
    (<HTMLElement>item).style.display = 'inline-block';
  }

  unShow(item) {
    (<HTMLElement>item).style.display = 'none';
  }

  openAdicionaCategoria() {
    const dialogRef = this.dialog.open(AdicionaCategoriaComponent, {
      width: '470px',
    });

    dialogRef.afterClosed().subscribe((result: Categoria) => {
      if (result) {
        this.categorias.push(result);
      }
    });
  }

  openEditaCategoria(categoria: Categoria) {
    const dialogRef = this.dialog.open(AdicionaCategoriaComponent, {
      width: '470px',
      data: categoria
    });

    dialogRef.afterClosed().subscribe((result: Categoria) => {
      console.log('The dialog was closed');
      if (result && (result.titulo !== categoria.titulo || result.cor !== categoria.cor)) {
        const indice = this.categorias.findIndex(i => i.categoriaId === result.categoriaId);
        this.categorias[indice] = result;
      }
    });
  }
}
