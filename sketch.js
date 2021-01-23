var starImg, fairyImg, bgImg; 
var fairy , fairyVoice; 
var star, starBody,starOptions,fairyBody; 
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

function preload() { 
  starImg = loadImage("star.png"); 

  fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png"); 

  bgImg = loadImage("starNight.png");  
  
  fairyVoice = loadSound("JoyMusic.mp3");
} 
function setup() { 
  createCanvas(800, 750);

  fairy = createSprite(130,520);
  fairy.addAnimation("fairyflying",fairyImg);
  fairy.scale = 0.25; star = createSprite(width/2,height/2); 

  star.addImage(starImg); star.scale = 0.2; 

  engine = Engine.create(); 
  world = engine.world; 

  starBody = Bodies.circle(650 , 30 , 5 ,{restitution:0.5, isStatic:true}); 
  World.add(world,starBody); 

  //fairyBody = Bodies.rectangle(130,520,100,100,{isStatic:true});
  //World.add(world,fairyBody); 
 
  Engine.run(engine); 
} 
function draw() { 
  background(bgImg);

  fairyVoice.play(); 

  keyPressed(); 

  star.x = starBody.position.x;
  star.y = starBody.position.y; 

  //fairy.x = fairyBody.position.x;
  //fairy.y = fairyBody.position.y;
  
  drawSprites(); 
} 
function keyPressed() { 
  //write code here

   if(keyDown("left_Arrow")) { 
    fairy.x = fairy.x - 4; 
  } 

  if(keyDown("right_Arrow")) { 
    fairy.x = fairy.x + 4; 
  } 

  if (keyDown("down_Arrow")) {
    Matter.Body.setStatic(starBody,false);
  } 

  if(starBody.position.y > 470) {
    Matter.Body.setStatic(starBody,true); 
  }
}