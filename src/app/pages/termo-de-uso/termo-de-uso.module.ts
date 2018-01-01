import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermoDeUsoRoutingModule } from './termo-de-uso-routing.module';
import {TermoDeUsoComponent} from './termo-de-uso.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TermoDeUsoRoutingModule,

    MatCardModule
  ],
  declarations: [
    TermoDeUsoComponent
  ]
})
export class TermoDeUsoModule { }
