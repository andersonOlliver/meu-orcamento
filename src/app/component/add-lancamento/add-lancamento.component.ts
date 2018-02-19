import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Lancamento } from '../../model/lancamento';
import { LancamentoService } from '../../service/lancamento.service';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add-lancamento',
  templateUrl: './add-lancamento.component.html',
  styleUrls: ['./add-lancamento.component.css']
})
export class AddLancamentoComponent implements OnInit {

  public lancamento: Lancamento;

  constructor(public dialogRef: MatDialogRef<AddLancamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lancamentoService: LancamentoService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.lancamento = new Lancamento();
  }

  onSaveClick() {
    this.lancamentoService.add(this.lancamento);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  categoriaControl = new FormControl('', [Validators.required]);
  valorControl = new FormControl('', [Validators.required]);
}
