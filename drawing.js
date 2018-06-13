var radius =10;
var xball =75;
var yball =121;
var xSpeed =2;
var ySpeed =3;




function setup() {
createCanvas(200, 180); 
background(255, 155, 147); 
}

function draw() {
	background(225, 155, 147); 
	if (xball > width - radius || xball < radius){
		xSpeed = -xSpeed;
	}
	if (yball > height - radius || yball < radius){
		ySpeed = -ySpeed;
	}
	ellipse(xball, yball, radius)
	xball += xSpeed
	yball += ySpeed
	fill(255)
	stroke(255)

	}
