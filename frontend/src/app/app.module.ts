
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { NavComponent } from './main-home/nav/nav.component';
import { EmployerRoutingModule } from './employer/employer-routing.module';
import { EmployerModule } from './employer/employer.module';
import { FirstContentComponent } from './main-home/first-content/first-content.component';
import { ReadMoreComponent } from './main-home/read-more/read-more.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FirstContentComponent,
    ReadMoreComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AdminRoutingModule,AdminModule,
    EmployerRoutingModule,EmployerModule,

  ],
  providers: [
  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
