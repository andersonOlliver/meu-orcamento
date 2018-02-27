import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PessoaRoutingModule} from './pessoa-routing.module';
import {CadastroPessoaComponent} from './cadastro-pessoa/cadastro-pessoa.component';
import {SharedModule} from '../../shared/module/shared.module';
import {PessoaComponent} from './pessoa.component';
import {UsuarioService} from '../../service/usuario.service';
import {ErrorService} from '../../shared/service/error.service';

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
    ErrorService,
    UsuarioService
  ]
})
export class PessoaModule {
}
