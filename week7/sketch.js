function setup() { 
  createCanvas(900, 1200);
} 

function draw() { 
	background("grey");
	
	var x=100, y=133;
	for (var i=0; i<4;i++) {
	drawWindow(x+200*i,y,100,20);
	drawWindow(x+100*i,y+300,50,7);
	drawWindow(x+300*i,y+600,150,25);
	}
						
}

function drawWindow(x,y,ws,ld){
	noStroke();
			fill("yellow");
			rect(x,y,ws,ws); //top yellow windows
	
			noStroke();
			fill("green");
			rect(x,y+ws,ws,ws); //bottom green windows
		
			
			stroke("black");
			strokeWeight(8);
			noFill();
			rect(x,y,ws,ws*2); // black frames
	
			strokeWeight(5);
			line(x,y+ws, x+ws, y+ws); // black line in the middle of top and bottom windows
			

			 for (i=0; i<=ws/ld; i++) {
			     stroke("white");
			     strokeWeight(2);
			     line(x+ld*i,y,x+ld*i,y+ws*2);
			 } //vertical white lines
			
			 for (i=0; i<=ws/ld;i++) {
			     stroke("white");
			     strokeWeight(2);
			     line(x,y+ld*i*2,x+ws,y+ld*i*2);			
			 } //horizonal white lines
			
			stroke("grey");
			strokeWeight(5);
			noFill();
			ellipse(x+ws/2, y+ws,ld*2,ld*2); //big ellipse in the middle
	
			stroke("grey");
			strokeWeight(3);
			noFill();
			ellipse(x+ws/2, y+ws/2.5,ld,ld); // small ellipse on the top
			
			stroke("grey");
			strokeWeight(3);
			noFill();
			ellipse(x+ws/2, y+ws*2-ws/2.5,ld,ld); //small ellipse at the bottom

			stroke("white");
			strokeWeight(2);
			fill("white");
			quad(x-ld*2,y-ld,x+ws+ld*2,y-ld,x+ws+ld,y,x-ld,y); // quad on the top
			
			stroke("white");
			strokeWeight(2);
			fill("white");
			triangle(x-ld,y,x,y,x,y+ld*3);
			triangle(x+ws,y,x+ws+ld,y,x+ws,y+ld*3);//two triangles below the quad
	

}