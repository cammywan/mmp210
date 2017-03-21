function setup() {
    createCanvas(640,480);   
}

function draw() {
    var distance=50;
	  var green=color("#abdbd3");
    var size=30;
	var x=10;
	var y=10;
		var z = random(0,200);
    var r,g,b;//variables
	
    background(green);
	
    if (frameCount % 40 == 0) {
      r = random(0,255);
			g = random(0,100);
      b = random(100,255);
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