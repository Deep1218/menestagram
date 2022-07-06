import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  send!: boolean;
  receive!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.receive = false;
    this.send = true;
  }
}
