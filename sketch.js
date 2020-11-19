var movingrect
var fixedrect

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(200, 200, 50, 50);
  fixedrect=createSprite(200,200,50,50);
  movingrect.shapeColor="red" ;
  fixedrect.shapeColor="red" ;
}

function draw() {
  background(255,255,255);
  movingrect.x = mouseX
  movingrect.y = mouseY

  if (movingrect.isTouching(fixedrect)) {
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
    else{
      movingrect.shapeColor="red";
      fixedrect.shapeColor="red";
    }
  
  drawSprites();
}
















































































