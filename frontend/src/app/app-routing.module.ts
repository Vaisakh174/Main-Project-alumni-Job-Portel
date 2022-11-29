import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './adminModule/home/home.component';
import { LoginComponent } from './adminModule/login/login.component';
import { ManageAlumniComponent } from './adminModule/manage-alumni/manage-alumni.component';

const routes: Routes = [{ path: '', component: LoginComponent },

{
  path: "home", component: HomeComponent,
  children: [{ path: '', component: ManageAlumniComponent }]
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
