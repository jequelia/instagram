import { Injectable } from '@angular/core';
import { Post } from 'models/post.model';
import { InstaService } from './insta.service';
import { POST } from 'src/environments/endpoint';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Array<Post> = new Array<Post>();    //list of images 

  constructor(private http: InstaService) { }

  /**
   * Método que chama o service http e passa pra ele uma postagem, assim ele envia para o back 
   * @param post objeto postagem recebido para envio
   */
  sendPost(post: Post) {
    this.http.post(POST, post).subscribe(
      res=>{
        console.log(res)
      }
    )
  }

  /**
   * Método que chama o service http(InstaService) para receber uma postagem, amarzenando-a em uma váriavel res.
   */
  getPost() {
    this.http.get(POST).subscribe(
      res => {
        this.posts = res;
      })
  }
}
