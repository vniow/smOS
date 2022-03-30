let x = 200;
let y = 200;
let xCanvas;


function setup() {
  createCanvas(400, 400);
  xCanvas = createGraphics(400, 400);
  xCanvas.clear();
  background(0);
}

function draw() {
  image(xCanvas, 0, 0);
  // no trails
  // background(0);
  x += random(-5, 5);
  y += random(-5, 5);
  fill(255, 200, 0);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);

  // trails
  if (mouseIsPressed) {
    fill(255, 150);
    noStroke();
    xCanvas.ellipse(mouseX, mouseY, 60, 60);

  }
}


/*
// thing that could be a hot cold a/c heating interface thing


let r = 0;
let g = 0;
let b = 0;
let col = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  map(mouseY, 0, height, 0, 255);
  // background
  //  col = map(mouseY,0,width,0,255);
  r = map(mouseY, 0, height, 255, 0);
  b = map(mouseY, 0, height, 0, 255);

  // r = 255, 0, 0
  // g = 0, 255, 0
  // b = 0, 0, 255

  //r = map(mouseY, 0, height, 0, stop2, [withinBounds])




  background(r, 0, b);
  // ellipse
  //  fill(250, 118, 222);
  //  ellipse(mouseX, 200, 64, 64);

}

function keyTyped() {
  if (key === 'w') {
    a
    value = 255;
  } else if (key === 's') {
    value = 0;
  }
  // uncomment to prevent any default behavior
  // return false;
}
*/
