import { Component } from '@angular/core';

import {
  faHouseChimney,
  faRightFromBracket,
  faMagnifyingGlass,
  faPaperPlane,
  faUser,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'menestagram';
  faHouseChimney = faHouseChimney;
  faMagnifyingGlass = faMagnifyingGlass;
  faPaperPlane = faPaperPlane;
  faUser = faUser;
  faGear = faGear;
  faRightFromBracket = faRightFromBracket;
}
