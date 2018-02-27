import {Component, OnInit, Input} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  @Input() isOpen = false;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
