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

//make into a function and call this function when one of the arrow keys are pressed
const stopwatch = new Stopwatch();

function startstopwatch() {
 
    stopwatch.start();
    

    // (amount of time the stopwatch has been running)
}

let start : boolean = false

document.onkeydown = checkKey;
function checkKey(e : KeyboardEvent) {

    e = e || window.event;
    if (start === false) {

    // if (e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40') {
        if (e.key == 'ArrowLeft' || e.key == 'ArrowUp' || e.key == 'ArrowRight' || e.key == 'ArrowDown') {
            start = true;
            startstopwatch();
        }

        // call moving function once it exists
    }
}