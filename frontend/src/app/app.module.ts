
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { NavComponent } from './main-home/nav/nav.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AdminRoutingModule,AdminModule,
  ],
  providers: [
  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
