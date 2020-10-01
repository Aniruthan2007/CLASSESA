const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ball;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //var props2= {
        //sStatic: true

   // }
    //ground = Bodies.rectangle(200,390,400,20, props2);
    //World.add(world,ground);
    ground = new Ground(200,390,400,20);


    box1 = new Box(200,300,50,50);
    box2 = new Box(300, 100, 20, 20);
    
    //var props = {
//restitution: 1.0
//}

    //ball = Bodies.circle(200,200,20,props);
    //World.add(world,ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
   
}