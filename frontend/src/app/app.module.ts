
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { NavComponent } from './main-home/nav/nav.component';
import { FirstContentComponent } from './main-home/first-content/first-content.component';
import { ReadMoreComponent } from './main-home/read-more/read-more.component';
import { AlumSignupComponent } from './alumni/alum-signup/alum-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplyJobComponent } from './main-home/apply-job/apply-job.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FirstContentComponent, ReadMoreComponent, AlumSignupComponent, ApplyJobComponent,


  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, AppRoutingModule,   

    AdminRoutingModule, AdminModule,
    // EmployerRoutingModule, EmployerModule,
    // AlumniRoutingModule, AlumniModule,
    // FacultyRoutingModule, FacultyModule


  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
