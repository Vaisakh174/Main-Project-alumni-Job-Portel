import { Injectable,Injector } from '@angular/core';
import { AlumniapiService } from './alumniapi.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// export class AlumTokenInterceptorService {

//   constructor() { }
// }
export class AlumTokenInterceptorService implements HttpInterceptor {
  constructor(private inj: Injector) { }
  intercept(req: any, next: any) {
    let auth = this.inj.get(AlumniapiService)
    let tokenizedReq = req.clone({
      setHeaders: { Authorization: `Bearer ${auth.getAlumniToken()} ` }

    })
    return next.handle(tokenizedReq);
  }
}