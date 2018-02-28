import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: FormGroup;
  usuario: string;
  openMenu = false;
  isLogged = false;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.authService.eventAuthenticated.subscribe((hasAuthenticated: boolean) => {
      this.isLogged = hasAuthenticated;
    });

    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }

  openUserMenu() {
    this.openMenu = !this.openMenu;
  }
}
