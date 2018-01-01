import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './component/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import 'hammerjs';
import {AddLancamentoComponent} from './component/add-lancamento/add-lancamento.component';
import {LancamentoService} from './service/lancamento.service';
import {FirebaseConfig} from './../environments/firebase.config';
import {AngularFireModule} from 'angularfire2/index';
import {AngularFireDatabase} from 'angularfire2/database';
import {MenuUsuarioComponent} from './component/menu-usuario/menu-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddLancamentoComponent,
    MenuUsuarioComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig),

    MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDialogModule,
    MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatInputModule, MatButtonModule,
    MatCardModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [ LancamentoService, AngularFireDatabase ],
  bootstrap: [AppComponent],
  entryComponents: [AddLancamentoComponent]
})
export class AppModule { }
