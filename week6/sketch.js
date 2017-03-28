   var distance=50;
   var green;
   var size=30;
    var x=10;
    var y=10;
    var r,g,b;
//variables
    
function setup() {
	createCanvas(640,480); 
	green=color("#abdbd3 ");
	textFont("Verdana");
	textSize(50);
}

function draw() {
	background(green);
	var size=30;

       if (frameCount % 40 == 0) {
       r = random(0,255);
       g = random(0,100);
       b = random(100,255);
       }// color change  

 
       stroke("white");
       strokeWeight(3);
       for (var i=0; i<=y; i++){
       text ("Cammy", width/2, i);
       text ("MMP200",x,i)
}
       y+=1; //loop for text
       if (y>height) {
       y=0  } //text
	
       noStroke();
       fill(r,g,b);
       ellipse(mouseX-150,mouseY, x+frameCount%50,x+frameCount%50);
       ellipse(mouseX+150,mouseY, x+frameCount%50,x+frameCount%50);// two circles that change size
	
       translate(mouseX, mouseY);
       rotate(PI*frameCount/120);
       ellipse(0,0+distance,size,size);
       ellipse(0-distance,0,size,size);
       ellipse(0+distance,0,size,size);
       ellipse(0,0-distance,size,size); // four circles that rotate
	


}
