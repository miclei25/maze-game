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

    update() : void {

    }
}

class Player extends Actor {
    
    xVel : number;
    yVel : number;

    constructor(x : number, y : number) {
        super(x,y);
        this.xVel = 0;
        this.yVel = 0;
    }

    moveLeft() : void {
        this.xVel = -5;
    }

    moveRight() : void {
        this.xVel = 5;
    }

    moveUp() : void {
        this.yVel = -5;
    }

    moveDown() : void {
        this.yVel = 5;
    }

    update() : void {
        this.x += this.xVel;
        this.y += this.yVel;
        if (this.y > canvas.height + 50) {
            actorList.removeActor(this);
        }
    }

    draw() : void {
        ctx.beginPath();
        ctx.arc(this.x,this.y,10, 0 , Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = 'rgba (255, 0, 0, 1)'
        // ctx.rect(10, 10, 50, 50)
        // ctx.fill();
    }
    
    stop() : void{
        this.xVel = 0;
        this.yVel = 0;
}}