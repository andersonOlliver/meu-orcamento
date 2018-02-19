import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TermoDeUsoComponent} from './termo-de-uso.component';

const routes: Routes = [
  {path: '', component: TermoDeUsoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermoDeUsoRoutingModule { }
