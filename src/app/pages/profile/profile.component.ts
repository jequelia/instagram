import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'models/post.model';
import { PostService } from 'src/app/services/post.service';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'models/user';
import { USER } from 'src/environments/endpoint';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  

  constructor(private route : Router, private service: PostService) { }


  post: Post = new Post();

  currentImage: string;


  images: Array<string> = [
    '../assets/epica.jpg',
    '../assets/epica2.jpg',
    '../assets/epica3.jpg',
    '../assets/epica4.jpg',
    '../assets/epica5.jpg',
    '../assets/epica6.jpg',

  ]

  storys: Array<string> = [

    "../../assets/foto1.jpg",
    "../../assets/foto2.jpg",
    "../../assets/foto3.jpg",
    "../../assets/perfil.png"
  ]

  ngOnInit() {

  }

  /**
   * metodo que leva o usuário a trocar seus dados de perfil.
   */
  click() {
    this.route.navigate(["/editProfile"])
  }

  /**
   * sair da pagina do perfil.
   */
  exit() {
      this.route.navigate(["/login"])
  }

  /**
   * Metodo que salva um post no sendPost.
   */
  savePost() {
    this.service.sendPost(this.post)

  }

  /**
   * metodo que recebe como paramêtro uma imagem do HTML e armazena em uma variável, para poder chama-la no model em uma
   * forma maior.
   * @param image 
   */
  viewPost(image: string) {

    this.currentImage = image
  }


}
