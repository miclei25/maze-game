console.log("Hi! This is our this.maze... it'll be here soon!");
var Maze = /** @class */ (function () {
    function Maze(length, width) {
        this.length = length;
        this.width = width;
        this.maze = new Array(this.length);
        ;
    }
    Maze.prototype.createMaze = function () {
        // creates initial array - first just rows, then makes each of the rows full of columns
        for (var n = 0; n < this.length; n++) {
            this.maze[n] = new Array(this.width);
        }
        // makes the first and last rows walls
        for (var k = 0; k < this.width; k++) {
            this.maze[0][k] = "wall";
            this.maze[this.length - 1][k] = "wall";
        }
        // makes the first and last columns walls
        for (var k = 1; k < this.length - 1; k += 1) {
            this.maze[k][0] = "wall";
            this.maze[k][this.width - 1] = "wall";
        }
        this.maze[0][this.width - 1] = "EXIT";
        this.maze[this.length - 1][0] = "ENTER";
        this.printEverything();
        var toBeWall = true;
        var start = this.randomPoint(toBeWall);
        this.maze[start[0]][start[1]] = "wall";
        this.carvePassagesFrom(0, 0);
        this.printEverything();
    };
    Maze.prototype.carvePassagesFrom = function (cx, cy) {
        var N = 2;
        var S = -2;
        var E = 2;
        var W = -2;
        var directions = [N, S, E, W]; // algorithm to sort randomly if time
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var d = directions_1[_i];
            var nx = cx;
            var ny = cy;
            if (d == E || d == W) {
                nx += d;
            }
            else {
                ny += d;
            }
            if (ny > 0 && ny < this.length - 1 && nx > 0 && nx < this.length && this.maze[nx][ny] !== "wall") {
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
    };
    Maze.prototype.randomPoint = function (toBeWall) {
        var x = Math.floor(Math.random() * (this.width - 2) + 1);
        var y = Math.floor(Math.random() * (this.length - 2) + 1);
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
    };
    Maze.prototype.printEverything = function () {
        console.log("after everything:" + this.maze);
        for (var x = 0; x < this.length; x++) {
            console.log("each row after everything:" + this.maze[x]);
        }
    };
    Maze.prototype.drawEverything = function () {
        for (var x = 0; x < this.length; x++) {
            for (var y = 0; y < this.width; y++) {
                if (this.maze[x][y] == "wall") {
                    ctx.drawImage(wallImage, 0, 0, canvas.width / m.width, canvas.height / m.length);
                }
            }
        }
    };
    Maze.prototype.checkForWall = function (x, y) {
        if (this.maze[x][y] === 'wall') {
            return true;
        }
    };
    return Maze;
}());
var givenLength = 5;
var givenWidth = 7;
var m = new Maze(2 * givenLength + 1, 2 * givenWidth + 1);
m.createMaze();
