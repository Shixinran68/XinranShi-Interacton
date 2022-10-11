class Bubble{
  constructor(){
        this.x=random(0,width);
        this.y=random(0,height);
        this.r=48;
       this. col=color(255);
       this.lifespan=255;
       
  }


   changeColor(){
    this.col=color(random(255),random(255),random(255));
    };
        
display(){
  stroke(this.col);
  strokeWeight(4);
fill(255,this.lifespan);
  ellipse(this.x, this.y, this.r*2, this.r*2);
 };

intersects(other){
    var d =dist(this.x,this.y,other.x,other.y);
    if(d<this.r+other.r){
     return true;

       
    }else{  
           
      return false;
               
         }
     } 



//   display(){
 
//  translate(this.x, this.y);
//   stroke(0);
// fill(170, 50, 98);
//  ellipse (this.x, this.y, 70, 70);
// fill(80, 70, 50);    
// rect(this.x-20, this.y-10, 10, 5);
//  rect(this.x+9, this.y-10, 10, 5);
// triangle(this.x, this.y+10, this.x-10, this.y+20, this.x+10, this.y+20) 
//   }
//move=function(){
 // this.x=this.x+random(-1,1)
  //this.y=this.y+random(-1,1)
  
  
 move(){
     this.x=this.x+random(-2,2);
     this.y=this.y+random(-2,2);
     this.lifespan=this.lifespan-1
  }

}