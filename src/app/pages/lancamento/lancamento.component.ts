import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {LancamentoService} from '../../service/lancamento.service';
import {Lancamento, TipoLancamento} from '../../model/lancamento';
import {ShowLancamento} from '../../model/show-lancamento';
import {AdicionaLancamentoComponent} from '../../component/adiciona-lancamento/adiciona-lancamento.component';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {
  options: FormGroup;
  usuario: string;
  lancamentos: Lancamento[];
  showLancamentos: ShowLancamento[];
  receita = TipoLancamento.Receita;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private lancamentoService: LancamentoService) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }

  ngOnInit() {
    this.lancamentoService.getAll()
      .subscribe((res: Lancamento[]) => {
        this.lancamentos = res;
      });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AdicionaLancamentoComponent, {
      width: '550px',
      data: {usuario: this.usuario}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('fechou');
      this.usuario = result;
    });
  }

}
