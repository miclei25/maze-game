//make into a function and call this function when one of the arrow keys are pressed

function startstopwatch() {
    const stopwatch = new Stopwatch();
 
    stopwatch.start();
    

    // (amount of time the stopwatch has been running)
}

//if an arrow key is pressed, the timer will begin to count
// function startStopwatch(event : KeyboardEvent): void {
//     let clickedElm = event.currentTarget as HTMLElement;    
//     playSound(clickedElm.dataset.sound as string)
// }
// i think this is for things clicked on the screen but i may be wrong

document.onkeydown = checkKey;
function checkKey(e : KeyboardEvent) {

    e = e || window.event;
    let start : boolean = false

    // if (e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40') {
    if (e.key == 'LeftArrow' || e.key == 'UpArrow' || e.key == 'RightArrow' || e.key == 'DownArrow') {
        console.log ("hey we made it here")
        if (start === false) {
            start = true
            startstopwatch()
        }
        // call moving function once it exists
    }
}