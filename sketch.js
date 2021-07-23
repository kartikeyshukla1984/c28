
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dust1,g1;
var  world;
var b1,b2,b3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dust1 = new Dust(100,200);
    
	g1 = new Ground(400,450,800,20);
	b1=new Ground(700,450,80,5);
	b2=new Ground(660,420,5,60);
    b3=new Ground(740,420,5,60);

	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("black");
  g1.display();
  dust1.display();
  b1.display();
  b2.display();
  b3.display();

  drawSprites();

}




function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	  
	   Matter.Body.applyForce(dust1.body,dust1.body.position,{x:10,y:-7});
	   
	 }
   }

