var ship
var sea
function preload(){
seaI=loadImage("sea.png")
ship1A=loadAnimation("ship-1.png","ship-2.png","ship3.png","ship4.png")
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(130,200,30,30)
  ship.addImage("movingShip",ship1A)
  ship.scale=0.25

  sea=createSprite(400,200)
  sea.addImage(seaI)
  sea.scale=0.3
  sea.velocityX=-5
}

function draw() {
  background("blue");
 drawsprites()

}