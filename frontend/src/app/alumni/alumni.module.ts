import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumniRoutingModule } from './alumni-routing.module';
import { AlumLoginComponent } from './alum-login/alum-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumniHomeComponent } from './alumni-home/alumni-home.component';

import { RouterModule } from '@angular/router';
import { AlumniapiService } from './alumniapi.service';
import { AlumTokenInterceptorService } from './alum-token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AlumLoginComponent,

      AlumniHomeComponent,
 
  ],
  imports: [
    CommonModule,
    AlumniRoutingModule,FormsModule,RouterModule,ReactiveFormsModule,HttpClientModule
  ],  
  providers: [AlumniapiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AlumTokenInterceptorService ,
      multi:true
    }]
})

export class AlumniModule { }
