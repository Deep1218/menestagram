import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { PublicFeedRoutingModule } from './public-feed-routing.module';
import { PublicFeedComponent } from './public-feed.component';
import { SearchComponent } from '../components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { SuggestionCardComponent } from '../components/suggestion-card/suggestion-card.component';

@NgModule({
  declarations: [PublicFeedComponent, SearchComponent, SuggestionCardComponent],
  imports: [
    CommonModule,
    PublicFeedRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SlickCarouselModule,
  ],
})
export class PublicFeedModule {}
