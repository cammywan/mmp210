function setup() {
  createCanvas(800, 800);
  
   fill('#fcf9c7');  
    noStroke();
    ellipse(400,200, 150, 180);
    
   fill('#efeabf');  
    noStroke();
    rect(340, 160, 50, 30, 20);
    rect(410, 160, 50, 30, 20);
    
   stroke('white');
    strokeWeight(3);
    line(390, 175, 410, 175);
    
    var c = color('#f94d4d');
   fill(c);  // Use 'c' as fill color
   noStroke();
    arc(400, 240, 80, 60, 0, PI, CHORD);
     
   fill('#4c2e2c');  
   noStroke();
    quad(400,110,345,120,250,290,320,280);
     quad(400,110,455,120,550,290,480,280);
    
   fill('#ffe387');  
   noStroke();  
    quad(320,320,480,320,435,430,365,430);
    
   fill('#f94d4d');  
   noStroke();  
    quad(290,565,510,565,435,445,365,445);
    
   fill('#fcf9c7');  
    noStroke();
   rect(360, 580, 30, 140);
    rect(415, 580, 30, 140);
    rect(310, 340, 25, 120);
    rect(465, 340, 25, 120);
}