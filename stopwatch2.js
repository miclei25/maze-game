"use strict";
class Stopwatch {
    constructor() {
        this.beginTime = 0;
        this.endTime = 0;
        this.savedInterval = 0;
    }
    timeToString(time) {
        console.log(time);
        let diffInHrs = time / 3600000;
        let hh = Math.floor(diffInHrs);
        let diffInMin = (diffInHrs - hh) * 60;
        let mm = Math.floor(diffInMin);
        let diffInSec = (diffInMin - mm) * 60;
        let ss = Math.floor(diffInSec);
        let diffInMs = (diffInSec - ss) * 100;
        let ms = Math.floor(diffInMs);
        let formattedMM = mm.toString(); //.padStart(2, "0");
        let formattedSS = ss.toString(); //.padStart(2, "0");
        let formattedMS = ms.toString(); //.padStart(2, "0");
        return `${formattedMM}:${formattedSS}:${formattedMS}`;
    }
    start() {
        this.beginTime = Date.now();
        this.savedInterval = setInterval(() => {
            this.getTime();
        }, 95);
    }
    stop() {
        this.endTime = Date.now();
        clearInterval(this.savedInterval);
    }
    getTime() {
        let elapsedTime = Date.now() - this.beginTime;
        document.getElementById("displayTimer").textContent = this.timeToString(elapsedTime);
    }
}
