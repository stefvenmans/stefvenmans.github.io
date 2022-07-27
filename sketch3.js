
let circles1;
let circles2;
let circles3;
let circles4;

let one8 = 0;
let one4 = 0;
let one5 = 0;
let one7 = 0;
 
let monoSynths;


function setup() {
  createCanvas(400, 400);
  
  circles1 = new Array(8);
  for(let i=0; i<8; i++){
    circles1[i] = new MovingCircle(100,100,15,50,(PI/4)*i+PI/2);
  }
  
  circles2 = new Array(4);
  for(let i=0; i<4; i++){
    circles2[i] = new MovingCircle(300,100,15,50,(PI/2)*i+PI/2);
  }
  
  circles3 = new Array(5);
  for(let i=0; i<5; i++){
    circles3[i] = new MovingCircle(100,300,15,50,(2*PI/5)*i-PI/2);
  }
  
  circles4 = new Array(2);
  for(let i=0; i<2; i++){
    circles4[i] = new MovingCircle(300,300,15,50,(PI)*i+PI/2);
  }
  
  frameRate(50);
  
  
  monoSynths = new Array(4);
  for(let i=0; i<4; i++){
    monoSynths[i] = new p5.MonoSynth();
  }
  
}

function draw() {
  background(255);
  noFill();
  stroke(3)
  circle(100,100,100)
  for (const c of circles1) {
    c.display();
  }
  
  if(one8 == 0){
    playSynth('G4',0);
  }
  one8++;
  if(one8 == 25){
    one8 = 0;
  }
  
  noFill();
  stroke(3)
  circle(300,100,100)
  for (const c of circles2) {
    c.display();
  }
  
  if(one4 == 0){
    playSynth('G3',1);
  }
  one4++;
  if(one4 == 50){
    one4 = 0;
  }
  
  noFill();
  stroke(3)
  circle(100,300,100)
  for (const c of circles3) {
    c.display();
  }
  
  if(one5 == 0){
    playSynth('B4',2);
  }
  one5++;
  if(one5 == 40){
    one5 = 0;
  }
  
  noFill();
  stroke(3)
  circle(300,300,100)
  for (const c of circles4) {
    c.display();
  }
  
  if(one7 == 0){
    playSynth('D4',3);
  }
  one7++;
  if(one7 == 100){
    one7 = 0;
  }
  
  
}

class MovingCircle{
  
  constructor(x,y,r,cR,alph){
    this.x = x;
    this.y = y;
    //this.r = r;
    this.alph = alph;
    
    this.cX = new Array(200);
    this.cY = new Array(200);
    this.r = new Array(200);
    
    this.frameCounter = 0;
    this.cR = cR;
    
    for(let i=0; i<200; i++){
      this.cX[i] = cos((2*PI/200)*i+this.alph)*this.cR + this.x;
      this.cY[i] = sin((2*PI/200)*i+this.alph)*this.cR + this.y;
      //print(sin((2*PI/200)*i+this.alph))
      if(sin((2*PI/200)*i+this.alph)<0){
        this.r[i] = r - 10*sin((2*PI/200)*i+this.alph)*sin((2*PI/200)*i+this.alph)*sin((2*PI/200)*i+this.alph)
      }
      else this.r[i]= r;
      
    }
  }
  
  display(){
    fill([255,0,0,100]);
    noStroke();
    circle(this.cX[this.frameCounter],this.cY[this.frameCounter],this.r[this.frameCounter]);
    this.frameCounter++;
    if(this.frameCounter == 200) this.frameCounter = 0;
  }
  
  getFrameCount(){
    return this.frameCounter;
  }
}

function playSynth(note,synth) {
  userStartAudio();

  //let note = 'G4';
  // note velocity (volume, from 0 to 1)
  let velocity = 0.2
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;
  monoSynths[synth].play(note, velocity, time, dur);
  
}

