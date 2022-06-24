import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicFeedRoutingModule } from './public-feed-routing.module';
import { PublicFeedComponent } from './public-feed.component';
import { SearchComponent } from '../components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublicFeedComponent, SearchComponent],
  imports: [
    CommonModule,
    PublicFeedRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class PublicFeedModule {}
