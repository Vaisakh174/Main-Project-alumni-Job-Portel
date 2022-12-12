import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacHomeComponent } from './fac-home/fac-home.component';
import { FacPostAjobComponent } from './fac-post-ajob/fac-post-ajob.component';
import { FacViewjobsComponent } from './fac-viewjobs/fac-viewjobs.component';

const routes: Routes = [

  {
    path: '', component:FacHomeComponent,

    children: [

      { path: 'facview', component: FacViewjobsComponent },
      { path: 'facpost', component: FacPostAjobComponent },
      

      { path: "", redirectTo: "facview", pathMatch: 'full' },


    ]
  }






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
