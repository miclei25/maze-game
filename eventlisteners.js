"use strict";
let player = new Player(canvas.width / 2, canvas.height - 20);
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft")
        player.moveLeft();
    if (event.key === "ArrowRight")
        player.moveRight();
    if (event.key === "ArrowUp")
        player.moveUp();
    if (event.key === "ArrowDown")
        player.moveDown();
});
document.addEventListener("keyup", function (event) { });
