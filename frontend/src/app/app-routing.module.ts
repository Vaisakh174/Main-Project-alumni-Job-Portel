import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { EmployerhomeComponent } from './employer/employerhome/employerhome.component';
import { LoginComponent } from './employer/login/login.component';
import { AlumSignupComponent } from './alumni/alum-signup/alum-signup.component';
import { SignupComponent } from './employer/signup/signup.component';
import { FirstContentComponent } from './main-home/first-content/first-content.component';
import { NavComponent } from './main-home/nav/nav.component';
import { ReadMoreComponent } from './main-home/read-more/read-more.component';
import { AlumLoginComponent } from './alumni/alum-login/alum-login.component';
import { AlumniRegisterComponent } from './alumni/alumni-register/alumni-register.component';
import { PostjobComponent } from './employer/postjob/postjob.component';
import { ViewjobComponent } from './employer/viewjob/viewjob.component';
import { DashboardComponent } from './employer/dashboard/dashboard.component';
import { EditComponent } from './employer/edit/edit.component';
import { AuthgGuard } from './admin/guard/authg.guard';



// frontend/src/app/admin-module/admin-module-routing.module.ts
const routes: Routes = [
  {
    path: "", component: NavComponent,

    children: [
      { path: "", component: FirstContentComponent },
      { path: "readmore", component: ReadMoreComponent },



      { path: "admin", component: AdminLoginComponent },
      { path: "adminsignup", component: AdminSignupComponent },

      { path: 'employer', component: SignupComponent },
      { path: 'login', component: LoginComponent },


      { path: 'alumni', component: AlumSignupComponent },
      { path: 'register', component: AlumniRegisterComponent },
      { path: 'alumniRegister', component: AlumniRegisterComponent }

    ]
  },
  // {path:"employerhome",redirectTo:"",pathMatch:'full'},

  {
    path: 'employerhome',
    loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule)
  },






]






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
