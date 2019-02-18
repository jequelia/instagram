import { Injectable } from '@angular/core';
import { User } from 'models/user';
import { USER } from 'src/environments/endpoint';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : RequestService) { }


  /**
   * Metodo que confere se os dados que o usuário inseriu estão registrados para efetuar o login.
   * @param user 
   */
  login(user : User){
    return this.http.get(USER).pipe(map(
      (res : Array<User>)=>{
        let result = false
        for (let i = 0; i < res.length; i++) {
          if(res[i].email === user.email && res[i].password === user.password) { 
            localStorage.setItem("user", JSON.stringify(res[i].id))
            result = true
          }
        }
        return result
      }
    ))
  }

  /**
   * Método para verificar se o usuário está logado ou não
   */
  isLogged() : boolean{
    return this.getUserId() == null ? false : true;
    
  }

  getUserId(){
    return localStorage.getItem("user")
  }

  

}
