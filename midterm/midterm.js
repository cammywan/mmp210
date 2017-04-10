function setup() { 
    createCanvas(1200, 1200);
    background("white");
    
    //variables
		noStroke();
    
    var numberOfRectangles = 400;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);
    var mountainHeight, moutainWidth;
    var waveSize;
    var cloudS;//small circle of clouds size
    var cloudB;//big cicle of clouds size
	  var w = 150;
    var h = 75;

  
	   for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            var r,g,b;
            var tempX = x;
            var tempW = w;
            var tempH = h;

        if (y < height/3) {
        // random cloud blue color
        r = random(0, 50);
        g = random(150, 255);
        b = random(200, 255);
        //random cloud size and position
        cloudS= random(15, 60);
        cloudB=1.8*cloudS;
        } else if (y > height * 2/3) {
        // random sand color
        r = random(200, 250);
        g = r;
        b = random(75,150);

        } else {
        // random ocean color
        r = random(0, 100);
        g = random(0, 150);
        b = random(150, 255);

        // random ocean size
            waveSize= random(0,100);
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
                strokeWeight(3);
                for (i=0;i<=120;i+=15){
                    arc(x,y,waveSize+i,waveSize+i,PI,0);
                }

				}
		 }
    
}
}