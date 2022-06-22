import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  @Input() username!: string;
  @Input() imgUrl!: string;
  @Input() active!: boolean;

  constructor() {}

  ngOnInit(): void {}
  setDetails() {}
}
