var ship1, ship2 

function preload(){
ship2 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
 ship1 = createSprite(200,200);
 ship1.addAnimation("boat",ship2);
  
}

function draw() {
  background("blue");
    drawSprites();
  ship1.scale = 0.3;

 
}
