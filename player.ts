let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
class Actor {

    x : number;
    y : number;

    constructor(x: number, y : number) {
        this.x = x;
        this.y = y;
    }

    draw() : void {
        ctx.beginPath();
        ctx.arc(this.x,this.y,10, 0 , Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    position() {

        let position = 0;

    }
}

class Player extends Actor {
    
}