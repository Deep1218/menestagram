import { Component, OnInit } from '@angular/core';
import {
  faPhone,
  faVideo,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css'],
})
export class ChatUserComponent implements OnInit {
  faPhone = faPhone;
  faVideo = faVideo;
  faCircleInfo = faCircleInfo;
  constructor() {}

  ngOnInit(): void {}
}
