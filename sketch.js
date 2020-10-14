var helicopterIMG, helicopterSprite, packageSprite,packageIMG,options,wall1,wall2,wall3,wall1Sprite,wall2Sprite,wall3Sprite;
var packageBody,ground,gameState="static",posState="not";
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    options={
		isStatic:true
	}
	
	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=2;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1Sprite=createSprite(width/2, 650, 120,10);
	wall1Sprite.shapeColor=color("red")
	wall2Sprite=createSprite(width/2-60, 600, 10,80);
	wall2Sprite.shapeColor=color("red")
	wall3Sprite=createSprite(width/2+60, 600, 10,80);
	wall3Sprite.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	wall1 = Bodies.rectangle(width/2, 630, 120,20 , {isStatic:true} );
	World.add(world, wall1);
	wall2 = Bodies.rectangle(width/2-60, 600, 20,80 , {isStatic:true} );
	World.add(world, wall2);
	wall3= Bodies.rectangle(width/2+60, 600, 20,80 , {isStatic:true} );
 	World.add(world, wall3);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  if(posState==="yes"){
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y   
  }
  drawSprites();
 
}

function keyPressed() {
 if (keyDown("space")&&gameState==="static") {
	packageSprite=createSprite(helicopterSprite.x, helicopterSprite.y, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageBody = Bodies.rectangle(helicopterSprite.x, helicopterSprite.y , 3 ,2,{restitution:0.2});
	World.add(world, packageBody);
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	gameState="fall";
	posState="yes";

  }
}



