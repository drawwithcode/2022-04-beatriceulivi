// Sketch linked to secondary HTML page (page.html)
//This sketch contains the instructions of the game

const urlString = window.location.href; 
let url = new URL(urlString); 

let string1 = "This game is inspired by the original Italian version SCARABOCCHIO."
let string2 = "Are you able to draw the animal/object that appears on the screen, using the random initial shape?"
let string3 = "You can’t erase ! But if you want to start again, just shake your device."


function preload() {

  icon = loadImage('./assets/icon.png');

}


function setup() {
 createCanvas(windowWidth, windowHeight);
 
}


function draw() {

  background("#E2F4FE");
  textAlign(CENTER);
  textSize(30);
  textFont('Gochi Hand')
  fill("#1695C1")
  text(string1, 30, 60, 350, 600);
  text(string2, 30, 210, 350, 600);
  text(string3, 30, 400, 350, 600);

  image(icon, 140, 545, icon.width*0.7, icon.height*0.7);

}


