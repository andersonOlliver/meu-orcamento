import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PessoaRoutingModule,
    SharedModule
  ],
  declarations: [CadastroPessoaComponent]
})
export class PessoaModule { }
