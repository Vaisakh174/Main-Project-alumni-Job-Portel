import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './adminComponents/home/home.component';
import { LoginComponent } from './adminComponents/login/login.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
