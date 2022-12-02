import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { NavComponent } from './main-home/nav/nav.component';


// frontend/src/app/admin-module/admin-module-routing.module.ts
const routes: Routes = [{path:"",component:NavComponent,
children:[{path:"admin",component:AdminLoginComponent},
{path:"adminsignup",component:AdminSignupComponent}

]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
