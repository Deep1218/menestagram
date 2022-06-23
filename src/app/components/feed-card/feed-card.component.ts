import { Component, OnInit } from '@angular/core';
import {
  faEllipsisVertical,
  faHeart as faHeartSolid,
  faComment as faCommentSolid,
  faPaperPlane as faPaperPlaneSolid,
  faBookmark as faBookmarkSolid,
  faCommenting,
} from '@fortawesome/free-solid-svg-icons';

import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
})
export class FeedCardComponent implements OnInit {
  hoverOn = false;
  faEllipsisV = faEllipsisVertical;
  faPaperclip = faCommenting;

  faHeartSolid = faHeartSolid;
  faHeart = faHeart;

  faCommentSolid = faCommentSolid;
  faComment = faComment;

  faPaperPlaneSolid = faPaperPlaneSolid;
  faPaperPlane = faPaperPlane;

  faBookmarkSolid = faBookmarkSolid;
  faBookmark = faBookmark;

  constructor() {}

  ngOnInit(): void {}
}
