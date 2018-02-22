import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import {CategoriaComponent} from './categoria.component';
import {CategoriaService} from '../../service/categoria.service';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriaRoutingModule
  ],
  declarations: [CategoriaComponent],
  providers: [
    CategoriaService
  ]
})
export class CategoriaModule { }
