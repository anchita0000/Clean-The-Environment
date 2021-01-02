
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

	d1=new Dustbin(490,340,15,80);
	d2=new Dustbin(490,410,100,15);
	d3=new Dustbin(580,340,15,80);
	paper=new Paper(100,410,40);
	ground=new Ground(350,430,700,20);
  
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
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
	}
}



