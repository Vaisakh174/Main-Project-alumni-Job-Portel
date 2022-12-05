import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumniRoutingModule } from './alumni-routing.module';
import { AlumLoginComponent } from './alum-login/alum-login.component';
import { AlumSignupComponent } from './alum-signup/alum-signup.component';
import { FormsModule } from '@angular/forms';
import { AlumniRegisterComponent } from './alumni-register/alumni-register.component';

@NgModule({
  declarations: [
    AlumLoginComponent,

    AlumniRegisterComponent
  ],
  imports: [
    CommonModule,
    AlumniRoutingModule,FormsModule
  ]
})
export class AlumniModule { }
