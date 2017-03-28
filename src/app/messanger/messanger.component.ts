import { HtmlParser } from '@angular/compiler';
import { UserService } from './../services/user.service';
import { Component, OnInit, Output} from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.css']
})
export class MessangerComponent implements OnInit {
   obj: any;
  socket: any;

  constructor(private userService: UserService) {
   }

  ngOnInit() {

    this.socket = io('http://localhost:5000');
    this.socket.emit('setUsername', localStorage.getItem('useremail'));
    this.socket.on('newmsg', function(data){
      console.log(data.message);
      const div = document.createElement('div');
      div.setAttribute('class' , 'well');
      div.innerText = data.message;
      document.getElementById('chatlog').appendChild(div);
    });
    this.userService.fetchuser().subscribe(data => {
      this.obj = data.data;
      console.log(data.data);
    });
  }
  send(msg: string) {
   const obj =  document.getElementById('txt');
      this.socket.emit('msg', {message: msg , sender: localStorage.getItem('useremail')});

  }

}
