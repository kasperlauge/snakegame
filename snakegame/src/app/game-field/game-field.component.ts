import { Component, OnInit } from '@angular/core';
import { Snake } from "../../domain/snake";

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {
  context:CanvasRenderingContext2D;
  fieldHeight: number = 500;
  fieldWidth: number = 500;
  bgColor: string = "lightgray";
  snake: Snake;
  constructor() { }

  ngOnInit() {

  }

}
