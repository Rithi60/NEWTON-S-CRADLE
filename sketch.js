
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200, 200, 24)
	bob2 = new Bob(240, 200, 24)
	bob3 = new Bob(280, 200, 24)
	bob4 = new Bob(320, 200, 24)
	bob5 = new Bob(360, 200, 24)

	roof1 = new Roof(width/2,100,600,50);

	rope1 = new Rope(bob1.x, bob1.y, roof1.x, roof1.y);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();  
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();
  //rope1.display();
  drawSprites();
 
}



