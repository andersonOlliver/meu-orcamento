import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Categoria} from '../../model/categoria';
import {CategoriaService} from '../../service/categoria.service';

@Component({
  selector: 'app-adiciona-categoria',
  templateUrl: './adiciona-categoria.component.html',
  styleUrls: ['./adiciona-categoria.component.css']
})
export class AdicionaCategoriaComponent implements OnInit {

  categoria: Categoria;

  constructor(private categoriaService: CategoriaService,
              public dialogRef: MatDialogRef<AdicionaCategoriaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.categoria = new Categoria('#3f51b5');
    if (this.data) {
      this.categoria = this.data;
    }
  }

  onSubmit() {
    console.log(this.categoria);
    this.categoriaService.adicionar(this.categoria)
      .subscribe((res: Categoria) => {
        if (res.categoriaId) {
          this.categoria = new Categoria();
          this.dialogRef.close(res);
        }
      });
  }

}
