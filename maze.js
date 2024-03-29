"use strict";
console.log("Hi! This is our this.maze... it'll be here soon!");
class Maze {
    constructor(length, width) {
        this.length = length;
        this.width = width;
        this.maze = new Array(this.length);
        ;
    }
    createMaze() {
        // creates initial array - first just rows, then makes each of the rows full of columns
        for (let n = 0; n < this.length; n++) {
            this.maze[n] = new Array(this.width);
        }
        // makes the first and last rows walls
        for (let k = 0; k < this.width; k++) {
            this.maze[0][k] = "wall";
            this.maze[this.length - 1][k] = "wall";
        }
        // makes the first and last columns walls
        for (let k = 1; k < this.length - 1; k += 1) {
            this.maze[k][0] = "wall";
            this.maze[k][this.width - 1] = "wall";
        }
        this.maze[0][this.width - 2] = "EXIT";
        this.maze[this.length - 1][1] = "ENTER";
        // this.printEverything()
        let toBeWall = true;
        // for (let amt = 0; amt <= (this.maze.length * this.maze[0].length) / 4; amt++) {
        //     let start = this.randomPoint(toBeWall);
        //     this.maze[start[0]][start[1]] = "wall";
        // }
        //this.carvePassagesFrom(0, 0)
        // this.printEverything()
    }
    carvePassagesFrom(cx, cy) {
        const N = 2;
        const S = -2;
        const E = 2;
        const W = -2;
        let directions = [N, S, E, W]; // algorithm to sort randomly if time
        for (let d of directions) {
            let nx = cx;
            let ny = cy;
            if (d == E || d == W) {
                nx += d;
            }
            else {
                ny += d;
            }
            if (ny > 0 && ny < this.length - 1 && nx > 0 && nx < this.width - 1 && this.maze[nx][ny] !== "wall") {
                this.maze[cy][cx] |= d;
                if (d == N) {
                    this.maze[ny][nx] |= S;
                }
                else if (d == S) {
                    this.maze[ny][nx] |= N;
                }
                else if (d == E) {
                    this.maze[ny][nx] |= W;
                }
                else {
                    this.maze[ny][nx] |= E;
                }
                this.carvePassagesFrom(nx, ny);
            }
        }
    }
    randomPoint(toBeWall) {
        let x = Math.floor(Math.random() * (this.width - 2) + 1);
        let y = Math.floor(Math.random() * (this.length - 2) + 1);
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
    // printEverything() {
    //     console.log("after everything:" + this.maze)
    //     for (let x = 0; x < this.length; x++) {
    //         console.log("each row after everything:" + this.maze[x]);
    //     }
    // }
    drawEverything() {
        for (let y = 0; y < this.length; y++) {
            for (let x = 0; x < this.width; x++) {
                if (this.maze[y][x] == "wall") {
                    ctx.drawImage(wallImage, x * (canvas.width / maze.width), y * (canvas.height / maze.length), canvas.width / maze.width, canvas.height / maze.length);
                }
            }
        }
    }
    // checkForWall(x : number, y : number) {
    //     if(this.maze[x][y] === 'wall') {
    //         return true;
    //     }
    // }
    hardcodeWalls() {
        this.maze[1][4] = "wall";
        this.maze[2][2] = "wall";
        this.maze[2][4] = "wall";
        this.maze[2][6] = "wall";
        this.maze[2][7] = "wall";
        this.maze[2][8] = "wall";
        this.maze[3][2] = "wall";
        this.maze[3][4] = "wall";
        this.maze[3][5] = "wall";
        this.maze[3][6] = "wall";
        this.maze[3][8] = "wall";
        this.maze[4][2] = "wall";
        this.maze[4][8] = "wall";
        this.maze[5][2] = "wall";
        this.maze[5][5] = "wall";
        this.maze[5][6] = "wall";
        this.maze[5][8] = "wall";
        this.maze[6][1] = "wall";
        this.maze[6][2] = "wall";
        this.maze[6][3] = "wall";
        this.maze[6][6] = "wall";
        this.maze[6][8] = "wall";
        this.maze[7][3] = "wall";
        this.maze[7][6] = "wall";
        this.maze[8][3] = "wall";
        this.maze[8][6] = "wall";
        this.maze[8][7] = "wall";
        this.maze[10][1] = "player";
    }
    // checkCoordinates(horiz : boolean) {
    //     for (let y = 0; y < maze.length; y++) {
    //         for (let x = 0; x < maze.width; x++) {
    //             if (this.maze[y][x] == "player") {
    //                 if (horiz) {
    //                     return x;
    //                 } else {
    //                     return y;
    //                 }
    //             }
    //         }
    //     }
    // }
    update(left, right, up, down) {
        for (let y = 0; y < maze.length; y++) {
            for (let x = 0; x < maze.width; x++) {
                if (this.maze[y][x] == "player") {
                    if (left) {
                        this.maze[0][x - 1] = "player";
                    }
                    else if (right) {
                        this.maze[0][x + 1] = "player";
                    }
                    else if (up) {
                        this.maze[x + 1][0] = "player";
                    }
                    else if (down) {
                        this.maze[x - 1][0] = "player";
                    }
                }
            }
        }
    }
}
