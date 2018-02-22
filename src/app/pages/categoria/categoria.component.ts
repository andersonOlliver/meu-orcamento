import {ChangeDetectorRef, Component, ContentChild, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Categoria} from '../../model/categoria';
import {CategoriaService} from '../../service/categoria.service';

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

  constructor(private categoriaService: CategoriaService, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.categorias = this.categoriaService.getAll();
  }

  show(item) {
    console.log('showww', item);
    (<HTMLElement>item).style.display = 'inline-block';
    this.ref.detectChanges();
  }

  unShow(item) {
    console.log('unshowww', item);
    (<HTMLElement>item).style.display = 'none';
  }
}
