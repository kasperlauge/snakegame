import { Injectable } from '@angular/core';

import { HighScore } from "../domain/highScore";

@Injectable()
export class SortService {

  constructor() { }

  sortDescending(highScores: HighScore[]): HighScore[] {
    
    highScores.sort((a,b) => 
    {
      return b.score-a.score;
    });
    return highScores;
  }

  sortAscending(highScores: HighScore[]): HighScore[] {
    
    highScores.sort((a,b) => 
    {
      return a.score-b.score;
    });
    return highScores;
  }
}
