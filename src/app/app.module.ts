import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import 'hammerjs';
import {LancamentoService} from './service/lancamento.service';
import {FirebaseConfig} from './../environments/firebase.config';
import {AngularFireModule} from 'angularfire2/index';
import {AngularFireDatabase} from 'angularfire2/database';
import {MenuUsuarioComponent} from './component/menu-usuario/menu-usuario.component';
import {SharedModule} from './shared/module/shared.module';
import {HomeComponent} from './pages/home/home.component';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeExtraPt from '@angular/common/locales/extra/pt';
import {LoginComponent} from './pages/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './service/login.service';
import {AuthGuard} from './guard/auth.guard';
import {AuthService} from './auth/auth.service';

registerLocaleData(localePt, 'pt', localeExtraPt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuUsuarioComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    SharedModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    LoginService,
    LancamentoService,
    AngularFireDatabase,

  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
