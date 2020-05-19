const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score = 0;
s = 0

let ele;

function preload() {
    backgroundImg = loadImage("sprites/back.jpg");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ele = createAudio('Pokemon-Theme-Song (1).mp3');

  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.
  ele.autoplay(true);

 

  

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(10);

    textSize(20);
    score = round(frameCount/15);
    text(score,1000,50);
    text("SCORE",920,50);

    s= round(frameCount/16);
    text("TIME"+s,1000,90);

    if(s>65){
        text("You LOSE :(",600,200);
    }

    stroke('Yellow');
    
    text("Pokemon Catch'EM All",600,50);

    stroke('Yellow');
    text("Press any key to replay",600,90);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    let poke = ['sprites/pokeball1.png','sprites/pokeball2.png','sprites/pokeball3.png','sprites/pokeball4.png'];
    bird.image = loadImage(random(poke));
}
