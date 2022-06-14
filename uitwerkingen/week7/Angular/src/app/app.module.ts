import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardModule } from './cards/cards.module';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent
  ],
  imports: [CardModule, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
