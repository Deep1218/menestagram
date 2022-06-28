import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css'],
})
export class PublicFeedComponent implements OnInit {
  slideConfig = {
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  data = [
    {
      follow: 0,
      userPic: 'assets/img/download2.jpg',
      username: 'the_unknow',
      following: [{ username: 'the_deeppatel' }, { username: 'patel_deep' }],
    },
    {
      follow: 0,
      userPic: 'assets/img/download2.jpg',
      username: 'the_unknow',
      following: [{ username: 'the_deeppatel' }, { username: 'patel_deep' }],
    },
    {
      follow: 0,
      userPic: 'assets/img/download2.jpg',
      username: 'the_unknow',
      following: [{ username: 'the_deeppatel' }, { username: 'patel_deep' }],
    },
    {
      follow: 0,
      userPic: 'assets/img/download2.jpg',
      username: 'the_unknow',
      following: [{ username: 'the_deeppatel' }, { username: 'patel_deep' }],
    },
    {
      follow: 0,
      userPic: 'assets/img/download2.jpg',
      username: 'the_unknow',
      following: [{ username: 'the_deeppatel' }, { username: 'patel_deep' }],
    },
    {
      follow: 0,
      userPic: 'assets/img/download2.jpg',
      username: 'the_unknow',
      following: [{ username: 'the_deeppatel' }, { username: 'patel_deep' }],
    },
    {
      follow: 0,
      userPic: 'assets/img/download2.jpg',
      username: 'the_unknow',
      following: [{ username: 'the_deeppatel' }, { username: 'patel_deep' }],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
