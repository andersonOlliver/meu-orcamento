import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {path: 'categoria', loadChildren: './pages/categoria/categoria.module#CategoriaModule'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
