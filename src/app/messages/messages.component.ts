import { Component, OnInit } from '@angular/core';
import {
  faPhone,
  faVideo,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  faPhone = faPhone;
  faVideo = faVideo;
  faCircleInfo = faCircleInfo;

  constructor() {}

  ngOnInit(): void {}
}
