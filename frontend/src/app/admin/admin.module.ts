import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './main-navigation/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ApiService } from './services/api.service';
import { AddAlumniComponent } from './add-alumni/add-alumni.component';
import { CRUDalumniComponent } from './crudalumni/crudalumni.component';
import { ApproveAlumniReqComponent } from './approve-alumni-req/approve-alumni-req.component';
import { ErrorComponent } from './error/error.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { CRUDFacultyComponent } from './crud-faculty/crud-faculty.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { CrudEmployerComponent } from './crud-employer/crud-employer.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ViewallpostsComponent } from './viewallposts/viewallposts.component';
import { ReaedmorepostComponent } from './reaedmorepost/reaedmorepost.component';
import { EditpostformComponent } from './editpostform/editpostform.component';
import { ManagePostComponent } from './main-navigation/manage-post/manage-post.component';
import { ManageAlumniComponent } from './main-navigation/manage-alumni/manage-alumni.component';
import { ManageFacultyComponent } from './main-navigation/manage-faculty/manage-faculty.component';
import { ManageEmployerComponent } from './main-navigation/manage-employer/manage-employer.component';
import { ApproveJobComponent } from './approve-job/approve-job.component';
import { ApprovalFormComponent } from './approval-form/approval-form.component';
import { VerifySignupComponent } from './verify-signup/verify-signup.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { ViewApprovedComponent } from './view-approved/view-approved.component';




@NgModule({
  declarations: [ 
    HomeComponent,
    ManageAlumniComponent,
    ManageFacultyComponent,
    ManageEmployerComponent,
    ApproveJobComponent,
    AddAlumniComponent,
    CRUDalumniComponent,
    ApproveAlumniReqComponent,
    ErrorComponent,
    AddFacultyComponent,
    CRUDFacultyComponent,
    AddEmployerComponent,
    CrudEmployerComponent,
    AddpostComponent,
    ViewallpostsComponent,
    ReaedmorepostComponent,
    EditpostformComponent,
    ManagePostComponent,
    ApprovalFormComponent,
    VerifySignupComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    ViewApprovedComponent,
    ],
  imports: [
    CommonModule,RouterModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
   providers: [
    ApiService,AuthService,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService ,
      multi:true
    }
  
    ],
})
export class AdminModule { }
