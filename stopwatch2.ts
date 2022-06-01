
class Stopwatch {
  beginTime : number 
  endTime : number;
  
   
  constructor() {
    this.beginTime = 0;
    this.endTime = 0;
  }

  timeToString(time :number) : string {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }

  start(){
    this.beginTime = Date.now();
    = setInterval(this.getTime, 1000)
  }
  

  stop(){
    this.endTime = Date.now(): 
    

  }

  getTime() {
    elapsedTime = Date.now() - this.beginTime;
    (document.getElementById("display") as HTMLElement).textContent = this.timeToString(elapsedTime);
  }
}
  