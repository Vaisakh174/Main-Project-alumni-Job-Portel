import { Injectable, Injector } from '@angular/core';
import { SignupapiService } from './signupapi.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// export class TokenInterceptorService {

export class TokenInterceptorService implements HttpInterceptor {
  constructor(private inj: Injector) { }
  intercept(req: any, next: any) {
    let auth = this.inj.get(SignupapiService)
    let tokenizedReq = req.clone({
      setHeaders: { Authorization: `Bearer ${auth.getEmployerToken()} ` }

    })
    return next.handle(tokenizedReq);
  }
}
