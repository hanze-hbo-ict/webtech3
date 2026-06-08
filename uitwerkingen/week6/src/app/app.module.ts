import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KipComponent } from './kip/kip.component';
import { HaraldComponent } from './harald/harald.component';

@NgModule({
  declarations: [
    AppComponent,
    KipComponent,
    HaraldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
