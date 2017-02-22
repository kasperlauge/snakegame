import { Injectable } from '@angular/core';

import { HighScore } from "../domain/highScore";
import { SortService } from "./sort.service";

@Injectable()
export class SaveHighScoreService {

  constructor(private sortService: SortService) {
    localStorage.setItem("1",JSON.stringify([]));
   }

  saveHighScoreToDb(highScoreArray: HighScore[]) {
    localStorage.setItem("1",JSON.stringify(highScoreArray));
  }

  saveSingleHighScoreToDb(highscore: HighScore) {
    let highscores = this.getHighScoreFromDb();
    highscores.push(highscore);
    let temp = this.sortService.sortDescending(highscores);
    this.saveHighScoreToDb(temp);
  }

  getHighScoreFromDb() : HighScore[] {
    return JSON.parse(localStorage.getItem("1"));
  }
}
