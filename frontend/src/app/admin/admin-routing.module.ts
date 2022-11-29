import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumniComponent } from './add-alumni/add-alumni.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ApproveAlumniReqComponent } from './approve-alumni-req/approve-alumni-req.component';
import { ApproveJobComponent } from './approve-job/approve-job.component';
import { CrudEmployeeComponent } from './crud-employee/crud-employee.component';
import { CrudEmployerComponent } from './crud-employer/crud-employer.component';
import { CRUDFacultyComponent } from './crud-faculty/crud-faculty.component';
import { CRUDalumniComponent } from './crudalumni/crudalumni.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageAlumniComponent } from './manage-alumni/manage-alumni.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageEmployerComponent } from './manage-employer/manage-employer.component';
import { ManageFacultyComponent } from './manage-faculty/manage-faculty.component';
import { PostAjobComponent } from './post-ajob/post-ajob.component';
import { ViewallpostsComponent } from './viewallposts/viewallposts.component';

const routes: Routes = [{ path: '', component: LoginComponent },

{
  path: "adminhome", component: HomeComponent,
  children: [{ path: '', redirectTo: 'alumni', pathMatch: "full" },

  {
    path: 'alumni', component: ManageAlumniComponent,
    children: [{ path: '', component: AddAlumniComponent },
    { path: 'add', component: AddAlumniComponent },
    { path: 'CRUD', component: CRUDalumniComponent },
    { path: 'approve', component: ApproveAlumniReqComponent }]
  },


  { path: 'employee', component: ManageEmployeeComponent,
  
  children: [{ path: '', component: AddEmployeeComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'CRUD', component: CrudEmployeeComponent }
  // { path: 'approve', component: ApproveAlumniReqComponent }
]

},
  { path: 'employer', component: ManageEmployerComponent,
  
  children: [{ path: '', component: AddEmployerComponent },
  { path: 'add', component: AddEmployerComponent },
  { path: 'CRUD', component: CrudEmployerComponent }
  // { path: 'approve', component: ApproveAlumniReqComponent }
]


},
  { path: 'faculty', component: ManageFacultyComponent ,
  
  children: [{ path: '', component: AddFacultyComponent },
  { path: 'add', component: AddFacultyComponent },
  { path: 'CRUD', component: CRUDFacultyComponent }
  // { path: 'approve', component: ApproveAlumniReqComponent }
]


},
  { path: 'postjob', component: PostAjobComponent ,
  children: [{ path: '', component: AddpostComponent },
  { path: 'add', component: AddpostComponent },
  { path: 'view', component: ViewallpostsComponent }],




},
  { path: 'approvejob', component: ApproveJobComponent }]
},

{ path: '**', component: ErrorComponent }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
