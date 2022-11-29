
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';




@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,AdminRoutingModule,AdminModule,
    AppRoutingModule
  ],
  providers: [
  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
