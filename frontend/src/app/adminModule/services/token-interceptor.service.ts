import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
// export class TokenInterceptorService {
  export class TokenInterceptorService implements HttpInterceptor{
  constructor(private inj:Injector) { }
  intercept(req:any , next:any) {
    let auth=this.inj.get(AuthService)
    let tokenizedReq=req.clone({
      setHeaders:{Authorization:`Bearer ${auth.getToken()} ` }

    })
    return next.handle(tokenizedReq);
  }
}
