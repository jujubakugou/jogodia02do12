const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var hammer
var pedra

function setup() {
  var canvas = createCanvas(1200, 600)
  engine = Engine.create()
  world = engine.world

  plane = new Plane(600, height, 1200, 20)
  hammer = new Hammer(10, 100)
  pedra = new Pedra(500, 200, 50, 50)
}

function draw() {
  background('lightBlue')
  Engine.update(engine)

  plane.display()
  hammer.display()
  Pedra.display()
}
