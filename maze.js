"use strict";
console.log("Hi! This is our maze... it'll be here soon!");
class Maze {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    createMaze() {
        let maze = new Array(this.length);
        // console.log(`before first loop: ${maze}`)
        for (let n = 0; n < this.length; n++) {
            maze[n] = new Array(this.width);
        }
        // console.log(`after first loop: ${maze}`)
        // console.log(`first row after first loop: ${maze}`)
        for (let k = 0; k < this.width; k++) {
            maze[0][k] = "wall";
            maze[this.length - 1][k] = "wall";
        }
        // console.log(`after second loop: ${maze}`)
        for (let a = 1; a < this.length - 1; a += 2) {
            for (let b = 0; b < this.width; b += 2) {
                maze[a][b] = "wall";
            }
        }
        // console.log(`after third loop: ${maze}`)
        maze[0][this.width - 1] = "EXIT";
        maze[this.length - 1][0] = "ENTER";
        ////////////////////////////////////////////////
        console.log(`after everything: ${maze}`);
        for (let x = 0; x < this.length; x++) {
            console.log(`each row after everything: ${maze[x]}`);
        }
    }
}
let m = new Maze(5, 7);
m.createMaze();
class Actor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Player extends Actor {
}
