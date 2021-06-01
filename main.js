function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1300,336);
	instializeInSetup(mario);
}

function draw() {
	game()
}






