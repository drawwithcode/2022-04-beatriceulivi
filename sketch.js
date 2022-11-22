////////////////////////////////////////////////////////
//This game for kids is inspired by the original informal Italian version "Scarabocchio". 
//The challenge consists in drawing an object/animal given by the random word starting from an initial random doodle.
//You can choose brushes of different colors but you can't erase.
//If you want to start a new sketch you need to shake the phone 
////////////////////////////////////////////////////////

//The code of random shapes was taken from "The coding train" tutorial https://www.youtube.com/watch?v=xTTuih7P0c0

//* The sketch is designed for iphoneXR *//


let myBG = ["#ffffff", "#fff2cf", "#fcebf1", "#dce0f9", "#d0efe9", "#e2f4fe"];
let words = [ "DOG","CAT","BIRD","RABBIT", "MOUSE", "FISH", "SNAKE", "CHICKEN", "COW", "SHEEP", "PIG", "HORSE", "LION", "BEAR", "MONKEY", "TURTLE", "HOUSE", "TREE", "FLOWER", "CAR", "HAMMER", "EYE", "PIZZA", "MOM", "DAD", "BOOK" ];
let doodleshape;
let word;
let instructions;
let startsong;
let playsong;
let b = 50;

const urlString = window.location.href; // Collect the URL string of the page
let url = new URL(urlString); // Convert it into a parsable URL Object


function preload() {
  //pencil images
  img1 = loadImage('./assets/colors/red.png');
  img2 = loadImage('./assets/colors/orange.png');
  img3 = loadImage('./assets/colors/yellow.png');
  img4 = loadImage('./assets/colors/pink.png');
  img5 = loadImage('./assets/colors/purple.png');
  img6 = loadImage('./assets/colors/violet.png');
  img7 = loadImage('./assets/colors/blue.png');
  img8 = loadImage('./assets/colors/sky.png');
  img9 = loadImage('./assets/colors/green.png');
  img10 = loadImage('./assets/colors/forest.png');
  img11 = loadImage('./assets/colors/brown.png');
  img12 = loadImage('./assets/colors/beige.png');
  img13 = loadImage('./assets/colors/black.png');
  img14 = loadImage('./assets/colors/white.png');

  startsong = loadSound('./assets/sound/newsketch.mp3');
  playsong = loadSound('./assets/sound/playsong.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  backgroundmusic();

  doodleshape = new DoodleShape();
  
  setShakeThreshold(30);

  ////////button for the color of pencil////////
  buttonR = createImg("./assets/colors/red.png"); 
  buttonR.position(windowWidth - 55, 0);

  buttonO = createImg("./assets/colors/orange.png"); 
  buttonO.position(windowWidth - 55, b);

  buttonY = createImg("./assets/colors/yellow.png"); 
  buttonY.position(windowWidth - 55, b * 2);

  buttonP = createImg("./assets/colors/pink.png"); 
  buttonP.position(windowWidth - 55, b * 3);

  buttonPu = createImg("./assets/colors/purple.png"); 
  buttonPu.position(windowWidth - 55, b * 4);

  buttonV = createImg("./assets/colors/violet.png"); 
  buttonV.position(windowWidth - 55, b * 5);

  buttonB = createImg("./assets/colors/blue.png"); 
  buttonB.position(windowWidth - 55, b * 6);

  buttonS = createImg("./assets/colors/sky.png"); 
  buttonS.position(windowWidth - 55, b * 7);

  buttonG = createImg("./assets/colors/green.png"); 
  buttonG.position(windowWidth - 55, b * 8);

  buttonF = createImg("./assets/colors/forest.png"); 
  buttonF.position(windowWidth - 55, b * 9);

  buttonBr = createImg("./assets/colors/brown.png"); 
  buttonBr.position(windowWidth - 55, b * 10);

  buttonBg = createImg("./assets/colors/beige.png"); 
  buttonBg.position(windowWidth - 55, b * 11);

  buttonBk = createImg("./assets/colors/black.png"); 
  buttonBk.position(windowWidth - 55, b * 12);

  buttonW = createImg("./assets/colors/white.png"); 
  buttonW.position(windowWidth - 55, b * 13);
  ///////////////////////////////////////////////


  //instruction button
  instructions = createButton("?");
  instructions.position(20, 20);
  instructions.style('width', '45px');
  instructions.style('height', '45px');
  instructions.style('font-family','Gochi Hand');
  instructions.style('color: #1695C1');
  instructions.style('font-size', '20px');
  instructions.style('background-color', '#FFE4B2');
  instructions.style('border-radius', '100px');
  instructions.style('border: 4px solid white' );


  ////////////////LOGO//////////////////
  //The//
  let the = createElement('h1','The');
  the.style("font-family",'Gochi Hand');
  the.style('color: #FC987A');
  the.style("font-size", "40px");
  the.position(100, - 15);
  //Doodle//
  let logo = createElement('h1','Doodle');
  logo.style("font-family",'Gochi Hand');
  logo.style('color: #FC987A');
  logo.style("font-size", "60px");
  logo.position(100, - 12);
  //Challenge//
  let challenge = createElement('h1','challenge');
  challenge.style("font-family",'Gochi Hand');
  challenge.style('color: #1695C1');
  challenge.style("font-size", "25px");
  challenge.position(180, 55);
  /////////////////////////////////////

  let shake = createElement('p','SHAKE');
  shake.style("font-family",'Gochi Hand');
  shake.style('color: #1695C1');
  shake.style("font-size", "20px");
  shake.position(30, 625);

  let clear = createElement('p','For clear');
  clear.style("font-family",'Gochi Hand');
  clear.style('color: #1695C1');
  clear.style("font-size", "16px");
  clear.position(30, 645);


  textFont('Gochi hand');

  background(random(myBG));

  word = random(words); 

}


function draw() {

  //associate button to the event function 
  buttonR.mousePressed(colorline);
  buttonO.mousePressed(colorline);
  buttonY.mousePressed(colorline);
  buttonP.mousePressed(colorline);
  buttonPu.mousePressed(colorline);
  buttonV.mousePressed(colorline);
  buttonB.mousePressed(colorline);
  buttonS.mousePressed(colorline);
  buttonG.mousePressed(colorline);
  buttonF.mousePressed(colorline);
  buttonBr.mousePressed(colorline);
  buttonBg.mousePressed(colorline);
  buttonBk.mousePressed(colorline);
  buttonW.mousePressed(colorline);


  instructions.mousePressed(changePage);


  doodleshape.render();


  //box for word
  push();
  rectMode(CENTER);
  strokeCap(ROUND);
  fill("#FFE4B2");
  stroke("255");
  strokeWeight(4);
  rect(width/2, 660, 130, 40, 40);
  pop();
 
  //random words for the challenge 
  text(word, width/2, 668);
  text(0);
  push();
  pop();
  textFont("Gochi Hand", 30);
  textAlign(CENTER);
  
}
  

function backgroundmusic() {

  playsong.play();
  playsong.loop();
  playsong.setVolume(0.3);
}


function touchMoved(){

  //draw function with touch
  line(pmouseX,pmouseY,mouseX,mouseY);
  strokeWeight((mouseX + mouseY)*0.01);
  return false;

}


function colorline() {

  //change the color of the line with pastel buttons
  let a = 380;

  if((mouseX > a) && (mouseY < b)){
    stroke("red")
  }
  if((mouseX > a) && (mouseY > b) && (mouseY < b * 2)){
    stroke("orange")
  }
  if((mouseX > a) && (mouseY > b * 2) && (mouseY < b * 3)){
    stroke("yellow")
  }
  if((mouseX > a) && (mouseY > b * 3) && (mouseY < b * 4)){
    stroke("pink")
  }
  if((mouseX > a) && (mouseY > b * 4) && (mouseY < b * 5)){
    stroke("#93278F")//purple
  }
  if((mouseX > a) && (mouseY > b * 5) && (mouseY < b * 6)){
    stroke("#582782")//violet
  }
  if((mouseX > a) && (mouseY > b * 6) && (mouseY < b * 7)){
    stroke("blue")
  }
  if((mouseX > a) && (mouseY > b * 7) && (mouseY < b * 8)){
    stroke("#61BEF7")//sky
  }
  if((mouseX > a) && (mouseY > b * 8) && (mouseY < b * 9)){
    stroke("#39B54A")//green
  }
  if((mouseX > a) && (mouseY > b * 9) && (mouseY < b * 10)){
    stroke("#073D27")//forest
  }
  if((mouseX > a) && (mouseY > b * 10) && (mouseY < b * 11)){
    stroke("#42210B")//brown
  }
  if((mouseX > a) && (mouseY > b * 11) && (mouseY < b * 12)){
    stroke("#A67C52")//beige
  }
  if((mouseX > a) && (mouseY > b * 12) && (mouseY < b * 13)){
    stroke("#000000")//black
  }
  if((mouseX > a) && (mouseY > b * 13) && (mouseY < b * 14)){
    stroke("255")//white
  }
}

//function for generate the random shape
function DoodleShape() {

	this.pos = createVector(random(0, 300), random(200, 600));
	this.r = random(40, 100);
	this.total = floor(random(5,15));
	this.offset = [];
	for(var i = 0; i < this.total; i++){
		this.offset[i] = random(-15, 15);
	}
										 
	this.render = function() { 
    
		push();
		noFill();
		stroke(0);
		strokeWeight(5);
		translate(this.pos.x, this.pos.y);
		beginShape();
	for(var i = 0; i< this.total; i++){
		var angle = map(i,0,this.total,0,TWO_PI);
		var r = this.r + this.offset[i];
		var x = r * cos(angle);
		var y = r * sin(angle);
		vertex(x, y);
	}
		endShape(CLOSE);
		pop();
	}
}


//refresh the sketch shaking the mobile
function deviceShaken() {
  //event sound
  startsong.play();
  //clear the sketch
  setup();
}


//see the instruction page
function changePage() {
  window.open(`${url}page.html?count=${frameCount}`, "_self");

}


// request permissions on iOS
function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}