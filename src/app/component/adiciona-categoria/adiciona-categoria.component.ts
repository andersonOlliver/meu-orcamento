import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Categoria} from '../../model/categoria';

@Component({
  selector: 'app-adiciona-categoria',
  templateUrl: './adiciona-categoria.component.html',
  styleUrls: ['./adiciona-categoria.component.css']
})
export class AdicionaCategoriaComponent implements OnInit {

  categoria: Categoria;
  constructor(public dialogRef: MatDialogRef<AdicionaCategoriaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.categoria = new Categoria('#3f51b5');
  }

  onSaveClick() {
    console.log(this.categoria);
    this.dialogRef.close();
  }
}
