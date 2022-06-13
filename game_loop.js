"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const FRAME_LENGTH = 30;
const actorList = new ActorList();
//Draw ~ 30 times a second
let drawIntervalId = window.setInterval(draw, FRAME_LENGTH);
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
let newImage = new Image();
newImage.src = 'images/grass.png';
let wallImage = new Image();
wallImage.src = 'images/cobblestone.png';
// these two are both hardcoded rn - but we should make an input box or something where the player can input
let givenLength = 5;
let givenWidth = 7;
let maze = new Maze(2 * givenLength + 1, 2 * givenWidth + 1);
maze.createMaze();
draw();
function draw() {
    // Clear the stage!
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(newImage, 100, 100, 100, 100);
<<<<<<< HEAD
    //ctx.drawImage(wallImage, 0, 0, 100, 100);
=======
    ctx.drawImage(wallImage, 0, 0, 100, 100);
>>>>>>> cd75b828eb545125ac3137c11c90d17e09b54cde
    maze.drawEverything();
    // ctx.drawImage(newImage, 0, 0, canvas.width / maze.width, canvas.height / maze.length);
    // ctx.drawImage(wallImage, 200, 200, canvas.width / maze.width, canvas.height / maze.length);
    // Re-draw all the actors!
    for (const actor of actorList.actors) {
        actor.draw();
    }
    //Update all actors
    for (const actor of actorList.actors) {
        actor.update();
    }
}
// Functions to control (pause/continue) the game loop.
function pauseDrawing() {
    if (drawIntervalId !== undefined)
        clearInterval(drawIntervalId);
    drawIntervalId = undefined;
}
function continueDrawing() {
    if (drawIntervalId === undefined)
        drawIntervalId = window.setInterval(draw, FRAME_LENGTH);
}
document.querySelector("#pause").addEventListener("click", pauseDrawing);
document.querySelector("#continue").addEventListener("click", continueDrawing);
