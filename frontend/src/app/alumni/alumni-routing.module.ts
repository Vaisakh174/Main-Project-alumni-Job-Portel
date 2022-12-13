import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstContentComponent } from '../main-home/first-content/first-content.component';
import { AlumLoginComponent } from './alum-login/alum-login.component';
import { AlumniHomeComponent } from './alumni-home/alumni-home.component';


const routes: Routes = [
  {
    path: "", component: AlumniHomeComponent,

    children: [
      { path: "", component: FirstContentComponent },
      { path: "viewjob", component: FirstContentComponent }
    
    
    
    
    
    
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
