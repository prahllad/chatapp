import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.css']
})
export class MessangerComponent implements OnInit {
   obj: any;
    Socket= io('localhost:3000');
  constructor(private userService: UserService) {
   }

  ngOnInit() {
    this.userService.fetchuser().subscribe(data => {
      this.obj = data.data;
      console.log(data.data);
    });
  }

}
