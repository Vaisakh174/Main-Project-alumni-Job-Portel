import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './employer/signup/signup.component';
import { NavComponent } from './main-home/nav/nav.component';



// frontend/src/app/admin-module/admin-module-routing.module.ts
const routes: Routes = [{path:"",component:NavComponent,
children:[{path:"admin",component:LoginComponent},
{ path: 'employer', component: SignupComponent },

]
},
{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
