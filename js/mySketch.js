var canvas_width = screen.width / 2;
var canvas_height = screen.height / 2;
var padding = 10;
var line_count = 15;
var spacing = (canvas_width - 2*padding )/(line_count-1);
let angle =0;
let erase = true;
var inc =0.12; //how clustered the white space is
var thr = 0.75; //how much white space
var yoff= 0;
var xoff=0;
var re=255;
var blu=255;

function setup() {
  if(canvas_width > 400){
    canvas_width = 400;
    canvas_height = 400;
  }
  var canvas = createCanvas(canvas_width, canvas_height);
  canvas.parent('sketch-holder');
  angleMode(DEGREES);
  background(255);
  strokeWeight(3);
  make();

}

function draw() {
 
}

function mouseWheel() {
  make();
}

function make() {
  clear();
  for (i=0;i<=line_count-1; i++)
  {
    var xoff=0;
    for (j=0;j<=line_count-3; j++)
    {
      noiseDetail(5, 0.9);
      var r=noise(xoff,yoff);
      xoff+=inc;
        if (r<=thr)
        {
					erase = true;
        }
      else{erase = false;}
      if(!erase)
      {

        push();
        var a = randomGaussian(0, 35);
        var x1 = padding+i*spacing;
        var y1 = padding+j*spacing;
        translate(x1, y1+spacing);
        rotate(a);
        re=map(a,0,35,0,255);
        blu=255-map(a,0,35,0,255);
        stroke(re,0,blu, re);
       // stroke(0,re); //black and white
        line(0, -spacing*0.9, 0, spacing*0.9);
        pop();
      }
    }
    yoff+=inc;
  }
}