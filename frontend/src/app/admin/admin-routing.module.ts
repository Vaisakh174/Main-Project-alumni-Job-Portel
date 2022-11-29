import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumniComponent } from './add-alumni/add-alumni.component';
import { ApproveAlumniReqComponent } from './approve-alumni-req/approve-alumni-req.component';
import { ApproveJobComponent } from './approve-job/approve-job.component';
import { CRUDalumniComponent } from './crudalumni/crudalumni.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageAlumniComponent } from './manage-alumni/manage-alumni.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageEmployerComponent } from './manage-employer/manage-employer.component';
import { ManageFacultyComponent } from './manage-faculty/manage-faculty.component';
import { PostAjobComponent } from './post-ajob/post-ajob.component';

const routes: Routes = [{ path: '', component: LoginComponent },

{
  path: "adminhome", component: HomeComponent,
  children: [{ path: '', component: ManageAlumniComponent },

  { path: 'alumni', component: ManageAlumniComponent, 
  children:[{ path: '', component: AddAlumniComponent },
  { path: 'add', component: AddAlumniComponent },
  { path: 'CRUD', component: CRUDalumniComponent },
  { path: 'approve', component: ApproveAlumniReqComponent }] },


  { path: 'employee', component: ManageEmployeeComponent },
  { path: 'employer', component: ManageEmployerComponent },
  { path: 'faculty', component: ManageFacultyComponent },
  { path: 'postjob', component: PostAjobComponent },
  { path: 'approvejob', component: ApproveJobComponent }]
}



];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
