let canvasElement = document.querySelector("#wave");
let c = canvasElement.getContext("2d");

canvasElement.width = canvasElement.offsetWidth;
canvasElement.height = canvasElement.offsetHeight;

let cw = canvasElement.width;
let ch = canvasElement.height

let xspacing = 10;
let yspacing = 10;

let columns = canvasElement.width / xspacing;
let t = 0;

noise.seed(Math.random());

function wave(x, y) {
  let amplitude1 = 2;
  let amplitude2 = 12;
  return (Math.sin(x/10)*amplitude1) + (ch/yspacing/2) + (noise.simplex2((t/100)+x/20,1)*amplitude2)
}

function draw() {
  c.clearRect(0,0,canvasElement.width, canvasElement.height);
  c.fillStyle = "#ffffff";
  for(var i = 0; i < columns; i++) {
    for(var j = 0; j < wave(i,j); j++) {
      c.fillRect(i*xspacing, canvasElement.height - (j*yspacing), 2, 2);
    }
  }
  t++;
  requestAnimationFrame(draw);
}

draw();
