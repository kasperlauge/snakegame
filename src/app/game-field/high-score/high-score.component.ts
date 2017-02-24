import { Component, OnInit, Input } from '@angular/core';

import { HighScore } from "../../../domain/highScore";

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css']
})
export class HighScoreComponent implements OnInit {

  @Input() highScores: HighScore[];
  constructor() { }

  ngOnInit() {
  }

}
