import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


  /* TODO : Implementar lógica de editar
    TODO : Documentação de métodos
      TODO : HTML, classes e ids todos em inglês e nomes genéricos
  */


  constructor(private route : Router) { }

  name = new FormControl('');

  ngOnInit() {
  }

  
  click(){
    
    this.route.navigate(["/profile"])
  }

}
