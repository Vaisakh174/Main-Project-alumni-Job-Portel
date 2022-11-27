import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './adminComponents/login/login.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HomeComponent } from './adminComponents/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
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
