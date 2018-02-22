import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {path: 'categoria', loadChildren: './pages/categoria/categoria.module#CategoriaModule'},
      {path: 'lancamento', loadChildren: './pages/lancamento/lancamento.module#LancamentoModule'},
      {path: 'termos-de-uso', loadChildren: './pages/termo-de-uso/termo-de-uso.module#TermoDeUsoModule'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
