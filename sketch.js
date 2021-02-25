var player
var ground, ground1, ground2, ground_image;
var apple, apple_image, applesGroup;
var banyanTree, banyanTree_image;
var tree, tree_image;
var birds, birds_image;
var crow, crow_image;
var eagle, eagle_image
var goldenApple, goldenApple_image;
var nightSky, nightSky_image;
var sky, sky_image;
var health = 100;
var score;
var gameState = START;
var START
var PLAY 
var END
var message, message2, message3, message4, message5;

var skyNumber = 2;

function preload(){
sky_image = loadImage("sky.jpg");
nightSky_image = loadImage("nightSky.jpg");
ground_image = loadImage("ground.jpg");
apple_image = loadImage("apple.jpg");
}

function setup() {
  createCanvas(800, 700);

//skyNumber = Math.round(random(1,2));
//switch(skyNumber){
  //  case 1: background(sky_image); 
	//	    break;
	//case 2: background(nightSky_image);
	  //      break;
//}

player = createSprite(60, 600, 40, 40);

ground = createSprite(700, 650, 1000, 20);
ground1 = createSprite(300, 650, 1000, 20)
ground2 = createSprite(100, 650, 500, 20);
ground1.addImage("ground", ground_image);
ground2.addImage("ground", ground_image);
ground.addImage("ground", ground_image);
ground.scale = 0.21;
ground1.scale = 0.21;
ground2.scale = 0.21;

applesGroup = new Group();

}

function draw() {

bg();

if(gameState === START){
fill("white");
textSize(25);
message = text("You ready? Got your water?", 270, 200);
textSize(20);
message2 = text("You haven't? Go get some then! The game isn't going anywhere.", 125, 250);
message3 = text("*awkward waiting*", 350, 300)
message4 = text("Have you got your water? Alright then, just press the left arrow key.", 125, 350);
textSize(25);
message5 = text("Have fun!", 380, 400);

}

if(keyDown(LEFT_ARROW) && gameState === START){
	gameState === PLAY;
    message.visible = false;
	message2.visible = false;
	message3.visible = false;
	message4.visible = false;	
	message5.visible = false;
  }


if(gameState === PLAY){

//console.log(ground1.x);

textSize(15);
text("Health: " + health, 360, 20);
text("Score: " + score, 440, 20);

background(sky_image);

	if(ground.x < 600){
	   ground.x = 700;
	   ground1.x = 300;
	   ground2.x = 100;
	}

	if(ground1.x < 400)

	//console.log(ground.x);

	if(keyIsDown(LEFT_ARROW)){
		ground.velocityX = -4;
		ground1.velocityX = -4;
		ground2.velocityX = -4;
	}

	if(frameCount % 1000 === 0){
		apple = createSprite(705, 600, 20, 20);
		bg();
		apple.velocityX = -4;
		apple.addImage("apple", apple_image);
		apple.scale = 0.035;  
		applesGroup.add(apple);
	}

	if(player.isTouching(applesGroup)){
	   applesGroup.destroyEach();
	   health += 20;
	   score += 5;
	}

}

	player.collide(ground);
	player.collide(ground1);
	player.collide(ground2);
  
  drawSprites();
}

function bg(){
//	skyNumber = Math.round(random(1,2));
//	switch(skyNumber){
//		case 1: background(sky_image); 
//				break;
//		case 2: background(nightSky_image);
//				break;
//  }
	if(frameCount % 100 === 0){
		skyNumber += 1;
			if(skyNumber % 2 === 0){
				background(sky_image);
			}
			else background(nightSky_image);
	}
}