import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/user/user.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user: any;
  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
   }

     ngOnInit() {
     }
    login(email: string , password: string) {
      this.user.email = email;
      this.user.password = password;
       this.userService.login(this.user).subscribe((data) => {
         console.log(data.data.email);
         localStorage.setItem('useremail', data.data.email);
         this.router.navigateByUrl('/messanger');
       });
   }
}
