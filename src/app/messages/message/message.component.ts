import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  send!: boolean;
  receive!: boolean;

  @Input() userPic!: string;
  @Input() userType!: string;
  @Input() msgTime!: Date;
  @Input() messages!: Array<any>;

  constructor() {}

  ngOnInit(): void {
    if (this.userType == 'receive') {
      this.receive = true;
    } else {
      this.receive = false;
    }
    this.send = !this.receive;
  }
}
