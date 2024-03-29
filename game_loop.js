"use strict";
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
let givenWidth = 5;
let maze = new Maze(2 * givenLength + 1, 2 * givenWidth + 1);
maze.createMaze();
draw();
function draw() {
    // Clear the stage!
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(newImage, 0, 0, 500, 500);
    // ctx.drawImage(wallImage, 0, 0, 100, 100);
    maze.hardcodeWalls();
    maze.drawEverything();
    // ctx.drawImage(newImage, 0, 0, canvas.width / maze.width, canvas.height / maze.length);
    // ctx.drawImage(wallImage, 200, 200, canvas.width / maze.width, canvas.height / maze.length);
    player.draw();
    player.update();
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
