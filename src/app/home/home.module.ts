import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoryCardComponent } from '../components/story-card/story-card.component';
import { StoryComponent } from '../components/story/story.component';
import { FeedCardComponent } from '../components/feed-card/feed-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    StoryCardComponent,
    StoryComponent,
    FeedCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SlickCarouselModule,
    FontAwesomeModule,
  ],
})
export class HomeModule {}
