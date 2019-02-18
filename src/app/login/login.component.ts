import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  code: any;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.code = {code:params['code']};
    });
    if (this.code) {
      this.findOrCreateUser(this.code);

    }
  }
  login(email: string, password: string) {
    this.user.email = email;
    this.user.password = password;
    this.userService.login(this.user).subscribe((data) => {
      console.log(data.data.email);
      localStorage.setItem('useremail', data.data.email);
      this.router.navigateByUrl('/messanger');
    });
  }
  googlelogin() {
    this.userService.authlogin().subscribe((data) => {
      window.open(data.uri, '_self');
    })
  }
  findOrCreateUser(code){
    this.userService.authorization(code).subscribe((data)=>{
      console.log(data);
    })

  }

}
