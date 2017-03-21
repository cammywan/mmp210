function setup() {
    createCanvas(640,480);   
}

function draw() {
    var distance=50;
	  var green=color("#abdbd3");
    var size=30;
	var x=10;
	var y=10;
	var r,g,b;//variables
	  background(green);
    if (frameCount % 40 == 0) {
      r = random(0,255);
			g = random(0,100);
      b = random(100,255);
}	
	textSize(20);
        text("Cammy", x, y);    
    x += 20;
    if (x > width) {
        x = 0;
    }
    if (x > width/2) {
        y-=20;
    } else {
        y+=20;
    }

	  translate(mouseX, mouseY);
    noStroke();
    fill(r,g,b);
	  rotate(PI*frameCount/120);
	
    ellipse(0,0+distance,size,size);
    ellipse(0-distance,0,size,size);
    ellipse(0+distance,0,size,size);
    ellipse(0,0-distance,size,size);

}
