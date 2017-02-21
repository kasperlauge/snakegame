import { Field } from "./field";

export class Snake {
    speedCounter: number = 1;
    fields: Field[];
    direction: Direction;
    oldDirection: Direction;
    get length(): number {
        return this.fields.length;
    }
    get head(): Field {
        return this.fields[0];
    }
    constructor(private fieldDimensions: number, public speed: number, public squareSize: number) {
        this.fields = [ new Field(Math.floor(fieldDimensions/2),Math.floor(fieldDimensions/2)),
                        new Field(Math.floor(fieldDimensions/2)+this.squareSize,Math.floor(fieldDimensions/2)),
                        new Field(Math.floor(fieldDimensions/2)+this.squareSize*2,Math.floor(fieldDimensions/2))];
    }

    drawSnake(ctx:CanvasRenderingContext2D) {
        for (let i = 0; i<this.length;i++){
        ctx.fillRect(this.fields[i].x, this.fields[i].y, this.squareSize, this.squareSize);
        }
    }

    isCollidingWithTerrain() {
        return (((this.head.x+this.squareSize) > this.fieldDimensions) || ((this.head.y+this.squareSize) > this.fieldDimensions) || (this.head.x < 0) || (this.head.y < 0));
    }
    die() {
        for(let i = this.length; i>-1;i--)
        {
            this.fields.pop();
        }
        this.fields.push(new Field(Math.floor(this.fieldDimensions/2),Math.floor(this.fieldDimensions/2)));
        this.fields.push(new Field(Math.floor(this.fieldDimensions/2)+this.squareSize,Math.floor(this.fieldDimensions/2)));
        this.fields.push(new Field(Math.floor(this.fieldDimensions/2)+this.squareSize*2,Math.floor(this.fieldDimensions/2)));
        this.direction = null;
    }

    eat() {
        this.fields.push(new Field(this.fields[this.length-1].x,this.fields[this.length-1].y));
    }
    isTouching(food) {
        return (((this.head.x >= food.x) && (this.head.x <= (food.x+this.squareSize))) ||
          (((this.head.x+this.squareSize) >= food.x) && ((this.head.x+this.squareSize)<=(food.x+this.squareSize)))) &&
          (((this.head.y >= food.y) && (this.head.y <= (food.y+this.squareSize))) || 
          (((this.head.y+this.squareSize) >= food.y) && ((this.head.y+this.squareSize) <= (food.y+this.squareSize))));
    }

    setNewPosition() {
        if(this.speedCounter === 1) {
        if(this.direction === Direction.Up) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.y = this.head.y-this.squareSize;
        }
        else if(this.direction === Direction.Down) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.y = this.head.y+this.squareSize
        }
        else if(this.direction === Direction.Right) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.x = this.head.x+this.squareSize;
        }
        else if(this.direction === Direction.Left) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.x = this.head.x-this.squareSize;
        }
    }
    this.speedCounter = (this.speedCounter + 1)%this.speed;
    }

}

export enum Direction {
    Up,
    Down,
    Left,
    Right
}