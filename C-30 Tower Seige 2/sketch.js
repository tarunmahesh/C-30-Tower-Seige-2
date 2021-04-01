var launchState = 1
var slingState = 0
var gameState = slingState

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, stand1, stand2
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25
var polygon, slingshot

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,695,800,10)
	stand1 = new Ground(300,600,200,10)
	stand2 = new Ground(600,500,200,10)
	box1 = new Box(225,570,25,50)
	box2 = new Box(250,570,25,50)
	box3 = new Box(275,570,25,50)
	box4 = new Box(300,570,25,50)
	box5 = new Box(325,570,25,50)
	box6 = new Box(350,570,25,50)
	box7 = new Box(375,570,25,50)
	box8 = new Box(250,520,25,50)
	box9 = new Box(275,520,25,50)
	box10 = new Box(300,520,25,50)
	box11 = new Box(325,520,25,50)
	box12 = new Box(350,520,25,50)
	box13 = new Box(275,470,25,50)
	box14 = new Box(300,470,25,50)
	box15 = new Box(325,470,25,50)
	box16 = new Box(300,420,25,50)
	box17 = new Box(550,470,25,50)
	box18 = new Box(575,470,25,50)
	box19 = new Box(600,470,25,50)
	box20 = new Box(625,470,25,50)
	box21 = new Box(650,470,25,50)
	box22 = new Box(575,420,25,50)
	box23 = new Box(600,420,25,50)
	box24 = new Box(625,420,25,50)
	box25 = new Box(600,370,25,50)

	polygon = new Polygon(50,200,40)

	slingshot = new Slingshot(polygon.body,{x:100,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  fill("yellow")
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,50)
  ground.display();
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  polygon.display();
  slingshot.display();
}

function mouseDragged() {
    if(gameState !== launchState){
        Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})        
    }
}

function mouseReleased() {
    slingshot.fly()
    gameState = launchState
}

function keyPressed() {
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body,{x:100,y:200})
        slingshot.attach(polygon.body)
        gameState = slingState
    }
}