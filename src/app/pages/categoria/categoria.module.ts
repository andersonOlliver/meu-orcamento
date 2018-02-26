import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoriaRoutingModule} from './categoria-routing.module';
import {CategoriaComponent} from './categoria.component';
import {CategoriaService} from '../../service/categoria.service';
import {SharedModule} from '../../shared/shared.module';
import {AdicionaCategoriaComponent} from '../../component/adiciona-categoria/adiciona-categoria.component';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {HeaderInterceptor} from '../../Interceptors/HeaderInterceptor';
import {AuthService} from '../../auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    CategoriaRoutingModule
  ],
  declarations: [
    AdicionaCategoriaComponent,
    CategoriaComponent
  ],
  providers: [
    AuthService,
    CategoriaService,
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
  entryComponents: [
    AdicionaCategoriaComponent
  ]
})
export class CategoriaModule {
}
