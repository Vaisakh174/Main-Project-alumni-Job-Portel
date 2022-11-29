
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './adminModule/admin.module';




@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,AdminModule,
    AppRoutingModule
  ],
  providers: [
  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
