import { Field } from "./field";

export class FoodGenerator {
    food: Field;
    constructor(private squareSize: number, private fieldDimensions: number) {
        
    }

    drawFood(ctx:CanvasRenderingContext2D) {
        var imageObj = new Image(this.squareSize,this.squareSize);
        imageObj.src = '/assets/img/pizza.png';
        ctx.drawImage(imageObj, this.food.x, this.food.y);
        //ctx.fillRect(this.food.x, this.food.y, this.squareSize, this.squareSize);
    }

    generateFood() {
        let x = Math.floor((Math.random() * (this.fieldDimensions-this.squareSize)));
        let y = Math.floor((Math.random() * (this.fieldDimensions-this.squareSize)));

        this.food = new Field(x,y);
    }
}