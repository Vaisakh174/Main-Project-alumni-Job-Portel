import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupapiService } from './signupapi.service';

@Injectable({
  providedIn: 'root'
})
export class EmpAuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private api: SignupapiService, private router: Router) { }

  canActivate(): boolean {
    if (this.api.isEmployerLoggedin()) {
      return true;

    }
    else {
      this.router.navigate(['/'])
      return false;
    }
  }
}
  

