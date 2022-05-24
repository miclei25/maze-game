//make into a function and call this function when one of the arrow keys are pressed
import { Stopwatch } from "ts-stopwatch";

function stopwatch() {
    const stopwatch = new Stopwatch();
 
    stopwatch.start();
    // imagine 100 ms worth of code execution
    stopwatch.stop();
    // imagine 100 ms worth of code execution (ignored)
    stopwatch.start();
    // imagine 100 ms worth of code execution
    stopwatch.stop();
    // imagine 100 ms worth of code execution (ignored)
 
    stopwatch.getTime();
    // returns 200
    // (amount of time the stopwatch has been running)
}

//if an arrow key is pressed, the timer will begin to count
// function startStopwatch(event : KeyboardEvent): void {
//     let clickedElm = event.currentTarget as HTMLElement;    
//     playSound(clickedElm.dataset.sound as string)
// }
// i think this is for things clicked on the screen but i may be wrong

document.onkeydown = checkKey;
function checkKey(e) { // idk what e is? i think there's an error bc typescript needs a type annotation

    e = e || window.event;

    if (e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40') {
        // left, up, right, down arrows in that order
        stopwatch()
    }

    // don't need to call each arrow separately i think
    // else if (e.keyCode == '40') {
    //     // down arrow
    //     stopwatch()
    // }
    // else if (e.keyCode == '37') {
    //    // left arrow
    //     stopwatch()
    // }
    // else if (e.keyCode == '39') {
    //    // right arrow
    //     stopwatch()
    // }

    // there will also be a moving function that we'll call
    // also! it only needs to call the stopwatch the first time one of the keys is pressed? or the stopwatch will start restarting?

}
