"use strict";
class Walls {
    constructor() {
        this.walls = [];
        let bp = new Point(0, 100);
        let ep = new Point(400, 100);
        let wall = new Wall(bp, ep);
        this.walls.push(wall);
        bp = new Point(200, 200);
        ep = new Point(500, 200);
        wall = new Wall(bp, ep);
        this.walls.push(wall);
        bp = new Point(0, 300);
        ep = new Point(450, 300);
        wall = new Wall(bp, ep);
        this.walls.push(wall);
    }
    draw() {
        ctx.beginPath();
        ctx.lineWidth = 10;
        for (const wall of this.walls) {
            ctx.moveTo(wall.start_point.x, wall.start_point.y);
            ctx.lineTo(wall.end_point.x, wall.end_point.y);
        }
        ctx.closePath();
    }
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Wall {
    constructor(start_point, end_point) {
        this.start_point = start_point;
        this.end_point = end_point;
    }
}
