
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1 ,box2,box3,box4, ground1 , hammer1 , rubber1,rubber2;

//function preload(){}

	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    box1 = new Box(200,400,70,80);
	box2 = new Box(400,400,90,90);
	box3 = new Box(100,300,50,50);
	box4 = new Box(300,600,60,40);
	
  ground1=new Ground(400,700,800,20);
  
  hammer1 = new Hammer(400,50,40,100);

  rubber1 = new Circle(700,350,70);
  Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();

 ground1.display();
 hammer1.display();
 rubber1.display();
}



