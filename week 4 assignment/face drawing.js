function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(139,123,139);


//frog
//face
  stroke(0);
  fill(0,255,127);     
  ellipse (200, 200, 140, 110);

//eyes
  stroke(0);
  fill(255);
  ellipse(170, 170, 60, 60);
  ellipse(230, 170, 60, 60);
  fill(0);
  ellipse(170, 180, 20, 30);
  ellipse(230, 180, 20, 30);

//mouth
  stroke(139,71,137);
  fill(255, 0, 0);
  arc(200, 210, 70, 70, 0, PI, QUARTER_PI);


//cat
//face
  fill(0);     
  ellipse (400, 300, 120, 110);
  stroke(0);
  fill(0);
  triangle(380, 220, 320, 255, 370, 255);
  fill(255);
  arc(400, 300, 120, 110, QUARTER_PI, PI-QUARTER_PI)

//eye



let rad = 30; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 4; // Speed of the shape
let yspeed = 6; // Speed of the shape

let xdirection = 2; // Left or Right
let ydirection = 2; // Top to Bottom

function setup() {
  createCanvas(720, 400);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 4;
  ypos = height / 4;
}

function draw() {
  background(102);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}



} 