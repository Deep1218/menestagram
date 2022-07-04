import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css'],
})
export class ChatCardComponent implements OnInit {
  @Input() name!: string;
  @Input() img!: string;
  @Input() message!: string;
  @Input() time!: any;
  @Input() totalMsg!: number;

  constructor() {}

  ngOnInit(): void {}
}
