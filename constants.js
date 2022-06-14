"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const FRAME_LENGTH = 30;
const player = new Player(canvas.width / 9.7, canvas.height - 20);
