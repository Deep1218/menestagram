import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  chatUser = [
    {
      pic: 'assets/img/download2.jpg',
      username: 'the_unknow',
      message: 'How are you?',
      newMsg: 4,
      lastTime: new Date(),
    },
    {
      pic: 'assets/img/download2.jpg',
      username: 'the_unknow',
      message: 'How are you?',
      newMsg: 3,
      lastTime: new Date(),
    },
    {
      pic: 'assets/img/download2.jpg',
      username: 'the_unknow',
      message: 'How are you?',
      newMsg: 2,
      lastTime: new Date(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
