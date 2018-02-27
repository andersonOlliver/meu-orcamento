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
  msgErro: string;

  constructor(private login: LoginService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.msgErro = undefined;

    this.login.login(this.email, this.senha)
      .subscribe(value => {
        console.log(value);
      }, error2 => {
        this.msgErro = error2.error.error_description;
      });

  }
}
