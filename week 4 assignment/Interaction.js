var bubbles=[];

   function setup(){
    createCanvas(windowWidth, windowHeight);
    
     for (var i=0;i<10;i++){
      bubbles[i]=new Bubble();
     
      mouseDragged=function (){
         bubbles.push(new Bubble());
         } 
         keyPressed= function(){
            bubbles.splice(0,5);
   
   }
    
       
   }
}
   function draw(){
      background(0);
      for (var i=0;i<bubbles.length;i++){
     
    

       bubbles[i].move();
       
       bubbles[i].display();
    for(var j=0;j<bubbles.length;j++){
      if(i !=j && bubbles[i].intersects(bubbles[j])){
      bubbles[i].changeColor();
    bubbles[j].changeColor();
   }
     
   
   }
}
}   