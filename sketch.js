const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground;
var slopes=[]

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper = new Paper(100, 350, 60);
    ground = new Ground(400,650,800,10)
    Engine.run(engine);
    slopes.push(new Slope(600,596,20,100))
    slopes.push(new Slope(680,636,150,20))
    slopes.push(new Slope(750,596,20,100))
}


function draw() {
    Engine.update(engine);
    rectMode(CENTER);
    background(0);
    paper.display()
    ground.display();
    for(slope of slopes){
        slope.display()
    }
    drawSprites();
}
function keyPressed() {
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-900})
    }
}

