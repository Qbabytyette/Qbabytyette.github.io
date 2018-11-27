function setup() {
    createCanvas(500, 500, WEBGL);
  }
  
  function draw() {
    background(23);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(60);
      if (mouseIsPressed){
      fill(color(rndC()));
  box(60);
          box(mouseX, mouseY, 80, 80);
  }
  
  
  function rndC() {
    let r = random(0,256)
    let g = random(0,256)
    let b = random(0,256)
    return color(r,g,b)
    }
  
   function drawSphere() {
       rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(60);
  }
  
  function drawTransform(){
  if (keyIsPressed === true) {
      box(60);
    } else {
      sphere(60);
    }
  
    print(mouseIsPressed);
  }
  
  function moveBox(){
      box(CENTER);
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(millis() / 1000, 25));
    box(60);
  }
  moveBox()
  drawTransform()
  
  }