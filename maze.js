var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hi! This is our maze... it'll be here soon!");
var Maze = /** @class */ (function () {
    function Maze(length, width) {
        this.length = length;
        this.width = width;
    }
    Maze.prototype.createMaze = function () {
        var _this = this;
        var maze = new Array(this.length);
        maze.forEach(function (n, index) {
            maze[index] = new Array(_this.width);
        });
        for (var k = 1; k < this.width; k++) {
            maze[0][k] = "wall";
            maze[this.length - 1][k] = "wall";
        }
        // for(let x = 0; x <= this.length; x++) {
        //     maze[x][0] = "wall";
        //     maze[x][this.length - 1] = "wall";
        // }
        for (var a = 0; a <= this.length; a++) {
            for (var b = 0; b <= this.width; b + 2) {
                maze[a][b] = "wall";
            }
        }
        maze[0][this.width - 1] = "EXIT";
        maze[this.length - 1][0] = "ENTER";
        console.log(maze);
    };
    return Maze;
}());
var m = new Maze(5, 7);
m.createMaze();
var Actor = /** @class */ (function () {
    function Actor(x, y) {
        this.x = x;
        this.y = y;
    }
    return Actor;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Player;
}(Actor));
