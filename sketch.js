
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1,d2,d3;
var paper;
var ground;

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world

	d1=new Dustbin(550,350,15,60);
	d2=new Dustbin(555,410,50,15);
	d3=new Dustbin(600,350,15,60);
	paper=new Paper(100,410,50);
	ground=new Ground(0,430,50,200);
  
}


function draw() {
  background(0);
  Engine.update(engine);
 d1.display();
 d2.display();
 d3.display();
 paper.display();
 ground.display();


}



