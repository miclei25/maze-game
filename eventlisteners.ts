

let player : Player = new Player(canvas.width / 2, canvas.height - 20);

actorList.addActor(player)

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

<<<<<<< HEAD
<<<<<<< HEAD
// document.addEventListener("keyup", function(event: KeyboardEvent)){
//     event.preventDefault()
//     let elm = document.querySelector(`${event.key}`) as HTMLElement | null
//     if (!elm) {
//         return;
//     }
//     elm.classList.remove("player");
// }

// document.addEventListener("keyup", (event: KeyboardEvent) => {
//     let elm = document.querySelector(`.coin[data-letter='${event.key.toLowerCase()}']`) as HTMLElement | null
//     if (!elm){ //elm === null
//         return;
//     }
//     elm.classList.remove("keypress");
// })
=======
document.addEventListener("keyup", function(event : KeyboardEvent)
=======
document.addEventListener("keyup", function(event : KeyboardEvent){}
>>>>>>> 7714010fbe4843c75dad89d15dafe042072e108e
    

);

>>>>>>> 5a4f79a7dbac6c4cd18ca130bf9877d99d692547
