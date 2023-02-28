import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { LoginComponent } from './employer/login/login.component';
import { AlumSignupComponent } from './alumni/alum-signup/alum-signup.component';
import { SignupComponent } from './employer/signup/signup.component';
import { FirstContentComponent } from './main-home/first-content/first-content.component';
import { NavComponent } from './main-home/nav/nav.component';
import { ReadMoreComponent } from './main-home/read-more/read-more.component';
import { AlumLoginComponent } from './alumni/alum-login/alum-login.component';
import { ApplyJobComponent } from './main-home/apply-job/apply-job.component';
import { FacLoginComponent } from './faculty/fac-login/fac-login.component';
import { FacSignupComponent } from './faculty/fac-signup/fac-signup.component';




const routes: Routes = [
  {
    path: "", component: NavComponent,

    children: [
      { path: "", component: FirstContentComponent },
      { path: "readmore", component: ReadMoreComponent },
      { path: "apply", component: ApplyJobComponent },



      { path: "admin", component: AdminLoginComponent },
      { path: "adminsignup", component: AdminSignupComponent },

      { path: 'employer', component: SignupComponent },
      { path: 'login', component: LoginComponent },


      { path: 'alumni', component: AlumLoginComponent },
      { path: 'alumnilogin', component: AlumSignupComponent },


      { path: 'faculty', component: FacLoginComponent },
      { path: 'facsignup', component: FacSignupComponent }


    ]
  },


  {
    path: 'employerhome',
    loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule)
  }, 
  //  {
  //   path: 'adminhome',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // },
  {
    path: 'alumnihome',
    loadChildren: () => import('./alumni/alumni.module').then(m => m.AlumniModule)
  },
  {
    path: 'fachome',
    loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule)
  },




  { path: "home", redirectTo: "/", pathMatch: 'full' },





]






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
