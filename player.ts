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
<<<<<<< HEAD
        ctx.fillStyle = 'rgba(5, 5, 5, 1)'
=======
>>>>>>> 7714010fbe4843c75dad89d15dafe042072e108e
        ctx.fill();
        ctx.fillStyle = 'rgba (255, 0, 0, 1)'
        // ctx.rect(10, 10, 50, 50)
        // ctx.fill();
    }
    
}