import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit, OnDestroy {
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
  userChats = [
    {
      userPic: 'assets/img/download2.jpg',
      userType: 'receive',
      time: new Date(),
      messages: [{ msg: 'Hii' }, { msg: 'How are you ?' }],
    },
    {
      userPic: 'assets/img/download2.jpg',
      userType: 'sender',
      time: new Date(),
      messages: [{ msg: 'Hii' }, { msg: 'Fine' }],
    },
    {
      userPic: 'assets/img/download2.jpg',
      userType: 'receive',
      time: new Date(),
      messages: [
        { msg: 'Great!!!' },
        { msg: 'Long time no connection. What are you doing now a days?' },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {
    if (!localStorage.getItem('clickedId')) {
      localStorage.setItem('clickedId', '1');
    }
  }

  onClicked(id: string) {
    localStorage.setItem('clickedId', JSON.stringify(id));
  }
  ngOnDestroy(): void {
    localStorage.removeItem('clickedId');
  }
}
