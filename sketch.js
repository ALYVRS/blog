let shape;



function preload(){
  shape = loadModel('/asserts/output.obj' , true);
}

function setup() {
  createCanvas(400, 400, WEBGL);
}


function draw() {
  background(255);
  
  
  
  model(shape)
orbitControl();
}