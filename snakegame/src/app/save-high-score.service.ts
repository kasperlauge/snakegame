import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { HighScore } from "../domain/highScore";
import { SortService } from "./sort.service";

@Injectable()
export class SaveHighScoreService {

  highScores: FirebaseListObservable<HighScore[]>;

  constructor(private sortService: SortService, af: AngularFire) {
    this.highScores = af.database.list('/0');
   }

  saveHighScoreToDb(highScoreArray: HighScore[]) {
    //localStorage.setItem("1",JSON.stringify(highScoreArray));
  }

  saveSingleHighScoreToDb(highscore: HighScore) {
    this.highScores.push(highscore);
  }

  getHighScore() {
    return this.highScores.map(highScores => {
      let hsarray = highScores.map(hs => {
        return new HighScore(hs.name,hs.score);
      });
      let temp: HighScore[] = this.sortService.sortDescending(hsarray);
      return temp.slice(0,15);
    });
  }
}
