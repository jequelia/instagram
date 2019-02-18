import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from 'models/user';
import { USER } from 'src/environments/endpoint';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  registerForms :FormGroup;

  User : User = new User()

  constructor(private fb: FormBuilder, private request : RequestService, private route : Router) { }

  ngOnInit() {

    this.registerForms = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      fullName: ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      userName:['',Validators.compose([Validators.required, Validators.minLength(4)])],
      password:['', Validators.compose([Validators.required])],
    });
  }


  /**
   * Metodo que verifica se o formulário foi preenchido corretamente, caso sim; leva o usuário a pagina de login
   * se não estiver preenchido da forma correta, um aviso será emitido na tela.
   */
  register(){

    let newUser = Object.assign({}, this.User, this.registerForms.getRawValue())
    if (this.registerForms.valid) {
      this.request.post(USER, newUser).toPromise().then(()=> {
          alert('Usuário Cadastrado!')
          setTimeout(() => {
            this.route.navigate(['/login'])
          }, 3000);
        })
        .catch(()=> alert('Erro ao cadastrar!')
      )
    }else{
      alert('Preencha os campos corretamente!')
    }
  }


  }


