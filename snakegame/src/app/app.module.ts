import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameFieldComponent } from './game-field/game-field.component';
import {SaveHighScoreService } from "./save-high-score.service";
import { HighScoreComponent } from './game-field/high-score/high-score.component';
import { SortService } from "./sort.service";

@NgModule({
  declarations: [
    AppComponent,
    GameFieldComponent,
    HighScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SaveHighScoreService, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
