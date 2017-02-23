import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Snake, Direction } from "../../domain/snake";
import { FoodGenerator } from "../../domain/foodGenerator";
import { StartGame } from "../../domain/startGame";
import { HighScore } from "../../domain/highScore";
import { SaveHighScoreService } from "../save-high-score.service";

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements AfterViewInit {
  context:CanvasRenderingContext2D;
  currentNickName: string = "";
  gameStarted: boolean = false;
  squareSize: number = 20;
  fieldDimensions: number = 600;
  startGameClass: StartGame = new StartGame(this.fieldDimensions);
  get score() {
    return this.snake.length*11-this.snake.speed*this.snake.length;
  }
  bgColor: string = "lightgray";
  snake: Snake = new Snake(this.fieldDimensions,2,this.squareSize);
  foodGenerator: FoodGenerator = new FoodGenerator(this.squareSize,this.fieldDimensions);
  @ViewChild("field") field;
  @HostListener('window:keydown', ['$event']) onkeypress(event: any) {
    this.gameStarted = true;
    if(event.code === 'ArrowUp' && (this.snake.direction !== Direction.Down)) this.snake.direction = Direction.Up;
    if(event.code === 'ArrowDown'&& (this.snake.direction !== Direction.Up)) this.snake.direction = Direction.Down;
    if(event.code === 'ArrowRight'&& (this.snake.direction !== Direction.Left)) this.snake.direction = Direction.Right;
    if(event.code === 'ArrowLeft'&& (this.snake.direction !== Direction.Right)) this.snake.direction = Direction.Left;
  }
 
  constructor(private saveHighScoreService: SaveHighScoreService) { }
 

  ngAfterViewInit() {
    this.context = this.field.nativeElement.getContext("2d");
    this.startGame();
  }

  startGame() {
    this.foodGenerator.generateFood();
    this.tick();
  }

  tick() {
    requestAnimationFrame(()=> {
      this.tick()
    });

    var ctx = this.context;
    ctx.clearRect(0, 0, this.fieldDimensions, this.fieldDimensions);
    this.foodGenerator.drawFood(ctx);
    this.snake.drawSnake(ctx);
    if(!this.gameStarted) {
    this.startGameClass.drawStartGame(ctx);
    }
    //Check for snakes head touching food
    if (this.snake.isTouching(this.foodGenerator.food)) {
            this.snake.eat();
            this.foodGenerator.generateFood();
          }
    if(this.snake.isCollidingWithTerrain() || this.snake.isCollidingWithSelf()) {
            this.saveHighScore();
            this.snake.die();
            this.gameStarted = false;
          }

    this.snake.setNewPosition();
  }


  setNickName(event: any) {
    this.currentNickName = event.target.value;
  }
  saveHighScore() {
    this.saveHighScoreService.saveSingleHighScoreToDb(new HighScore(this.currentNickName,this.score));
  }
  get highScore() {
    return this.saveHighScoreService.getHighScoreFromDb();
  }
}
