function setup() {
    var a=500;
    var b=8;
    var c=153;
    var d=228;
    var e=230;
    var f=304;
    var g=19;
    var h=272;
    var i=117;
    var j=380;
    var k=200;
    var l=102;
    var m=105;
    var n=2;
    var o=316;
    var p=470;
    var q =370;
    var r=275;
    var s=1;
    
    var grey=color("#939598 ");
    var pink = color("#DB9595");
    
    var x="C";
    var y="N";
    var z="Arial";
 
    createCanvas(a,a);
  
   fill(grey);  
    noStroke();
    textSize(s);
    text(x,g+n+n, e);
    textFont(z); //"letter "C""
    
    triangle(c,c,c+g,d,c-g,d);
    triangle(c+g,c,c+g+g,d,c,d);
    triangle(h-g,c,h+g,c,h,d);
    triangle(j,e,j+g,f,j-g,f); //grey triangles
    
    fill(pink);
    triangle(i,c,i+g,d,i-g,d);
    triangle(e-g,c,e,d,e-g-g,d);
    triangle(e,c,e+g,d,e-g,d);
    triangle(k+i-g,e,k+i+g,e,k+i,f);
    triangle(k+i,e,k+i+g+g,e,k+i+g,f); // pink triangles
    
    fill(pink);  
    noStroke();
    textSize(m);
    textFont(z);
    text(y,k+l+m, f); // letter "N"
    
    
    strokeWeight(b);
    stroke(grey);
    line(m+n,k,c-g-b,k);
    line(b+f+n+n,h-k,e,k+k-b);
    line(b+g+n,e,p,e); //horizonal stroke
   
    strokeWeight(b);
    stroke(pink);
    line(q,r,q+g,r); 
    // vertical stroke
}
