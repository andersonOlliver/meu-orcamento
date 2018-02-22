import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LancamentoRoutingModule} from './lancamento-routing.module';
import {LancamentoService} from '../../service/lancamento.service';
import {LancamentoComponent} from './lancamento.component';
import {SharedModule} from '../../shared/shared.module';
import {CategoriaService} from '../../service/categoria.service';

@NgModule({
  imports: [
    CommonModule,
    LancamentoRoutingModule,
    SharedModule
  ],
  declarations: [LancamentoComponent],
  providers: [
    CategoriaService,
    LancamentoService
  ]
})
export class LancamentoModule { }
