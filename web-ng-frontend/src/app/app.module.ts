import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteOfTheDayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
