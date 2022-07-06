import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatCardComponent } from '../components/chat-card/chat-card.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [MessagesComponent, ChatCardComponent, ChatUserComponent, TextAreaComponent, MessageComponent],
  imports: [CommonModule, MessagesRoutingModule, FontAwesomeModule],
})
export class MessagesModule {}
