import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedPostsComponent } from './approved-posts/approved-posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { EmpAuthGuard } from './emp-auth.guard';
import { EmployerhomeComponent } from './employerhome/employerhome.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ViewjobComponent } from './viewjob/viewjob.component';

const routes: Routes = [


  {
    path: '', component: EmployerhomeComponent, canActivate: [EmpAuthGuard],

    children: [

      { path: 'dashboard', component: DashboardComponent },
      { path: 'postjob', component: PostjobComponent },
      { path: 'viewjob', component: ViewjobComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'approvedposts', component: ApprovedPostsComponent },

      { path: "", redirectTo: "dashboard", pathMatch: 'full' },


    ]
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
