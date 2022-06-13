"use strict";
class Actor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update() {
    }
}
class Player extends Actor {
    constructor(x, y) {
        super(x, y);
        this.xVel = 0;
        this.yVel = 0;
    }
    moveLeft() {
        this.xVel = -5;
    }
    moveRight() {
        this.xVel = 5;
    }
    moveUp() {
        this.yVel = -5;
    }
    moveDown() {
        this.yVel = 5;
    }
    update() {
        this.x += this.xVel;
        this.y += this.yVel;
        if (this.y > canvas.height + 10) {
            this.y = 10;
        }
        if (this.y < canvas.height - 10) {
            this.y = canvas.height - 10;
        }
        if (this.x > canvas.height - 10) {
            this.x = canvas.width - 10;
        }
        if (this.x < canvas.height + 10) {
            this.x = canvas.width + 10;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = 'rgba (255, 0, 0, 1)';
        // ctx.rect(10, 10, 50, 50)
        // ctx.fill();
    }
    stop() {
        this.xVel = 0;
        this.yVel = 0;
    }
}
