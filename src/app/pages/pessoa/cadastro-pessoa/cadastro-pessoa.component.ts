import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../../model/usuario';
import {UsuarioService} from '../../../service/usuario.service';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {ErrorService} from '../../../shared/service/error.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Usuario;
  repitaSenha: string;
  errors: string[];
  msgBotao = 'Começar a usar';

  constructor(private errorService: ErrorService,
              private usuarioService: UsuarioService) {

    this.errorService.eventError.subscribe((erros: string[]) => {
      this.errors = erros;
    });
  }

  ngOnInit() {
    this.pessoa = new Usuario();
  }

  onSumit(form) {
    this.msgBotao = 'Aguarde';
    this.errors = [];
    if (form.valid) {
      this.usuarioService.adicionar(this.pessoa)
        .subscribe((res: Usuario) => {
            if (res) {
              localStorage.setItem(res.email, JSON.stringify(res));
            }
          }, error2 => {
            this.msgBotao = 'Tentar novamente';
          }
        );
    } else {
      this.msgBotao = 'Tentar novamente';
      this.errors.push('Informe os campos abaixo!');
    }
  }
}
