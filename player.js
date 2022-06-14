"use strict";
let left;
let right;
let up;
let down;
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xVel = 0;
        this.yVel = 0;
    }
    moveLeft() {
        this.xVel = -(canvas.width / maze.width);
        // let horiz = true;
        // let c = maze.checkCoordinates(horiz);
        left = true;
        maze.update(left, right, up, down);
    }
    moveRight() {
        this.xVel = canvas.width / maze.width;
        // let horiz = true;
        // let c = maze.checkCoordinates(horiz);
        right = true;
        maze.update(left, right, up, down);
    }
    moveUp() {
        this.yVel = -(canvas.height / maze.length);
        // let horiz = false;
        // let c = maze.checkCoordinates(horiz);
        up = true;
        maze.update(left, right, up, down);
    }
    moveDown() {
        this.yVel = canvas.height / maze.length;
        // let horiz = false;
        // let c = maze.checkCoordinates(horiz);
        down = true;
        maze.update(left, right, up, down);
    }
    update() {
        this.x += this.xVel;
        this.y += this.yVel;
        if (this.x <= 500 && this.x >= 400 && this.y === 0) {
            this.stop();
            window.alert("You finished the Maze! Now you can go back to the home screen :)");
            stopwatch.halt();
            pauseDrawing();
        }
        if (this.x >= canvas.width) {
            this.xVel = -this.xVel;
        }
        if (this.y >= canvas.height) {
            this.yVel = -this.yVel;
        }
        // this.preventcrossing();
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
    // preventcrossing() : void {
    //     let pos = maze.checkForWall(Math.floor(this.x/(500/maze.width)), Math.floor(this.y/(500/maze.length)));
    //     if(pos === true) {
    //         this.y -= this.yVel;
    //         this.x -= this.xVel;
    //     }
    // }
    stop() {
        this.xVel = 0;
        this.yVel = 0;
    }
}
