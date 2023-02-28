import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlumniapiService } from './alumniapi.service';

@Injectable({
  providedIn: 'root'
})
export class AlumniAuthGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
  
// }


constructor(private api: AlumniapiService, private router: Router) { }

canActivate(): boolean {
  if (this.api.isAlumniLoggedin()) {
    return true;

  }
  else {
    this.router.navigate(['/'])
    return false;
  }
}
}