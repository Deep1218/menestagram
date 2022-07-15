import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  postData = [
    {
      photoUrl: 'assets/img/menestagram-logo.png',
      userId: {
        imgUrl: 'assets/img/download2.jpg',
        username: 'the_unkown',
      },
      updateAt: new Date(Date.now()),
      likes: Math.ceil(Math.random() * 1000000),
      comments: Math.ceil(Math.random() * 1000),
    },
    {
      photoUrl: 'assets/img/menestagram-logo.png',
      userId: {
        imgUrl: 'assets/img/download2.jpg',
        username: 'the_unkown',
      },
      updateAt: new Date(Date.now()),
      likes: Math.ceil(Math.random() * 1000000),
      comments: Math.ceil(Math.random() * 1000),
    },
    {
      photoUrl: 'assets/img/menestagram-logo.png',
      userId: {
        imgUrl: 'assets/img/download2.jpg',
        username: 'the_unkown',
      },
      updateAt: new Date(Date.now()),
      likes: Math.ceil(Math.random() * 1000000),
      comments: Math.ceil(Math.random() * 1000),
    },
    {
      photoUrl: 'assets/img/menestagram-logo.png',
      userId: {
        imgUrl: 'assets/img/download2.jpg',
        username: 'the_unkown',
      },
      updateAt: new Date(Date.now()),
      likes: Math.ceil(Math.random() * 1000000),
      comments: Math.ceil(Math.random() * 1000),
    },
    {
      photoUrl: 'assets/img/menestagram-logo.png',
      userId: {
        imgUrl: 'assets/img/download2.jpg',
        username: 'the_unkown',
      },
      updateAt: new Date(Date.now()),
      likes: Math.ceil(Math.random() * 1000000),
      comments: Math.ceil(Math.random() * 1000),
    },
    {
      photoUrl: 'assets/img/menestagram-logo.png',
      userId: {
        imgUrl: 'assets/img/download2.jpg',
        username: 'the_unkown',
      },
      updateAt: new Date(Date.now()),
      likes: Math.ceil(Math.random() * 1000000),
      comments: Math.ceil(Math.random() * 1000),
    },
  ];
  userData = {
    imgUrl: 'assets/img/download2.jpg',
    username: 'the_unkown',
  };
  constructor() {}

  ngOnInit(): void {}
}
