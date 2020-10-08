 var car,wall;
var speed, weight,thickness; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)
thickness=random(22,83)

	car=createSprite(50, 200, 50,5);   


	car.shapeColor=color(255);
	car.velocityX = speed;

  
  	wall=createSprite(1200,200,thickness, height/2)
  	wall.shapeColor=color(230,230,230)
}


function draw() {
  background(0);

  
  if(collided(car,wall))
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(deformation>10)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<10)
	{
		car.shapeColor=color(0,255,0);
	}

	 
  }  
  
  drawSprites();
}

  function collided(ob1,ob2){
carRightEdge=ob1.x+ob1.width;
wallLeftEdge=ob2.x;
if(carRightEdge>=wallLeftEdge){
return true
}
return false;
}
  
 

