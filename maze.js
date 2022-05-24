"use strict";
console.log("Hi! This is our maze... it'll be here soon!");
class Maze {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    createMaze() {
        let maze = new Array(this.length);
        // console.log(maze)
        for (let n = 0; n < this.length; n++) {
            maze[n] = new Array(this.width);
        }
        console.log(maze);
        // console.log(maze[0])
        for (let k = 0; k < this.width; k++) {
            maze[0][k] = "wall";
            maze[this.length - 1][k] = "wall";
        }
        console.log(maze);
        for (let a = 1; a < this.length - 1; a++) {
            for (let b = 0; b < this.width; b += 2) {
                maze[a][b] = "wall";
            }
        }
        console.log(maze);
        maze[0][this.width - 1] = "EXIT";
        maze[this.length - 1][0] = "ENTER";
        ////////////////////////////////////////////////
        console.log(maze);
        for (let x = 0; x < this.length; x++) {
            console.log(maze[x]);
        }
    }
}
let m = new Maze(5, 7);
m.createMaze();
