import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../../model/usuario';
import {UsuarioService} from '../../../service/usuario.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Usuario;
  repitaSenha: string;
  msgs: string[];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.pessoa = new Usuario();
  }

  onSumit() {
    this.usuarioService.adicionar(this.pessoa)
      .subscribe((res: Usuario) => {
        if (res) {
          localStorage.setItem(res.email, JSON.stringify(res));
        }
      }, error2 => {
        console.log(error2);
        const errors = error2.error.modelState;
        console.log(errors);

      });
  }
}
