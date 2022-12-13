import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumniRoutingModule } from './alumni-routing.module';
import { AlumLoginComponent } from './alum-login/alum-login.component';
import { AlumSignupComponent } from './alum-signup/alum-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumniHomeComponent } from './alumni-home/alumni-home.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AlumLoginComponent,

      AlumniHomeComponent,
 
  ],
  imports: [
    CommonModule,
    AlumniRoutingModule,FormsModule,RouterModule,ReactiveFormsModule
  ]
})
export class AlumniModule { }
