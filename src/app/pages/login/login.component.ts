import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  senha: string;

  constructor(private login: LoginService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.email, this.senha);
    this.login.login(this.email, this.senha)

  }
}
