import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproveJobComponent } from './approve-job/approve-job.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ManageAlumniComponent } from './manage-alumni/manage-alumni.component';
import { ManageFacultyComponent } from './manage-faculty/manage-faculty.component';
import { ManageEmployerComponent } from './manage-employer/manage-employer.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { PostAjobComponent } from './post-ajob/post-ajob.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ApiService } from './services/api.service';
import { AddAlumniComponent } from './add-alumni/add-alumni.component';
import { CRUDalumniComponent } from './crudalumni/crudalumni.component';
import { ApproveAlumniReqComponent } from './approve-alumni-req/approve-alumni-req.component';



@NgModule({
  declarations: [ LoginComponent,
    HomeComponent,
    ManageAlumniComponent,
    ManageFacultyComponent,
    ManageEmployerComponent,
    ManageEmployeeComponent,
    PostAjobComponent,
    ApproveJobComponent,
    AddAlumniComponent,
    CRUDalumniComponent,
    ApproveAlumniReqComponent
    ],
  imports: [
    CommonModule,AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
   providers: [ApiService,AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService ,
      multi:true
    }
  
    ],
})
export class AdminModule { }
