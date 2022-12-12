import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumLoginComponent } from './alum-login/alum-login.component';
import { AlumniHomeComponent } from './alumni-home/alumni-home.component';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';

const routes: Routes = [
  {
    path: "", component: AlumniHomeComponent,

    children: [
      { path: "", component: ViewjobsComponent },
      { path: "viewjob", component: ViewjobsComponent }
    
    
    
    
    
    
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
