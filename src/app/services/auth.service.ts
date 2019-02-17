import { Injectable } from '@angular/core';
import { InstaService } from './insta.service';
import { User } from 'models/user';
import { USER } from 'src/environments/endpoint';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* TODO : documentação nos métodos */

  constructor(private http : InstaService) { }

  login(user : User){
    return this.http.get(USER).pipe(map(
      (res : Array<User>)=>{
        let result = false
        for (let i = 0; i < res.length; i++) {
          if(res[i].email === user.email && res[i].senha === user.senha) { 
            localStorage.setItem("user", JSON.stringify(res[i].id))
            result = true
          }
        }
        return result
      }
    ))
  }
}
