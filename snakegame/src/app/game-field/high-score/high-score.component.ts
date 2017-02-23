import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { HighScore } from "../../../domain/highScore";

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css']
})
export class HighScoreComponent implements OnInit {

  @Input() highScores: FirebaseListObservable<HighScore[]>;
  constructor() { }

  ngOnInit() {
  }

}
