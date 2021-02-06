
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(950,230,30);
	mango3=new mango(1200,250,30);
	mango4=new mango(1020,70,30);
	mango5=new mango(1050,180,30);
	mango6=new mango(1175,170,30);
	mango7=new mango(985,150,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj=new Stone(235,410,30);

	launcherObject = new Launcher(stoneObj.body,{x:245, y:400});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stoneObj.display();
  launcherObject.display();  

  groundObject.display();

  detectolition(stoneObj,mango1);
  detectolition(stoneObj,mango2);
  detectolition(stoneObj,mango3);
  detectolition(stoneObj,mango4);
  detectolition(stoneObj,mango5);
  detectolition(stoneObj,mango6);
  detectolition(stoneObj,mango7);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectolition(lstone,lmango){
 mangoBodyPosition=lmango.body.position;
 stoneBodyPosition=lstone.body.position;

 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=lmango.r+lstone.r){
	 Matter.Body.setStatic(lmango.body,false);
 }
}
