import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {MessangerComponent} from './messanger/messanger.component';
 const ROUTER: Routes = [
   {
     path: '', component: LoginComponent
   },
   {
     path: 'messanger' , component : MessangerComponent
   }
 ] ;
@NgModule({
  declarations: [
    AppComponent, LoginComponent, MessangerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
