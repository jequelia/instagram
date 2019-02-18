import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: AuthService, private route: Router) { }

  canActivate(route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot) : Observable<boolean> | boolean {

      if(this.service.isLogged()){
        return true
      }

      this.route.navigate(['/login'])
      return false
    }
    

}

