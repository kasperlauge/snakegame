import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Snake, Direction } from "../../domain/snake";

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements AfterViewInit {
  context:CanvasRenderingContext2D;
  fieldHeight: number = 600;
  fieldWidth: number = 600;
  bgColor: string = "lightgray";
  snake: Snake = new Snake(15,15,4);
  @ViewChild("field") field;
  @HostListener('window:keydown', ['$event']) onkeypress(event: any) {
    if(event.code === 'ArrowUp' && (this.snake.direction !== Direction.Down)) this.snake.direction = Direction.Up;
    if(event.code === 'ArrowDown'&& (this.snake.direction !== Direction.Up)) this.snake.direction = Direction.Down;
    if(event.code === 'ArrowRight'&& (this.snake.direction !== Direction.Left)) this.snake.direction = Direction.Right;
    if(event.code === 'ArrowLeft'&& (this.snake.direction !== Direction.Right)) this.snake.direction = Direction.Left;
  }
 
  constructor() { }
 

  ngAfterViewInit() {
    this.context = this.field.nativeElement.getContext("2d");

    this.tick();
  }

  tick() {
    requestAnimationFrame(()=> {
      this.tick()
    });
    var ctx = this.context;
    this.snake.drawSnake(ctx);
  }
}
