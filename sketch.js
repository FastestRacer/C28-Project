
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var paperImage
var engine,world;



function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,300,10);
		

	ground = new Ground(400,400,800,20);

	leftSide = new Dustbin(580,340,20,100);
	bottom = new Dustbin(640,380,100,20);
	rightSide = new Dustbin(700,340,20,100);

	launcher= new Launcher(paper.body,{x:200,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
	Engine.update(engine);

	paper.display();
	ground.display();
	leftSide.display();
	
	bottom.display();
	rightSide.display();
	launcher.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly()
}



