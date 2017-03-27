import { JwtService } from './services/jwt.service';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {MessangerComponent} from './messanger/messanger.component';
import { RegisterComponent } from './register/register.component';

 const ROUTER: Routes = [
   {
     path: '', component: LoginComponent
   },
   {
     path: 'messanger' , component : MessangerComponent
   },
   {
     path: 'register' , component : RegisterComponent
   }
 ] ;
@NgModule({
  declarations: [
    AppComponent, LoginComponent, MessangerComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [ApiService, UserService, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
