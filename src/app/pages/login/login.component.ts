import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  /* TODO : Documentar os métodos
      TODO : HTML, classes e ids todos em inglês e nomes genéricos
  */

  loginForm: FormGroup
  viewAlert: boolean = false

  constructor(private form: FormBuilder, private auth: AuthService, private route: Router) { }

  ngOnInit() {

    this.loginForm = this.form.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required])]
    })
  }

  submit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.getRawValue()).toPromise().then(
        (res) => {
          if (res) {
            this.route.navigate(['/profile'])
          }
          else {
            alert('Usuário ou Senha Inválidos!')
          }
        }
      )
    } else {
      alert('Preencha os campos corretamente!')
    }
  }

}
