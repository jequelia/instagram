import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstaService } from 'src/app/services/insta.service';
import { Router } from '@angular/router';
import { User } from 'models/user';
import { USER } from 'src/environments/endpoint';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  /* TODO : documentar os métodos
     TODO : HTML, classes e ids todos em inglês e nomes genéricos
  
  */

  registerForms :FormGroup;
  User : User = new User()

  constructor(private fb: FormBuilder, private request : InstaService, private route : Router) { }

  ngOnInit() {
    this.registerForms = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      nomeCompleto: ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      nomeUsuario:['',Validators.compose([Validators.required, Validators.minLength(4)])],
      senha:['', Validators.compose([Validators.required])],
    });
  }


  /* quero uma explicação do que está sendo feito aqui nesse método */
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


