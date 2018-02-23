import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoriaRoutingModule} from './categoria-routing.module';
import {CategoriaComponent} from './categoria.component';
import {CategoriaService} from '../../service/categoria.service';
import {SharedModule} from '../../shared/shared.module';
import {AdicionaCategoriaComponent} from '../../component/adiciona-categoria/adiciona-categoria.component';
import {HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
    CategoriaService,
    HttpClient
  ],
  entryComponents: [
    AdicionaCategoriaComponent
  ]
})
export class CategoriaModule {
}
