import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
// we had to input
import {JeopardyService} from './jeopardyservice.service';
// we had to input
import { AnswerFieldComponent } from './answer-field/answer-field.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
