import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PushPipe, LetDirective } from '../ngrx-component';
// Above needed for Stackblitz support 
// import { PushPipe, LetDirective } from '@ngrx/component';

@NgModule({
  declarations: [
    AppComponent,
    PushPipe,
    LetDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
