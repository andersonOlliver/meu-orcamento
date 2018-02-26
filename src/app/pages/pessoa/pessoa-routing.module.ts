import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PessoaComponent} from './pessoa.component';
import {CadastroPessoaComponent} from './cadastro-pessoa/cadastro-pessoa.component';

const routes: Routes = [
  {path: '', component: PessoaComponent},
  {path: 'cadastro', component: CadastroPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule {
}
