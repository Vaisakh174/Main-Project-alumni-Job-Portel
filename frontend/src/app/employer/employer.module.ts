import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerRoutingModule } from './employer-routing.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployerhomeComponent } from './employerhome/employerhome.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ViewjobComponent } from './viewjob/viewjob.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { ApprovedPostsComponent } from './approved-posts/approved-posts.component';
import { SignupapiService } from './signupapi.service';
import { TokenInterceptorService } from './token-interceptor.service';




@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    EmployerhomeComponent,
    PostjobComponent,
    ViewjobComponent,
    EditComponent,
    ApprovedPostsComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,RouterModule
  ],
  providers: [SignupapiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService ,
      multi:true
    }]
})
export class EmployerModule { }
