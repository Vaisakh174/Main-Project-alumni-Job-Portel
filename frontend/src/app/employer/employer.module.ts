import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerRoutingModule } from './employer-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployerhomeComponent } from './employerhome/employerhome.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ViewjobComponent } from './viewjob/viewjob.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    EmployerhomeComponent,
    PostjobComponent,
    ViewjobComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class EmployerModule { }
