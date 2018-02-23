import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import {CategoriaComponent} from './categoria.component';
import {CategoriaService} from '../../service/categoria.service';
import {SharedModule} from '../../shared/shared.module';
import {AdicionaCategoriaComponent} from '../../component/adiciona-categoria/adiciona-categoria.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriaRoutingModule
  ],
  declarations: [
    AdicionaCategoriaComponent,
    CategoriaComponent
  ],
  providers: [
    CategoriaService
  ],
  entryComponents:[
    AdicionaCategoriaComponent
  ]
})
export class CategoriaModule { }
