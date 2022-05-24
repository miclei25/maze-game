console.log("Hi! This is our maze... it'll be here soon!")

class Maze {

    length : number;
    width : number;

    constructor(length : number, width : number) {
        this.length = length;
        this.width = width;
    }

    createMaze() {
        let maze = new Array(this.length);
        maze.forEach( (n, index : number) => {
            maze[index] = new Array(this.width);
        });
    
        for(let k = 1; k < this.width; k++) {
            maze[0][k] = "wall";
            maze[this.length - 1][k] = "wall";
        }

        // for(let x = 0; x <= this.length; x++) {
        //     maze[x][0] = "wall";
        //     maze[x][this.length - 1] = "wall";
        // }
        for (let a = 0; a <= this.length; a++) {
            for (let b = 0;  b <= this.width; b + 2) {
                maze[a][b] = "wall";
            }
        }

        maze[0][this.width - 1] = "EXIT";
        maze[this.length - 1][0] = "ENTER";

        console.log(maze)
    }

}

let m = new Maze(5, 7)
m.createMaze()

class Actor{

    x : number;
    y : number;

    constructor(x: number, y : number) {
        this.x = x;
        this.y = y;
    }
}

class Player extends Actor {
    
}