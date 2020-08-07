var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  //creating the wall
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

  //creating the bullet
  bullet = createSprite(30,200,30,10);

  //creating the speed and weight
  speed = random(223,321);
  weight = random(30,52);

  //making the bullet move
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

    if(damage > 10){

      wall.shapeColor = color(255,0,0);

    }

    if(damage < 10){

      wall.shapeColor = color(0,255,0);

    }

  }

  drawSprites();
}

function hasCollided(Bullet,Wall){

  if(Bullet.x + Bullet.width >= Wall.x){
    return true;
  }
  else{
    return false;
  }

}