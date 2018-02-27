import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PessoaRoutingModule} from './pessoa-routing.module';
import {CadastroPessoaComponent} from './cadastro-pessoa/cadastro-pessoa.component';
import {SharedModule} from '../../shared/shared.module';
import {PessoaComponent} from './pessoa.component';
import {UsuarioService} from '../../service/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    PessoaRoutingModule,
    SharedModule
  ],
  declarations: [
    CadastroPessoaComponent,
    PessoaComponent
  ],
  providers: [
    UsuarioService
  ]
})
export class PessoaModule {
}
