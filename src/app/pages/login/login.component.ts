import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {LoginService} from '../../service/login.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  senha: string;
  msgErro: string;
  private redirect: string;

  constructor(private activatedRoute: ActivatedRoute, private login: LoginService, private router: Router) {
  }

  ngOnInit() {

    this.redirect = this.activatedRoute.snapshot.queryParams['navigate'];

  }

  onSubmit() {
    this.msgErro = undefined;

    this.login.login(this.email, this.senha)
      .subscribe(value => {
        console.log(value);
        if (value && this.redirect) {
          this.router.navigate([this.redirect]);
        }
      }, error2 => {
        this.msgErro = error2.error.error_description;
      });

  }
}
