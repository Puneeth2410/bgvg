const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base;
var bridge;
var stone;

function preload() {
  zombie1 = loadImage("./assets/zombie.png")
  zombie2 = loadImage("./assets/zombie2.png")

  zombie3 = loadImage("./assets/zombie3.png")
  zombie4 = loadImage("./assets/zombie4.png")

  backgroundImage = loadImage("./assets/background.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  zombie = createSprite(width / 2,height -100);
  zombie.addAnimation("lefttoright",zombie1,zombie2,zombie1)
  zombie.addAnimation("righttoleft",zombie3,zombie4,zombie3)
  zombie.scale= 0.1;
  zombie.velocityX= 10;

  breakButton = createButton("");
  breakButton.position(width -200, height /2 -50);
  breakbutton.class("breakbutton");
  breakButton.mousePressed(handleButtonPress);
    
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);
}

function draw() {
  background(51);
  base.show();
  Engine.update(engine);

  for(var i = 0;i <=8; i++) {
  var x= random(width /2 - 200, width/ 2 +300)
   var y= random(-10, 140);
   var stone = new Stone(x,y,80,80)
   Stones.push(stone)
  }

  drawSprites()

}

function handleButtonPress() {
  jointLink.detach();
  setTimeout(() => {
  bridge.break();
     }, 1500);
  }