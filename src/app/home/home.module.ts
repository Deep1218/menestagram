import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoryCardComponent } from '../components/story-card/story-card.component';
import { StoryComponent } from '../components/story/story.component';
import { FeedCardComponent } from '../components/feed-card/feed-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    StoryCardComponent,
    StoryComponent,
    FeedCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    FontAwesomeModule,
  ],
})
export class HomeModule {}
