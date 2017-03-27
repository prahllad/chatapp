import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {User} from '../model/user/user.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: any;
signupForm: FormGroup;
  constructor(fb: FormBuilder, private userService: UserService , private router: Router) {
    this.user = new User();
    this.signupForm = fb.group({
      'name': null,
      'email': null,
      'password': null


      });
   }

  ngOnInit() {
  }
 onSubmit(value: any) {
    this.user.name = value.name;
    this.user.email = value.email;
    this.user.password = value.password;
    console.log(this.user);
    this.userService.register(this.user).
    subscribe((data) => {
      this.router.navigateByUrl('');
      console.log(data); });
  }

}

