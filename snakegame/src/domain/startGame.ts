export class StartGame {
    constructor(private fieldDimensions: number) {}
    drawStartGame(ctx:CanvasRenderingContext2D) {
        ctx.textAlign="center"; 
        ctx.font = "50px Verdana";
        ctx.fillText("Snake",this.fieldDimensions/2,this.fieldDimensions/2-30,150);

        ctx.textAlign="center"; 
        ctx.font = "20px Verdana";
        ctx.fillText("Tryk på en piletast for at starte",this.fieldDimensions/2,this.fieldDimensions/2-10,150);
    }
}