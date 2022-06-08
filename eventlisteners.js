"use strict";
let player = new Player(canvas.width / 2, canvas.height - 20);
actorList.addActor(player);
document.addEventListener("keydown", function (event) {
    event.preventDefault();
    if (event.key === "ArrowLeft")
        player.moveLeft();
    if (event.key === "ArrowRight")
        player.moveRight();
    if (event.key === "ArrowUp")
        player.moveUp();
    if (event.key === "ArrowDown")
        player.moveDown();
});
// document.addEventListener("keyup", function(event: KeyboardEvent)){
//     event.preventDefault()
//     let elm = document.querySelector(`${event.key}`) as HTMLElement | null
//     if (!elm) {
//         return;
//     }
//     elm.classList.remove("player");
// }
