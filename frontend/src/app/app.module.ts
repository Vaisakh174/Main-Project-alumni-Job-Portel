import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './adminModule/services/api.service';
import { AuthService } from './adminModule/services/auth.service';
import { TokenInterceptorService } from './adminModule/services/token-interceptor.service';
import { AdminModule } from './adminModule/admin.module';




@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,AdminModule,
    AppRoutingModule
  ],
  providers: [ApiService,AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService ,
      multi:true
    }
  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
