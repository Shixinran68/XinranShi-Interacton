let array = []
let x = 10;
let y = 20;
//let r=0;
//let b=255;

function setup(){
    createCanvas(windowWidth,windowHeight);
    for (let i =0; i<5; i++){
      array.push(new Body(mouseX, mouseY));
    }
  }
function draw (){
  background(0);

for (let i = 0; i<5; i++){
  array[i].display();
}
}
 
   //function draw(){
   //map(新参数，新参数的最小值，先参数的最大值，映射参数的最小值，映射参数的最大值)
   //r=map(mouseX, 0, windowWidth, 0, 255);
   //b=map(mouseY, 0, windowHeight, 255, 0);
   //background(r,100,b);
   //fill(250,118,222);
   //ellipse(mouseX, mouseY, 80, 80)
    
   //embarrassing face
   class Body{
   constructor() {
    this. x = mouseX;
    this. y = mouseY;

    this. r = random (100, 300);
    this. g = random (50, 200);
    this. b = random (20, 230);
  }
    display(){
      push();
    translate(this.x, this.y);
    stroke(0);
  fill(170, 50, 98);
    ellipse (80, 100, 70, 70);
   fill(80, 70, 50);    
   rect(60, 90, 10, 5);
   rect(89, 90, 10, 5);
   triangle(80, 110, 70, 120, 90, 120) 

   //fill(170, 50, 98);
    //ellipse (this.x+30, this.y+50, 70, 70);
   //fill(80, 70, 50);    
   //rect(this.x+10, this.y-40, 10, 5);
   //rect(this.x+39, this.y+40, 10, 5);
   //triangle(this.x+30, this.y+60, this.x+20, this.y+70, this.x+40, this.y+70) 
    }
    }
  






   // function mousePressed(){
   //     background(0,0,0);

   // }