let font,
  fontsize = 75;

let mov = 0;
let dir = 0;

let mov2 = 5;
let dir2  = 0

let osc, fft;

let t1 = 0.1; // attack time in seconds
let l1 = 0.7; // attack level 0.0 to 1.0
let t2 = 0.3; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0

let env;

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
  osc.amp(0.2);

  fft = new p5.FFT();
  filter = new p5.LowPass();
  osc.connect(filter);
  //filter.freq(10000);
  
  osc.freq(50);
  env = new p5.Envelope(t1, l1, t2, l2);
}

function draw() {
  background("#FFEB3B");
  
  stroke("#195A78");
  strokeWeight(1);
  for(let i=0; i<20; i++){
  line(0,h/2-40+100-i*mov2,w,h/2-140+100-i*mov2*mov2);
  }
  for(let i=0; i<20; i++){
  line(0,h/2-40+100+i*mov2*mov2,w,h/2-140+100+i*mov2);
  }
  
  if(dir2 == 0){
    mov2 += 0.01
    if (mov2 > 9){
    dir2 = 1;
    }
  }
  else{
    mov2 -= 0.01
    if (mov2 < 5){
    dir2 = 0;
    }
  }
  
  
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
  //stroke("#195A78");
  //fill("#195A78");
  //rect(w/2-30,h/2+90,60,30,5)
  //strokeWeight(3.5);
  //stroke(255);
  //fill(255);
  //textSize(20);
  //text('C V', w/2, h/2+108);
  //strokeWeight(3.5);
  //stroke("#2A87B1");
  //textSize(fontsize);
  
  
  
  let freq = map(mouseX, 0, width, 10, 10000);
  osc.freq(freq/50);
  //print(freq)
  filter.freq(freq);

  let amp = map(mouseY, 0, height, 0.2, 0.01);
  //osc.amp(amp);
  //osc.filter
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
  textSize(67);
  text('Software Engineer', x+mov*6, h/2+50);
  strokeWeight(3.5);
  stroke("#1CA9E9");
  textSize(fontsize);
}

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}

function mousePressed() {
  osc.start();
  env.play(osc);
    if(mouseX>w/2-30 && mouseX<w/2+30 && mouseY>h/2+90 && mouseY<h/2+90+30){
      
    }
}
