"use strict";
console.log("Hi! This is our maze... it'll be here soon!");
class Maze {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    createMaze() {
        // creates initial array - first just rows, then makes each of the rows full of columns
        let maze = new Array(this.length);
        for (let n = 0; n < this.length; n++) {
            maze[n] = new Array(this.width);
        }
        // makes the first and last rows walls
        for (let k = 0; k < this.width; k++) {
            maze[0][k] = "wall";
            maze[this.length - 1][k] = "wall";
        }
        // makes the first and last columns walls
        for (let k = 1; k < this.length - 1; k += 2) {
            maze[k][0] = "wall";
            maze[k][this.width - 1] = "wall";
        }
        maze[0][this.width - 1] = "EXIT";
        maze[this.length - 1][0] = "ENTER";
        ////////////////////////////////////////////////
        console.log("after everything:" + maze);
        for (let x = 0; x < this.length; x++) {
            console.log("each row after everything:" + maze[x]);
        }
        ////////////////////////////////////////////////
        let toBeWall = true;
        let start = this.randomPoint(toBeWall);
        maze[start[0]][start[1]] = "wall";
<<<<<<< HEAD
=======
        this.carve_passages_from(0, 0, maze);
    }
    carve_passages_from(cx, cy, maze) {
>>>>>>> cf2d0ba22f1ae02983795a3ab364c725835fc151
        const N = 2;
        const S = -2;
        const E = 2;
        const W = -2;
<<<<<<< HEAD
        let directions = [N, S, E, W].sort(); // algorithm to sort randomly if time
        for (let d of directions) {
            let nx = start[0];
            let ny = start[1];
=======
        let directions = [N, S, E, W]; // algorithm to sort randomly if time
        for (let d of directions) {
            let nx = cx;
            let ny = cy;
>>>>>>> cf2d0ba22f1ae02983795a3ab364c725835fc151
            if (d == E || d == W) {
                nx += d;
            }
            else {
                ny += d;
            }
            if (ny > 0 && ny < this.length - 1 && nx > 0 && nx < this.length && maze[nx][ny] !== "wall") {
<<<<<<< HEAD
            }
            // nx, ny = cx + DX[direction], cy + DY[direction]
            // if ny.between?(0, grid.length-1) && nx.between?(0, grid[ny].length-1) && grid[ny][nx] == 0
            //     grid[cy][cx] |= direction
            //     grid[ny][nx] |= OPPOSITE[direction]
            //     carve_passages_from(nx, ny, grid)
        }
        ;
=======
                maze[cy][cx] |= d;
                if (d == N) {
                    maze[ny][nx] |= S;
                }
                else if (d == S) {
                    maze[ny][nx] |= N;
                }
                else if (d == E) {
                    maze[ny][nx] |= W;
                }
                else {
                    maze[ny][nx] |= E;
                }
                this.carve_passages_from(nx, ny, maze);
            }
        }
>>>>>>> cf2d0ba22f1ae02983795a3ab364c725835fc151
    }
    randomPoint(toBeWall) {
        let x = Math.random() * (this.width - 2) + 1;
        let y = Math.random() * (this.length - 2) + 1;
        if (toBeWall) {
            if (x % 2 == 0) {
                x = (x - 2) / 2;
            }
            else {
                x = (x - 1) / 2;
            }
            if (y % 2 == 0) {
                y = (y - 2) / 2;
            }
            else {
                y = (y - 1) / 2;
            }
        }
        return [x, y];
    }
}
let givenLength = 5;
let givenWidth = 7;
let m = new Maze(2 * givenLength + 1, 2 * givenWidth + 1);
m.createMaze();
