function setup() { 
  createCanvas(900, 1200);
} 

function draw() { 
    var grey=color('#bcbec0');
	var lightGreen=color('#a8d2c7');
	var darkGreen=color('#92ada5');
	var black=color('#58595b');
	var white=color('#f9f9f2');
	var ivory=color('#dcdbd1');
	var wh=height/3; //window height
	var ww=width/3; //window width
	var ws=100; //window size
	var ld=20; //line distance
	
	
	background(grey);
	
  for (var x=ww/3; x<width; x+=ww) {
		for (var y=wh/3; y<height; y+=wh) {
									
			noStroke();
			fill(lightGreen);
			rect(x,y,ws,ws);
	
			noStroke();
			fill(darkGreen);
			rect(x,y+ws,ws,ws);
		
			
			stroke(black);
			strokeWeight(8);
			noFill();
			rect(x,y,ws,ws*2);
	
			strokeWeight(5);
			line(x,y+ws, x+ws, y+ws);
			

			 for (i=0; i<=ws/ld; i++) {
			     stroke(white);
			     strokeWeight(2);
			     line(x+ld*i,y,x+ld*i,y+ws*2);
			 }
			
			 for (i=0; i<=ws/ld;i++) {
			     stroke(white);
			     strokeWeight(2);
			     line(x,y+ld*i*2,x+ws,y+ld*i*2);			
			 }
			
			stroke(ivory);
			strokeWeight(5);
			noFill();
			ellipse(x+ws/2, y+ws,ld*2,ld*2);
	
			stroke(ivory);
			strokeWeight(3);
			noFill();
			ellipse(x+ws/2, y+ws/2.5,ld,ld);
			
			stroke(ivory);
			strokeWeight(3);
			noFill();
			ellipse(x+ws/2, y+ws*2-ws/2.5,ld,ld);

			stroke(white);
			strokeWeight(2);
			fill(white);
			quad(x-ld*2,y-ld,x+ws+ld*2,y-ld,x+ws+ld,y,x-ld,y);
			
			stroke(ivory);
			strokeWeight(2);
			fill(ivory);
			triangle(x-ld,y,x,y,x,y+ld*3);
			triangle(x+ws,y,x+ws+ld,y,x+ws,y+ld*3);
		}
	}
	
	
}
