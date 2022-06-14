var Walls = /** @class */ (function () {
    function Walls() {
        this.walls = [];
        var bp = new Point(0, 100);
        var ep = new Point(400, 100);
        var wall = new Wall(bp, ep);
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
    Walls.prototype.draw = function () {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        for (var _i = 0, _a = this.walls; _i < _a.length; _i++) {
            var wall = _a[_i];
            ctx.moveTo(wall.start_point.x, wall.start_point.y);
            ctx.lineTo(wall.end_point.x, wall.end_point.y);
        }
        ctx.stroke();
        ctx.closePath();
    };
    return Walls;
}());
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var Wall = /** @class */ (function () {
    function Wall(start_point, end_point) {
        this.start_point = start_point;
        this.end_point = end_point;
    }
    return Wall;
}());
