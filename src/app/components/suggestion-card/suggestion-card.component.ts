import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-card',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.css'],
})
export class SuggestionCardComponent implements OnInit {
  @Input() userPic!: string;
  @Input() username!: string;
  @Input() btnText!: string;
  @Input() following!: any;
  constructor() {}

  ngOnInit(): void {}
}
