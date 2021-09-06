var bg,bgImg;

function preload(){
bgImg = loadImage("assets/bg.png")
}

function setup(){
  createCanvas(400,400);
 bg=createSprite(165,485,1,1)
 bg.addImage(bgImg)
 bg.scale=1.3

}


function draw(){
 drawSprites()
}
