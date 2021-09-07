const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow, snow2, snow3, snow4, snow5, snow6, snow7, snow8, snow9, snow10;
var backgroundImg;


function setup() {
  createCanvas(1200, 800);
  engine= Engine.create();
  snow= new Snow(100, 50);
  snow2= new Snow(200, 50);
  snow3= new Snow(400, 80);
  snow4= new Snow(600, 30);
  snow5= new Snow(700, 40);
  snow6= new Snow(130, 70);
  snow7= new Snow(800, 20);
  snow8= new Snow(1100, 65);
  snow9= new Snow(900, 75);
  snow10= new Snow(250, 85);
}

function preload(){
  backgroundImg=loadImage("snow3.jpj");
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  snow.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  drawSprites();
}