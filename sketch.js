var monster,monsterimg,jail,jailimg,virus,virusimg,maze,jaildoor,jaildoorimg
var palace1,palace1img,palace2,palace2img,rocket,rocketimg,rocketmoving,rocketmovingimg
var space1,space1img,space2,space2img,space3,space3img,space4,space4img,space5,space5img
var gamestate=""

function preload() {
  monsterimg=loadImage("images/monster3.png")
  jailimg=loadImage("images/jail.jpg")

}



function setup() {
  createCanvas(windowWidth,windowHeight);
  scene=createSprite(400,height/2,1500,1500)
  scene.addImage(jailimg)
  scene.scale=1.9
  monster=createSprite(400, 590, 50, 50);
  monster.addImage(monsterimg)
  monster.scale=0.4
  ground=createSprite(400,600,width,40)
  ground.x=ground.width/2
  ground.visible=false
  scene.x=scene.width/2
  
  
}

function draw() {
  background(255,255,255);
  
    if(keyDown("UP_ARROW")){
      gamestate="play"
      
    }
    if(gamestate==="play"){
      //monster.velocityX=3
      ground.velocityX=-2
      scene.velocityX=-2
      if(scene.x<0){
        scene.x=scene.width/2
      }
      if(ground.x<0){
        ground.x=ground.width/2
      }
    if(keyDown("space")){
      monster.velocityY=-10
      

    }
    monster.velocityY=monster.velocityY+0.8

    }
    monster.collide(ground)
  drawSprites();
    
  fill("black")
  textSize(20)
  text("PRESS UP ARROW TO RELEASE THE MONSTER",200,100)
}

function spawnvirus() {
  var virus=createSprite(Math.round(random(width,height)))
}