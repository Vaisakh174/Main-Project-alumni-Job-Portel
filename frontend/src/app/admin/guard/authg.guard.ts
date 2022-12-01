import { Injectable } from '@angular/core';
import {  CanActivate,  Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthgGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.loggedin()) {
      return true;
      
    }
    else {
      this.router.navigate(['admin'])
      return false;
    }
  }
}

