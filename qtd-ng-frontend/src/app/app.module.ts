import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { SuggestComponent } from './suggest/suggest.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    SuggestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
