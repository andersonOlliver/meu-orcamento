import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../../model/usuario';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Usuario;
  repitaSenha: string;
  constructor() { }

  ngOnInit() {
    this.pessoa = new Usuario();
  }

  onSumit(){
    console.log(this.pessoa);
  }
}
