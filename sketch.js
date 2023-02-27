const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var tower; 
var backgroundImg; 

function preload(){
  backgroundImg = loadImage("./assets/background.gif"); 
}

function setup() {
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;    

}

function draw() {
  background(51);  
  image(backgroundImg, 0, 0, width, height)
  Engine.update(engine); 
}


