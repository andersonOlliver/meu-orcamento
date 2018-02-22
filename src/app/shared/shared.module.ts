import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatDividerModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDialogModule,
    MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatInputModule, MatButtonModule,
    MatCardModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule
  ],
  exports: [MatDividerModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatDialogModule,
    MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatInputModule, MatButtonModule,
    MatCardModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule]
})
export class SharedModule {
}
