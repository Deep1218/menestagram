import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css'],
})
export class StoryCardComponent implements OnInit {
  users = [
    { username: 'the_unknown', pic: 'assets/img/download2.jpg', active: true },
    {
      username: 'the_unknown2',
      pic: 'assets/img/download2.jpg',
      active: false,
    },
    { username: 'the_unknown3', pic: 'assets/img/download2.jpg', active: true },
    {
      username: 'the_unknown4',
      pic: 'assets/img/download2.jpg',
      active: false,
    },
    { username: 'the_unknown5', pic: 'assets/img/download2.jpg', active: true },
    {
      username: 'the_unknown6',
      pic: 'assets/img/download2.jpg',
      active: false,
    },
    { username: 'the_unknown', pic: 'assets/img/download2.jpg', active: false },
    { username: 'the_unknown', pic: 'assets/img/download2.jpg', active: true },
    { username: 'the_unknown', pic: 'assets/img/download2.jpg', active: false },
    { username: 'the_unknown', pic: 'assets/img/download2.jpg', active: true },
    { username: 'the_unknown', pic: 'assets/img/download2.jpg', active: false },
    { username: 'the_unknown', pic: 'assets/img/download2.jpg', active: true },
    { username: 'the_unknown', pic: 'assets/img/download2.jpg', active: false },
  ];
  slideConfig = {
    // arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 5,
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
  constructor() {}

  ngOnInit(): void {}
}
