import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'termos-de-uso', loadChildren: './pages/termo-de-uso/termo-de-uso.module#TermoDeUsoModule'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
