var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
  monkey=createSprite(20,30,50,20);
  monkey.addAnimation(monkey_running);

  ground=createSprite(400,400,20,10);
  ground.velocityX= -4;
  console.log(ground.x);
  
   var FoodGroup=new Group();
  var obstacleGroup=new Group();
  
}


function draw() {
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
if(keyDown("space")&& monkey.y>=100) {
  monkey.velocityY=-12;
}
  obstacleGroup();
  FoodGroup();
  drawSprites();
  
}

function obstacleGroup() {
  if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
    obstacleGroup.lifetime=300;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacleGroup.add(obstacle);
  }
  }

function FoodGroup(){
  if (frameCount % 300 === 0){
   var banana= createSprite(600,165,10,40);
   banana.velocityX = -(6 + score/100);
    FoodGroup.lifetime=300;
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    FoodGroup.add(banana);
  }
}