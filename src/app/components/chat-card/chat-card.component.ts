import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css'],
})
export class ChatCardComponent implements OnInit, DoCheck {
  @Input() name!: string;
  @Input() img!: string;
  @Input() message!: string;
  @Input() time!: any;
  @Input() totalMsg!: number;
  @Input() itemId!: any;
  @Output() onClick = new EventEmitter();

  clicked!: string | null;
  constructor() {}

  ngOnInit(): void {}

  onClicked() {
    this.onClick.emit(this.itemId);
  }

  ngDoCheck(): void {
    this.clicked = localStorage.getItem('clickedId');
  }
}
