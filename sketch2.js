let font,
  fontsize = 75;

let mov = 0;
let dir = 0;

let osc, fft;

//function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
//  font = loadFont('assets/SourceSansPro-Regular.otf');
//}

var w = window.innerWidth;
var h = window.innerHeight;  

function setup() {
  createCanvas(w, h);
  textFont('Avenir');
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  
  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  background("#FFEB3B");
  textAlign(CENTER);
  drawWords(width * 0.5);
  if(dir == 0){
    mov += 0.1
    if (mov > 5){
    dir = 1;
    }
  }
  else{
    mov -= 0.1
    if (mov < -5){
    dir = 0;
    }
  }
  
  let freq = map(mouseX, 0, width, 40, 100);
  osc.freq(freq);

  let amp = map(mouseY, 0, height, 0.5, 0.01);
  osc.amp(amp);
  //drawWords(width * 0.51);
}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(255)
  text('STEF VENMANS', x+ mov, h/2-30+mov);
  strokeWeight(5);
  stroke("#2D80A5");
  
  fill(255);
  text('STEF VENMANS', x+mov*2, h/2-30+mov*2);
  strokeWeight(3.5);
  stroke("#2A87B1");
  
  fill(255);
  text('STEF VENMANS', x+mov*3, h/2-30+mov*3);
  strokeWeight(3.5);
  stroke("#86D0F1");
  
  fill(255);
  text('STEF VENMANS', x+mov*4, h/2-30+mov*4);
  strokeWeight(3.5);
  stroke("#7FCEF1");
  
  fill(255);
  text('STEF VENMANS', x+mov*5, h/2-30+mov*5);
  strokeWeight(5);
  stroke("#0F76A5");
  
  fill(255);
  text('STEF VENMANS', x+mov*6, h/2-30+mov*6);
  strokeWeight(3.5);
  stroke("#1CA9E9");
  
  fill(255);
  text('Software Engineer', x+mov*6, h/2+50);
  strokeWeight(3.5);
  stroke("#1CA9E9");
}

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}
