import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {LancamentoService} from '../../service/lancamento.service';
import {AddLancamentoComponent} from '../../component/add-lancamento/add-lancamento.component';
import {Lancamento, TipoLancamento} from '../../model/lancamento';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {
  displayedColumns = ['descricao', 'categoria', 'data', 'valor'];
  dataSource: any;
  options: FormGroup;
  usuario: string;
  lancamentos: Lancamento[];
  receita = TipoLancamento.RECEITA;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private lancamentoService: LancamentoService) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(this.lancamentoService.getAll());
    this.lancamentos = this.lancamentoService.getAll();
    // console.log(this.dataSource);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddLancamentoComponent, {
      width: '550px',
      data: {usuario: this.usuario}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('fechou');
      this.usuario = result;
    });
  }

  reload() {
    this.dataSource.data = this.lancamentoService.getAll();
  }
}
