import { element } from 'protractor';
import { HtmlParser } from '@angular/compiler';
import { UserService } from './../services/user.service';
import { Component, OnInit, Output} from '@angular/core';
import * as io from 'socket.io-client';
declare var $;
@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.css']
})
export class MessangerComponent implements OnInit {
  socket: any;
   obj: any;
   chatlog: any;
   reciver: string;
   private reciver_name: string;
    currentamail: string;
  constructor(private userService: UserService) {
   }
     ngOnInit() {
    this.currentamail = localStorage.getItem('useremail');
    this.socket = io('http://localhost:5000');
    this.socket.emit('setUsername', {email: localStorage.getItem('useremail')});
    this.socket.on('newmsg', function(data){
        console.log(data.message);
      const div = document.createElement('div');
      div.setAttribute('class' , 'well');
      console.log(data.sender);
      div.innerText = this.reciver_name+':'+data.message;
      document.getElementById('chatlog').appendChild(div);

    });
    this.userService.fetchuser().subscribe(data => {
      this.obj = data.data;
      console.log(data.data);
    });
  }
  send(msg: string) {
   const obj =  document.getElementById('txt');
     const div = document.createElement('div');
      div.setAttribute('class' , 'well');
      div.innerText = msg;
      document.getElementById('chatlog').appendChild(div);
      this.socket.emit('msg', {message: msg , sender: localStorage.getItem('useremail'), reciver: this.reciver});

  }
  getter(event: any, index: Number) {
      const el = $('#data' + index).text();
      /**$('#container' + index).css('background-color','#428bca');*/
      console.log(el);
      document.getElementById('chatlog').innerHTML = null;

      this.obj.forEach(element => {
        if (element.name === el) {
          this.reciver = element.email;
          this.reciver_name = element.name;
          console.log(this.reciver_name);
        }
      });
      this.fetchchatlog();

   }
   public fetchchatlog() {
     let obj = {'sender': localStorage.getItem('useremail'), 'reciver': this.reciver};
     this.userService.fetch_chat(obj).subscribe((data) => {
       this.chatlog = data.data;
       console.log(data);
       this.chatlog.forEach(element => {
     const div = document.createElement('div');
      div.setAttribute('class' , 'well');
      if ( element.sender === this.reciver) {
      div.innerText = this.reciver_name + ' :' + element.message;
      } else {
        div.innerText = element.message;
      }
      document.getElementById('chatlog').appendChild(div);
       });
      });
     }
   }

