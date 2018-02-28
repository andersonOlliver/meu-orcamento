import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CalendarModule, ColorPickerModule, DropdownModule} from 'primeng/primeng';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CalendarModule,
    ColorPickerModule,
    DropdownModule,
    FormsModule,
    MatDividerModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDialogModule,
    MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatInputModule, MatButtonModule,
    MatCardModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule,
    NgSelectModule
  ],
  exports: [
    CalendarModule,
    ColorPickerModule,
    DropdownModule,
    FormsModule,
    MatDividerModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDialogModule,
    MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatInputModule, MatButtonModule,
    MatCardModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule,
    NgSelectModule
  ]
})
export class SharedModule {
}
