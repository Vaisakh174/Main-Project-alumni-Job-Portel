
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




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FirstContentComponent,ReadMoreComponent,AlumSignupComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,AdminModule,EmployerRoutingModule,EmployerModule,
    AlumniRoutingModule,AlumniModule,
   FormsModule,ReactiveFormsModule

  ],
  providers: [
  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
