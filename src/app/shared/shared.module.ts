import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    MatDividerModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDialogModule,
    MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatInputModule, MatButtonModule,
    MatCardModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule
  ],
  exports: [
    FormsModule,
    MatDividerModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDialogModule,
    MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatInputModule, MatButtonModule,
    MatCardModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule]
})
export class SharedModule {
}
