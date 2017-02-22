import { Field } from "./field";

export class Snake {
    speedCounter: number = 1;
    fields: Field[];
    direction: Direction;
    oldDirection: Direction; //To prevent bug where u can turn 180 degrees as snake
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
                        this.direction = null;
    }

    drawSnake(ctx:CanvasRenderingContext2D) {
        var imageObj = new Image(this.squareSize,this.squareSize);
        imageObj.src = '/assets/img/henning.png';
        ctx.drawImage(imageObj, this.fields[0].x, this.fields[0].y);
        for (let i = 1; i<this.length;i++){
        ctx.fillRect(this.fields[i].x, this.fields[i].y, this.squareSize, this.squareSize);
        }
    }

    isCollidingWithTerrain() {
        return (((this.head.x+this.squareSize) > this.fieldDimensions) || ((this.head.y+this.squareSize) > this.fieldDimensions) || (this.head.x < 0) || (this.head.y < 0));
    }

    isCollidingWithSelf() {
        for (let i = 3; i<this.length; i++) {
            if(this.head.x === this.fields[i].x && this.head.y === this.fields[i].y) return true;
        }
        return false;
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
        this.oldDirection = null;
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
        if(this.speedCounter === 0) {
        if((this.direction === Direction.Up) && (this.oldDirection !== Direction.Down)) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.y = this.head.y-this.squareSize;
            this.oldDirection = Direction.Up;
        }
        else if((this.direction === Direction.Down) && (this.oldDirection !== Direction.Up)) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.y = this.head.y+this.squareSize
            this.oldDirection = Direction.Down;
        }
        else if((this.direction === Direction.Right) && (this.oldDirection !== Direction.Left)) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.x = this.head.x+this.squareSize;
            this.oldDirection = Direction.Right;
        }
        else if((this.direction === Direction.Left) && (this.oldDirection !== Direction.Right)) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.x = this.head.x-this.squareSize;
            this.oldDirection = Direction.Left;
        }
        else {
            //default, if bug arrises follow oldDirection
            this.handleBuggyDirection(this.oldDirection);

        }
    }
    this.speedCounter = (this.speedCounter + 1)%this.speed;
}

    handleBuggyDirection(direction) {
        if(direction === Direction.Up) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.y = this.head.y-this.squareSize;
            this.oldDirection = Direction.Up;
        }
        else if(direction === Direction.Down) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.y = this.head.y+this.squareSize
            this.oldDirection = Direction.Down;
        }
        else if(direction === Direction.Right) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.x = this.head.x+this.squareSize;
            this.oldDirection = Direction.Right;
        }
        else if(direction === Direction.Left) {
            for (let i = this.length-1; i>0;i--) {
                this.fields[i].y = this.fields[i-1].y;
                this.fields[i].x = this.fields[i-1].x;
            }
            this.head.x = this.head.x-this.squareSize;
            this.oldDirection = Direction.Left;
        }
    }

}

    

export enum Direction {
    Up,
    Down,
    Left,
    Right
}