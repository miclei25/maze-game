const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const FRAME_LENGTH = 30
const actorList = new ActorList();

//Draw ~ 30 times a second
let drawIntervalId : number | undefined = window.setInterval(draw, FRAME_LENGTH);

// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');

let newImage = new Image();
newImage.src = 'grass.png'
    
let wallImage = new Image();
wallImage.src = 'cobblestone.png'


function draw(){
    // Clear the stage!
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(newImage,0, 0, 500, 500);

    ctx.drawImage(wallImage,10,10,givenLength, givenWidth);

    // Re-draw all the actors!
    for (const actor of actorList.actors){
        actor.draw();
    }

    //Update all actors
    for (const actor of actorList.actors){
        actor.update();
    }
}

// Functions to control (pause/continue) the game loop.

function pauseDrawing(){
    if (drawIntervalId !== undefined)
        clearInterval(drawIntervalId);
    drawIntervalId = undefined;
}

function continueDrawing(){
    if (drawIntervalId === undefined)
        drawIntervalId = window.setInterval(draw, FRAME_LENGTH);
}

(document.querySelector("#pause") as HTMLElement).addEventListener("click",pauseDrawing);
(document.querySelector("#continue") as HTMLElement).addEventListener("click",continueDrawing);