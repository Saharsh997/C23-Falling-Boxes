const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

/*    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,height,800,10,ground_options);
    World.add(world,ground); */

   /* var circle_options = {
        restitution: 1.2
    }

    circle = Bodies.circle(200, 200, 25, circle_options);
    World.add(world, circle);*/

    //console.log(ground);

    //Create ground object
    ground = new Ground(400, height, 800, 10);

    //Create box objects
    box1 = new Box(200, 350, 100, 50);
    box2 = new Box(250, 150, 75, 100);
}

function draw(){
    background(255);
    Engine.update(engine);

    /*fill("brown");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,10);*/
    fill("brown");
    box1.display();
    box2.display();
    ground.display();
   
    /*ellipseMode(RADIUS);
    ellipse(circle.position.x, circle.position.y, 25, 25)*/
}