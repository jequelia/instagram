import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private route : Router) { }

  name = new FormControl('');

  ngOnInit() {
  }

  
  click(){
    
    this.route.navigate(["/profile"])
  }

}
