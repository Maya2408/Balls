const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;
var ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);
   
    var option={
        restitution: 1.0
    }

   ball = Bodies.circle(200, 100, 20, option);
    World.add(world,ball);

    var option={
        restitution:2
    }

    ball2 = Bodies.circle(100, 50, 20, option);
      World.add(world,ball2);


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("yellow")
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,50);
    fill("cyan");
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 50, 50);
    fill("white");
    ellipseMode(RADIUS);
    ellipse(ball2.position.x, ball2.position.y, 45, 45);
}