import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './main-home/nav/nav.component';



// frontend/src/app/admin-module/admin-module-routing.module.ts
const routes: Routes = [{path:"",component:NavComponent,
children:[
{ path: 'employer', component: SignupComponent },

  {path:"admin",component:AdminLoginComponent},
{path:"adminsignup",component:AdminSignupComponent}

]
},
{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
