const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const FRAME_LENGTH = 30
const player : Player = new Player(canvas.width / 9.7, canvas.height - 20);