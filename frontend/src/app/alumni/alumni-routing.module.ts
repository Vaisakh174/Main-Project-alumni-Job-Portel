import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumLoginComponent } from './alum-login/alum-login.component';
import { AlumniHomeComponent } from './alumni-home/alumni-home.component';
import { AlumniRegisterComponent } from './alumni-register/alumni-register.component';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';

const routes: Routes = [
  {
    path: "", component: AlumniHomeComponent,

    children: [
      { path: "", component: ViewjobsComponent }
    
    
    
    
    
    
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
