function setup() {
    createCanvas(640,480);   
}

function draw() {
    var start=255;
    var blue=color("#123456");
    var distance=50;
    var size=30;
	var time=frameCount%255;//variables
	
    background(blue);
    
    noStroke();
    fill(time,start,start);
    ellipse(mouseX,mouseY+distance,size,size);
       
    fill(start,time,start);
    ellipse(mouseX-distance,mouseY,size,size);
       
    fill(start,start, time);
    ellipse(mouseX+distance,mouseY,size,size);   //three dots
}
