"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//if an arrow key is pressed, the timer will begin to count
function Stopwatch(event) {
    let clickedElm = event.currentTarget;
    playSound(clickedElm.dataset.sound);
}
// document.addEventListener("keyup", (event: KeyboardEvent) => {
//     let elm = document.querySelector(`.drum[data-key='${event.key}']`) as HTMLElement | null
//     if (!elm) {
//         return;
//     }
//     elm.classList.remove("playing");
//   })
