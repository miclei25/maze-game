"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//make into a function and call this function when one of the arrow keys are pressed
const ts_stopwatch_1 = require("ts-stopwatch");
function stopwatch() {
    const stopwatch = new ts_stopwatch_1.Stopwatch();
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
function checkKey(e) {
    e = e || window.event;
    let start = false;
    // if (e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40') {
    if (e.key == 'Left' || e.key == 'Up' || e.key == 'Right' || e.key == 'Down') {
        if (start = false) {
            start = true;
            stopwatch();
        }
        // call moving function once it exists
    }
}
