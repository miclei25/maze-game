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

        let position = 0;

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
    }

    draw() : void {
        ctx.beginPath();
        ctx.arc(this.x,this.y,10, 0 , Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = 'rgba(5, 5, 5, 1)'
        ctx.fill();
    }
    
}