import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import 'hammerjs';
import {AddLancamentoComponent} from './component/add-lancamento/add-lancamento.component';
import {LancamentoService} from './service/lancamento.service';
import {FirebaseConfig} from './../environments/firebase.config';
import {AngularFireModule} from 'angularfire2/index';
import {AngularFireDatabase} from 'angularfire2/database';
import {MenuUsuarioComponent} from './component/menu-usuario/menu-usuario.component';
import {SharedModule} from './shared/shared.module';
import {HomeComponent} from './pages/home/home.component';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeExtraPt from '@angular/common/locales/extra/pt';

registerLocaleData(localePt, 'pt', localeExtraPt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddLancamentoComponent,
    MenuUsuarioComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    SharedModule,
  ],
  providers: [ LancamentoService, AngularFireDatabase ],
  bootstrap: [AppComponent],
  entryComponents: [AddLancamentoComponent]
})
export class AppModule { }
