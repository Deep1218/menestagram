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
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  ];
  constructor() {}

  ngOnInit(): void {}
}
