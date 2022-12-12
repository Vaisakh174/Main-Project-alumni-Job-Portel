import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacLoginComponent } from './fac-login/fac-login.component';
import { FacSignupComponent } from './fac-signup/fac-signup.component';
import { FacHomeComponent } from './fac-home/fac-home.component';
import { FacPostAjobComponent } from './fac-post-ajob/fac-post-ajob.component';
import { FacViewjobsComponent } from './fac-viewjobs/fac-viewjobs.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FacLoginComponent,
    FacSignupComponent,
    FacHomeComponent,
    FacPostAjobComponent,
    FacViewjobsComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    FacultyRoutingModule,RouterModule,HttpClientModule
  ]
})
export class FacultyModule { }
