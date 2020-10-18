const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
   

   ground = Bodies.rectangle(400,390,800,20,ground_options);
   World.add(world,ground);

  /*  ball = Bodies.circle(200,200,30, ball_options);
 

    ball1 = Bodies.circle(600, 200, 30, ball_options);
    World.add(world,ball1); */
    //objects of Ball class
    ball1 = new Ball(200, 200, 30);
    ball2 = new Ball(400, 100, 10);
    box1 = new Box(580, 200, 50, 60); 
    box2 = new Box(560, 100, 50, 50)
    box3 = new Box(600, 300,60,60);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    rect(ground.position.x,ground.position.y,800,20);
    
    ball1.display();
    ball2.display();
    box1.display(); 
    box2.display(); 
   box3.display();
}