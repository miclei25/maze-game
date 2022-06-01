"use strict";
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
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
        let position = 0;
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
        this.yVel = 5;
    }
    moveDown() {
        this.yVel = -5;
    }
    update() {
        this.x += this.xVel;
        this.y += this.yVel;
    }
}
