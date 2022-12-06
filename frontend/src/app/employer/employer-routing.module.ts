import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployerhomeComponent } from './employerhome/employerhome.component';
import { LoginComponent } from './login/login.component';
import { PostjobComponent } from './postjob/postjob.component';
import { SignupComponent } from './signup/signup.component';
import { ViewjobComponent } from './viewjob/viewjob.component';

const routes: Routes = [
//   {path: 'employerhome', component: EmployerhomeComponent},
//   {path: 'employerhome', component: EmployerhomeComponent,children: [{ path: 'postjob', component:PostjobComponent },{ path: 'viewjob', component: ViewjobComponent },
// ]
// }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
