class Walls {
    walls : Wall[];
    

    constructor() {
        this.walls = []
        let bp = new Point(0,100);
        let ep = new Point(400,100);
        let wall = new Wall(bp, ep);
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

    draw() {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        for (const wall of this.walls) {
            ctx.moveTo(wall.start_point.x, wall.start_point.y);
            ctx.lineTo(wall.end_point.x, wall.end_point.y)
            
        }
        ctx.stroke();
        ctx.closePath();
    }
}

class Point {
    x : number;
    y : number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

}

class Wall {
    start_point : Point;
    end_point : Point;

    constructor(start_point : Point, end_point : Point) {
        this.start_point = start_point;
        this.end_point = end_point;
    }
}