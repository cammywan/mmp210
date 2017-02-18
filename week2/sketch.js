function setup() {
    createCanvas(1000,800);
    
    // colors
    var beige = color ("#eae7ce");
    var grey = color ("#afaea7");
    var darkgrey = color ("#838483");
    var white = color ("white");
    var purple = color ("#c6b8c6");
    background(beige);
    
    //seizes
    var elispse = 75;
    var x1=500;
    var y1=400;
    var x2=200;
    var y2=100;
    var a = 20;
    var b = 25;
    var c=5;
    var d=0;
    var e = 50;
    var f=PI;
    var str1=4;
    var str2=2;
    
    //drawing
    fill(purple);
    stroke(darkgrey);
    strokeWeight(str1);
    ellipse(x2,y2,elispse);
    
    stroke(darkgrey);
    strokeWeight(str2);
    line(x2, y2, x2, y2-b);
    line(x2, y2, x2+a, y2);
    
    fill(darkgrey);
    noStroke();
    rect(x2, x1+e, x1+y2,a, c);
    
    stroke(darkgrey);
    strokeWeight(str1);
    line(x1,x1+c+e, y1, x1+x2+e);
    line(x1,x1+c+e,x1+y2,x1+x2+e);
    
    noStroke();
    fill(darkgrey);
    rect(y1,y1-a,x2,y2,c,c,d,d);
    
    fill(grey);
    rect(y1,x1-a,x2,b+c,d,d,c,c);
    
    fill(white);
    quad(x1-b,x1+c+c,x1+b,x1+c+c,x1+e,x1+e,y1+e,x1+e);
    
    fill(purple);
    arc(x1+y2,x1+e, b+c,b-c,f,d);
    
    fill(beige);
    triangle(x1,x1+c+c,x1+b,x1+e,x1-b,x1+e);

}