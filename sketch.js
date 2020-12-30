const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, box1, ground, box2;

function setup() {
createCanvas(1200,1000);

engine = Engine.create();
world = engine.world;
var options = {restitution: 1, density: 0.3}
box1 = new Box(600,200,70,70);
ground = new Ground(600,990,1200,20);
box2 = new Box(630,100,100,70);
}

function draw() {
background("black");
Engine.update(engine);
box1.display();
ground.display();
box2.display();
}