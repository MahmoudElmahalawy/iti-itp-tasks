import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextboxComponent } from './textbox/textbox.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  declarations: [AppComponent, TextboxComponent, SlideshowComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
