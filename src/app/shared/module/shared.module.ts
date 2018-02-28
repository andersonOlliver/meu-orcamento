import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CalendarModule, ColorPickerModule, DropdownModule, InputMaskModule} from 'primeng/primeng';
import {NgSelectModule} from '@ng-select/ng-select';
import {MaskDirective} from '../directive/mask.directive';

@NgModule({
  imports: [
    CalendarModule,
    ColorPickerModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
    MatDividerModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDialogModule,
    MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatInputModule, MatButtonModule,
    MatCardModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule,
    NgSelectModule,

  ],
  declarations: [
    MaskDirective
  ],
  exports: [
    CalendarModule,
    ColorPickerModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
    MaskDirective,
    MatDividerModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDialogModule,
    MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatInputModule, MatButtonModule,
    MatCardModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule,
    NgSelectModule
  ]
})
export class SharedModule {
}
