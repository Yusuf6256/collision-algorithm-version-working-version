var fixedrect, movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 80, 50);
  fixedrect.shapeColor = "Green";
  movingrect =  createSprite(200,100,80,20);
  movingrect.shapeColor = "Green";
}

function draw() {
  background(0,0,0); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2 
    && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 ){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "Green";
    fixedrect.shapeColor = "Green";
  }

  drawSprites();
}