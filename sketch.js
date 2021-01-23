var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  drawSprites();

}

function keyPressed() {
	//write code here
	if (isKeyPressed("up")) {
		moveInDirection(this_sprite, 5, "North");
	  }
	  if (isKeyPressed("down")) {
		moveInDirection(this_sprite, 5, "South");
	  }
	  if (isKeyPressed("left")) {
		moveInDirection(this_sprite, 5, "West");
	  }
	  if (isKeyPressed("right")) {
		moveInDirection(this_sprite, 5, "East");
	  }
}

function driving_with_arrow_keys(this_sprite) {
	if (isKeyPressed("up")) {
	  moveForward(this_sprite, 5);
	}
	if (isKeyPressed("down")) {
	  moveBackward(this_sprite, 5);
	}
	if (isKeyPressed("left")) {
	  changePropBy(this_sprite, "direction", -5);
	  changePropBy(this_sprite, "rotation", -5);
	}
	if (isKeyPressed("right")) {
	  changePropBy(this_sprite, "direction", 5);
	  changePropBy(this_sprite, "rotation", 5);
	}
	if (isTouchingEdges(this_sprite)) {
	  edgesDisplace(this_sprite);
	}
  }
