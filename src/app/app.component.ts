import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddLancamentoComponent } from './component/add-lancamento/add-lancamento.component';
import { ViewChildren } from '@angular/core/src/metadata/di';
import { HomeComponent } from './component/home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HomeComponent) home = new ViewChild(HomeComponent);
  options: FormGroup;
  usuario: string;
  openMenu = false;

  constructor(public dialog: MatDialog, fb: FormBuilder) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(AddLancamentoComponent, {
      width: '550px',
      data: { usuario: this.usuario }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('fechou');
      this.usuario = result;
    })
  }
}
