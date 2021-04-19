// Engine = rule book of physics
const Engine = Matter.Engine
// World = environment ; objects creation
const World = Matter.World
// shapes of objects
const Bodies = Matter.Bodies

var engine, world, ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(400, 390, 800, 50, options)
  World.add(world, ground)

  
}

function draw() {
  background(0);

  Engine.update(engine)
  
  rectMode(CENTER)
  rect (ground.position.x, ground.position.y, 800, 50);
  drawSprites();
}