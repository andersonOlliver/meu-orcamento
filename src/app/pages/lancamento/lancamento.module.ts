import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LancamentoRoutingModule} from './lancamento-routing.module';
import {LancamentoService} from '../../service/lancamento.service';
import {LancamentoComponent} from './lancamento.component';
import {SharedModule} from '../../shared/module/shared.module';
import {CategoriaService} from '../../service/categoria.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AdicionaLancamentoComponent} from '../../component/adiciona-lancamento/adiciona-lancamento.component';
import {HeaderInterceptor} from '../../Interceptors/HeaderInterceptor';
import {MoneyMaskDirective} from '../../shared/directive/money-mask.directive';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LancamentoRoutingModule,
    SharedModule
  ],
  declarations: [
    AdicionaLancamentoComponent,
    LancamentoComponent,
  ],
  providers: [
    CategoriaService,
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    LancamentoService
  ],
  entryComponents: [
    AdicionaLancamentoComponent
  ]
})
export class LancamentoModule {
}
