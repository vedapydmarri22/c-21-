const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var ball 

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(width/2 , 670 , width, 20);
  right = new Ground(1000,600,20,120);
  left = new Ground(800,600,20,120);
  
 var ball_options={
	isStatic: false,
	restitution: 0.3, 
	friction: 0, 
	density: 1.2, 
 }
ball = Bodies.circle(200,100,20,ball_options);
World.add (world,ball)

  
 rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{

  background(51);
  ground.show(); 
  left.show();
  right.show();

  ellipse(ball.position.x, ball.position.y, 20)

  Engine.update(engine);

}

function keyPressed ()
{
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:-55});
}
}


