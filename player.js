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
        this.y = 0;
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
            this.stop();
            window.alert("You won!! Now you can go back to the home screen :)");
<<<<<<< HEAD
            stopwatch.stop();
            pauseDrawing();
        }
        if (this.x >= canvas.width) {
            this.xVel = -this.xVel;
        }
        if (this.y >= canvas.height) {
            this.yVel = -this.yVel;
=======
            ctx.beginPath();
            ctx.rect(0, 500, 400, 400);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = 'rgba (0, 0 , 0)';
            Stopwatch;
        }
<<<<<<< HEAD
        this.preventcrossing();
    };
    Player.prototype.draw = function () {
=======
        if (m.maze[this.x][this.y] === 'wall') {
            this.yVel -= 5;
            this.xVel -= 5;
=======
>>>>>>> 014b6214ff93114e74b1002141f44ebacf89214d
>>>>>>> 1ce7872514bf2340334798e1949e44bb17834011
        }
    }
    draw() {
>>>>>>> 5e0252145b7aee897d1a9bf6d40a59a463167f36
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = 'rgba (255, 0, 0, 1)';
        // ctx.rect(10, 10, 50, 50)
        // ctx.fill();
    };
    Player.prototype.preventcrossing = function () {
        var pos = m.checkForWall(Math.floor(this.x / (500 / m.width)), Math.floor(this.y / (500 / m.length)));
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
