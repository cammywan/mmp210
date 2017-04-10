function setup() { 
    createCanvas(1200, 1200);
    background("white");
    noStroke();    

    //variables
    	var numberOfRectangles = 400;
    	var columns = Math.sqrt(numberOfRectangles);
    	var rows = Math.sqrt(numberOfRectangles);
    	var mountainHeight, moutainWidth;
    	var waveSize;
    	var cloudS;//small circle of clouds size
    	var cloudB;//big cicle of clouds size
    	var w = 150;
    	var h = 75;
	var blueMax=255;
	var blueMin=150;
	var start=0;
    	var waveSizeMax=100;
    	var cloudMin=15;
    	var cloudMax=60;
    	var redMax=200;
    	var redMin=50;
    	var greenMin=75;
    	var waveDistance=15;
	var waveMax=120;
	var waveStroke=3;
  
    for (var x = start; x <= width; x += w) {
        for (var y = start; y <= height; y += h) {
            var r,g,b;

       	    if (y < height/3) {
           // random cloud blue color
           r = random(start, redMin);
           g = random(blueMin, blueMax);
           b = random(redMax, blueMax);
           //random cloud size
           cloudS= random(cloudMin, cloudMax);
           cloudB=1.8*cloudS;
           } else if (y > height * 2/3) {
           // random sand color
           r = random(redMax, blueMax);
           g = r;
           b = random(greenMin,blueMin);
	   } else {
          // random ocean color
           r = random(start, blueMin);
           g = random(start, blueMin);
           b = random(blueMin, blueMax);
          // random ocean size
           waveSize= random(start,waveSizeMax);
           }

            
           fill(r,g, b);// color fills            

           if ( y <height * 1/3) {
                // clouds
                noStroke();
                ellipse(x, y, cloudB, cloudB);
                ellipse(x-cloudS,y,cloudS,cloudS);
                ellipse(x+cloudS,y,cloudS,cloudS);

            } else if( y > height * 2/3) {
                // sand
                noStroke();
                fill(r,g,b);
                rect(x,y-h,w,h);
            } else{
                // waves
                noFill();
                stroke(r,g,b);
                strokeWeight(waveStroke);
                for (i=start;i<=waveMax;i+=waveDistance){
                    arc(x,y,waveSize+i,waveSize+i,PI,start);
                		}
			}
		}   
	}
}
