import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { NavComponent } from './main-home/nav/nav.component';


// frontend/src/app/admin-module/admin-module-routing.module.ts
const routes: Routes = [{path:"",component:NavComponent,
children:[{path:"admin",component:LoginComponent}

]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
