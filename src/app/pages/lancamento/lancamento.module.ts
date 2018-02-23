import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LancamentoRoutingModule} from './lancamento-routing.module';
import {LancamentoService} from '../../service/lancamento.service';
import {LancamentoComponent} from './lancamento.component';
import {SharedModule} from '../../shared/shared.module';
import {CategoriaService} from '../../service/categoria.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AdicionaLancamentoComponent} from '../../component/adiciona-lancamento/adiciona-lancamento.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LancamentoRoutingModule,
    SharedModule
  ],
  declarations: [
    AdicionaLancamentoComponent,
    LancamentoComponent
  ],
  providers: [
    CategoriaService,
    HttpClient,
    LancamentoService
  ],
  entryComponents: [
    AdicionaLancamentoComponent
  ]
})
export class LancamentoModule {
}
