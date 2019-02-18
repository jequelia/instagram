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

  loginForm: FormGroup
  viewAlert: boolean = false

  constructor(private form: FormBuilder, private auth: AuthService, private route: Router) { }

  ngOnInit() {

    this.loginForm = this.form.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  /**
   * Verifica se os dados que o usuário digitou estão cadastrados, para isso chamei o metódo login que está 
   * no service auth onde lá ele faz toda a lógica para saber se os dados são validos. Caso esteja, o usuário
   * é redirecionado a pagina do seu perfil. Caso não, um alerta será emitido.
   */
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
