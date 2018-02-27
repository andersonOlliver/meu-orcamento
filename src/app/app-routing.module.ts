import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from './guard/auth.guard';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'categoria', loadChildren: './pages/categoria/categoria.module#CategoriaModule', canActivate: [AuthGuard]},
      {path: 'lancamento', loadChildren: './pages/lancamento/lancamento.module#LancamentoModule', canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'pessoal', loadChildren: './pages/pessoa/pessoa.module#PessoaModule'},
      {path: 'termos-de-uso', loadChildren: './pages/termo-de-uso/termo-de-uso.module#TermoDeUsoModule'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
