export class StartGame {
    constructor(private fieldDimensions: number) {}
    drawStartGame(ctx:CanvasRenderingContext2D) {
        ctx.textAlign="center"; 
        ctx.font = "60px Verdana";
        ctx.fillText("Snake",this.fieldDimensions/2,this.fieldDimensions/2-150,200);

        ctx.textAlign="center"; 
        ctx.font = "20px Verdana";
        ctx.fillText("Indtast dit navn",this.fieldDimensions/2,this.fieldDimensions/2-110,200);

        ctx.textAlign="center"; 
        ctx.font = "20px Verdana";
        ctx.fillText("Tryk på en piletast for at starte",this.fieldDimensions/2,this.fieldDimensions/2-20,200);


        ctx.textAlign="center"; 
        ctx.font = "20px Verdana";
        ctx.fillText("Vælg en sværhedsgrad",this.fieldDimensions/2,this.fieldDimensions/2+70,200);
    }
}