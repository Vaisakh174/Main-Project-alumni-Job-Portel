
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { NavComponent } from './main-home/nav/nav.component';
import { EmployerRoutingModule } from './employer/employer-routing.module';
import { EmployerModule } from './employer/employer.module';
import { FirstContentComponent } from './main-home/first-content/first-content.component';
import { ReadMoreComponent } from './main-home/read-more/read-more.component';
import { AlumSignupComponent } from './alumni/alum-signup/alum-signup.component';
import { AlumniModule } from './alumni/alumni.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumniRoutingModule } from './alumni/alumni-routing.module';
import { ApiService } from './admin/services/api.service';
import { AuthService } from './admin/services/auth.service';
import { TokenInterceptorService } from './admin/services/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FirstContentComponent,ReadMoreComponent,AlumSignupComponent
   
   
  ],
  imports: [
    BrowserModule,HttpClientModule, AppRoutingModule,
   
    AdminRoutingModule,AdminModule,EmployerRoutingModule,EmployerModule,
    AlumniRoutingModule,AlumniModule,
   FormsModule,ReactiveFormsModule

  ],
  providers: [
    ApiService,AuthService,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService ,
      multi:true
    }
  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
