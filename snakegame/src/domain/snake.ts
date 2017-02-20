import { Field } from "./field";

export class Snake {
    squaresize: number = 10;
    speedCounter: number = 1;
    fields: Field[];
    direction: Direction = Direction.Up;
    get length(): number {
        return this.fields.length;
    }
    get head(): Field {
        return this.fields[0];
    }
    constructor(fieldDimensionX: number,fieldDimensionY: number, public speed: number) {
        this.fields = [new Field(300,300), new Field(300+this.squaresize,300),new Field(300+this.squaresize*2,300)];
    }

    drawSnake(ctx:CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, 600, 600);
        for (let i = 0; i<this.length;i++){
        ctx.fillRect(this.fields[i].x, this.fields[i].y, this.squaresize, this.squaresize);
        }
        this.setNewPosition();
    }

    setNewPosition() {
        if(this.speedCounter === 1) {
        if(this.direction === Direction.Up) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.y = this.head.y-this.squaresize;
            console.log(this.fields);
        }
        else if(this.direction === Direction.Down) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.y = this.head.y+this.squaresize
        }
        else if(this.direction === Direction.Right) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.x = this.head.x+this.squaresize;
        }
        else if(this.direction === Direction.Left) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.x = this.head.x-this.squaresize;
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