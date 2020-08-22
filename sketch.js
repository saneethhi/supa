
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(400,100);
  dustbin = createSprite(400,650,300,100);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.collide(dustbin);

  drawSprites();
 
}



