import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoryCardComponent } from '../components/story-card/story-card.component';
import { StoryComponent } from '../components/story/story.component';

@NgModule({
  declarations: [HomeComponent, StoryCardComponent, StoryComponent],
  imports: [CommonModule, HomeRoutingModule, SlickCarouselModule],
})
export class HomeModule {}
