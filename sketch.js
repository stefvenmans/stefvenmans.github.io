
class Shape {
  /* Constructor expects parameters for
  fill color, x and y coordinates that
  will be used to initialize class properties.
  */
  constructor(cColor, x, y, angle, type) {
    this.color = cColor;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = 0;
    this.type = type;
  }

  start(speed) { // method expects parameter!
    this.speed = speed;
  }

  display() { // method!
    fill(this.color);
    switch(this.type){
      case 0: rect(this.x, this.y, 20, 20,2);
        break;
      case 1: triangle(this.x,this.y, this.x-10,this.y+20, this.x+10,this.y+20)
        break;
      case 2: circle(this.x, this.y, 20, 30);
        break;
        
      case 3: quad(this.x, this.y, this.x+10, this.y-10,this.x-20, this.y-20, this.x+50, this.y-30)
        break;
    }
    
  }

  move() { // method!
    this.x += this.speed;
    // Wrap x around boundaries
    if (this.x < -20) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -20;
    }
    this.y += this.speed*this.angle;
    // Wrap x around boundaries
    if (this.y < -20) {
      this.y = height;
    } else if (this.y > height) {
      this.y = -20;
    }
  }
  
  flipAngle(){
    this.angle = this.angle*(-1);
  }
} //end class Car

var w = window.innerWidth;
var h = window.innerHeight;  

const shapes = new Set();

function setup() {
  createCanvas(w, h);

  for(let i=0; i<20; i++){
    shapes.add(new Shape("black", random(0,width), random(0,height), random(-1,1), parseInt(random(-1, 3))));
  }
  
  for (const shape of shapes) {
    shape.start(random(-5,5));
  }
  
}

function draw() {
  background("#03A9F4");
  
  //display and move all 3 Cars
  
  
  for (const shape of shapes) {
    shape.display();
    shape.move();
  }

}
function mouseClicked() {
  for (const shape of shapes) {
    shape.flipAngle();
  }
}

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}
