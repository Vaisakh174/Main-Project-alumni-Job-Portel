import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumniComponent } from './add-alumni/add-alumni.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ApproveAlumniReqComponent } from './approve-alumni-req/approve-alumni-req.component';
import { CrudEmployerComponent } from './crud-employer/crud-employer.component';
import { CRUDFacultyComponent } from './crud-faculty/crud-faculty.component';
import { CRUDalumniComponent } from './crudalumni/crudalumni.component';
import { EditpostformComponent } from './editpostform/editpostform.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './main-navigation/home/home.component';
import { ManagePostComponent } from './main-navigation/manage-post/manage-post.component';
import { ReaedmorepostComponent } from './reaedmorepost/reaedmorepost.component';
import { ViewallpostsComponent } from './viewallposts/viewallposts.component';
import { ManageAlumniComponent } from './main-navigation/manage-alumni/manage-alumni.component';
import { ManageEmployerComponent } from './main-navigation/manage-employer/manage-employer.component';
import { ManageFacultyComponent } from './main-navigation/manage-faculty/manage-faculty.component';
import { ApproveJobComponent } from './approve-job/approve-job.component';
import { ApprovalFormComponent } from './approval-form/approval-form.component';
import { AuthgGuard } from './guard/authg.guard';
import { VerifySignupComponent } from './verify-signup/verify-signup.component';


const routes: Routes = [

{
  path: "adminhome", component: HomeComponent,
  children: [{ path: '', redirectTo: 'managepost', pathMatch: "full" },



  

  {
    path: 'alumni', component: ManageAlumniComponent,canActivate:[AuthgGuard],
    children: [{ path: '', component: AddAlumniComponent },
    { path: 'add', component: AddAlumniComponent },
    { path: 'CRUD', component: CRUDalumniComponent },
    { path: 'approve', component: ApproveAlumniReqComponent }]
  },


  {
    path: 'employer', component: ManageEmployerComponent,canActivate:[AuthgGuard],

    children: [{ path: '', component: AddEmployerComponent },
    { path: 'add', component: AddEmployerComponent },
    { path: 'CRUD', component: CrudEmployerComponent }
      // { path: 'approve', component: ApproveAlumniReqComponent }
    ]


  },
  {
    path: 'faculty', component: ManageFacultyComponent,canActivate:[AuthgGuard],

    children: [{ path: '', component: AddFacultyComponent },
    { path: 'add', component: AddFacultyComponent },
    { path: 'CRUD', component: CRUDFacultyComponent }
      // { path: 'approve', component: ApproveAlumniReqComponent }
    ]


  },
  {
    path: 'managepost', component: ManagePostComponent,canActivate:[AuthgGuard],

    children: [{ path: '', component: AddpostComponent },
    { path: 'add', component: AddpostComponent },
    { path: 'view', component: ViewallpostsComponent },
    { path: 'readmore', component: ReaedmorepostComponent },
    { path: 'editpost', component: EditpostformComponent },
    { path: 'approvejob', component: ApproveJobComponent },
    { path: 'editApproval', component: ApprovalFormComponent }]

  },

  { path: 'verifysignup', component: VerifySignupComponent,canActivate:[AuthgGuard] }

  ]
},

{ path: '**', component: ErrorComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
