document.addEventListener("keydown", function(event: KeyboardEvent){
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

document.addEventListener("keyup", (event : KeyboardEvent) => {
    event.preventDefault();
    if (event.key === "ArrowLeft")
        player.stop();
    if (event.key === "ArrowRight")
        player.stop();
    if (event.key === "ArrowUp")
        player.stop();
    if (event.key === "ArrowDown")
        player.stop();
        
});
