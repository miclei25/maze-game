class Actor {

    x : number;
    y : number = 500;

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

        if(this.x <= 500 && this.x >= 400 && this.y === 0) {
            window.alert("You won!! Now you can go back to the home screen :)");
            ctx.beginPath();
            ctx.rect(0,500,400,400);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = 'rgba (0, 0 , 0)'
            Stopwatch
            
        }
        this.preventcrossing();
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
    
    preventcrossing() : void {
        let pos = m.checkForWall(this.x, this.y)
        if (pos === true) {
            this.y -= this.yVel;
            this.x -= this.xVel;
        }
    }

    stop() : void{
        this.xVel = 0;
        this.yVel = 0;
}}