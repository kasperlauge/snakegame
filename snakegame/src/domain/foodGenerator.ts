import { Field } from "./field";

export class FoodGenerator {
    food: Field;
    constructor(private squareSize: number) {
        
    }

    drawFood(ctx:CanvasRenderingContext2D) {
        ctx.fillRect(this.food.x, this.food.y, this.squareSize, this.squareSize);
    }

    generateFood() {
        let x = Math.floor((Math.random() * 600-this.squareSize) + 0);
        let y = Math.floor((Math.random() * 600-this.squareSize) + 0);

        this.food = new Field(x,y);
    }
}