const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  object=Bodies.rectangle(200,100,50,40);
  World.add(world.object);
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background("red");
  Engine.update(engine);  
  rectMode(CENTER);
  rect(object.position.x,object.position.y,40,50)
}