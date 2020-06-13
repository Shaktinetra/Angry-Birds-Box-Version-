const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, pig1, log1, log2, pig2, log3, log4;
var box1, box2, ground, box3, box4, box5, bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create()
    world = engine.world;

    ground = new Ground(width/2, height, width, 20);

    box1 = new Box(700, 355, 70, 70);
    box2 = new Box(920, 355, 70, 70);
    box3 = new Box(700, 265, 70, 70);
    box4 = new Box(920, 265, 70, 70);
    box5 = new Box(810, 175, 70, 70);

    pig1 = new Pig(810, 365);
    pig2 = new Pig(810, 275);

    log1 = new Log(810, 310, 300, PI/2);
    log2 = new Log(810, 220, 300, PI/2);
    log3 = new Log(735, 120, 120, PI/4);
    log4 = new Log(870, 120, 120, 3*PI/4);

    bird1 = new Bird();
}

function draw(){
    background(0);

    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    pig2.display();
    
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}
