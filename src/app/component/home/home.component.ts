import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Lancamento } from '../../model/lancamento';
import { LancamentoService } from '../../service/lancamento.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['position', 'descricao', 'categoria', 'data', 'valor'];
  dataSource : any;
  options: FormGroup;

  constructor(fb: FormBuilder, private lancamentoService: LancamentoService) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.lancamentoService.getAll());

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  reload(){
    this.dataSource.data = this.lancamentoService.getAll();
  }
}
