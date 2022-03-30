// 14 spaces with a gap value of 5 degrees total
let ringAngle = 180 / 7;
let ringStart = -90 / 7 + 2.5;
let ringEnd = 90 / 7 - 2.5;

function setup() {
  // tbd on screen rez
  createCanvas(400, 480);
  // probably staying black
  background(123);
}

function draw() {
  // degrees cause radians annoy me
  angleMode(DEGREES);
  // strokes only
  noFill();
  // thiccness and colour
  strokeWeight(1);
  stroke(255);
  // draw those arcs yo
  arc(width / 2, height / 2, width, height, ringStart, ringEnd);
  arc(width / 2, height / 2, width/2, height/2, ringStart, ringEnd);
  // increment those hot arcs
  ringStart = ringStart + ringAngle;
  ringEnd = ringEnd + ringAngle;
}

// new code from the p5js discord

/*
let segment = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // lines only
  noFill();
  stroke(0);
  strokeWeight(1);
  if (segment < 28) {
    // outer arc
    arc(
      width / 2,
      height / 2,
      // border the edge
      width,
      height,
      segment * TWO_PI / 28,
      (segment + 1) * TWO_PI / 28
    );
    // inner arc
    arc(
      width / 2,
      height / 2,
      // half the size of the outer arc
      width / 2,
      height / 2,
      segment * TWO_PI / 28,
      (segment + 1) * TWO_PI / 28
    );
    // increment arcs
    segment += 2;
  }
  let angle = TWO_PI;
  let pointCount = 28;
  for (let i = angle; i < TWO_PI + angle; i += TWO_PI / pointCount) {
    let x1 = (width / 2) * Math.cos(i) + width / 2;
    let y1 = (height / 2) * Math.sin(i) + height / 2;
    let x2 = (width / 4) * Math.cos(i) + width / 2;
    let y2 = (height / 4) * Math.sin(i) + height / 2;
    //stroke(0, 255, 0);
    strokeWeight(1);
    line(x1, y1, x2, y2);
  }
}
*/
