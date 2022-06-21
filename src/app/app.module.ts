import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';

@NgModule({
  declarations: [AppComponent, FeedCardComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
