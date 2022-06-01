console.log("Hi! This is our maze... it'll be here soon!");
var Maze = /** @class */ (function () {
    function Maze(length, width) {
        this.length = length;
        this.width = width;
    }
    Maze.prototype.createMaze = function () {
        var maze = new Array(this.length);
        // console.log(`before first loop: ${maze}`)
        for (var n = 0; n < this.length; n++) {
            maze[n] = new Array(this.width);
        }
        // console.log(`after first loop: ${maze}`)
        // console.log(`first row after first loop: ${maze}`)
        for (var k = 0; k < this.width; k++) {
            maze[0][k] = "wall";
            maze[this.length - 1][k] = "wall";
        }
        for (var k = 1; k < this.length - 1; k += 2) {
            maze[k][0] = "wall";
            maze[k][this.width - 1] = "wall";
        }
        // console.log(`after second loop: ${maze}`)
        for (var a = 2; a < this.length - 2; a += 2) {
            for (var b = 0; b < this.width; b += 2) {
                maze[a][b] = "wall";
            }
        }
        // console.log(`after third loop: ${maze}`)
        maze[0][this.width - 1] = "EXIT";
        maze[this.length - 1][0] = "ENTER";
        ////////////////////////////////////////////////
        console.log("after everything:" + maze);
        for (var x = 0; x < this.length; x++) {
            console.log("each row after everything:" + maze[x]);
        }
    };
    return Maze;
}());
var m = new Maze(5, 7);
m.createMaze();
