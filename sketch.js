var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(170, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(580,20);
	star.addImage(starImg);
	star.scale = 0.1;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 450 && starBody.position.y > 450  ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 50;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 50;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}