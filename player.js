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
var Actor = /** @class */ (function () {
    function Actor(x, y) {
        this.y = 500;
        this.x = x;
        this.y = y;
    }
    Actor.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    };
    Actor.prototype.update = function () {
    };
    return Actor;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.xVel = 0;
        _this.yVel = 0;
        return _this;
    }
    Player.prototype.moveLeft = function () {
        this.xVel = -5;
    };
    Player.prototype.moveRight = function () {
        this.xVel = 5;
    };
    Player.prototype.moveUp = function () {
        this.yVel = -5;
    };
    Player.prototype.moveDown = function () {
        this.yVel = 5;
    };
    Player.prototype.update = function () {
        this.x += this.xVel;
        this.y += this.yVel;
        if (this.x <= 500 && this.x >= 400 && this.y === 0) {
            window.alert("You won!! Now you can go back to the home screen :)");
            ctx.beginPath();
            ctx.rect(0, 500, 400, 400);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = 'rgba (0, 0 , 0)';
            Stopwatch;
        }
        if (m.maze[this.x][this.y] === 'wall') {
            this.yVel -= 5;
            this.xVel -= 5;
        }
    };
    Player.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = 'rgba (255, 0, 0, 1)';
        // ctx.rect(10, 10, 50, 50)
        // ctx.fill();
    };
    Player.prototype.preventcrossing = function () {
        var pos = m.checkForWall(this.x, this.y);
        if (pos === true) {
            this.y -= this.yVel;
            this.x -= this.xVel;
        }
    };
    Player.prototype.stop = function () {
        this.xVel = 0;
        this.yVel = 0;
    };
    return Player;
}(Actor));
