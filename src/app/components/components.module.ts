import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsComponent } from './components.component';

import { SuggestionCardComponent } from './suggestion-card/suggestion-card.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { StoryComponent } from './story/story.component';
import { SearchComponent } from './search/search.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { ChatCardComponent } from './chat-card/chat-card.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    SuggestionCardComponent,
    StoryCardComponent,
    StoryComponent,
    SearchComponent,
    FeedCardComponent,
    ChatCardComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    SuggestionCardComponent,
    StoryCardComponent,
    StoryComponent,
    SearchComponent,
    FeedCardComponent,
    ChatCardComponent,
  ],
})
export class ComponentsModule {}
