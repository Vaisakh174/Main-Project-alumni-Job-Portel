import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstContentComponent } from '../main-home/first-content/first-content.component';
import { AlumniAuthGuard } from './alumni-auth.guard';
import { AlumniHomeComponent } from './alumni-home/alumni-home.component';


const routes: Routes = [
  {
    path: "", component: AlumniHomeComponent,canActivate: [AlumniAuthGuard],

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
