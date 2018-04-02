var x = 0
var y = 200

/* This function is called once, when the page loads. Anything that you want to show up initially should be created here! To start out, try drawing some shapes. */
function setup() {
    createCanvas(800, 600);
    bg = loadImage("forest.jpg");
}


/* This function is called over and over again by P5. Animation should happen here! */
/*function draw() {
  background("#a5deff")
  y = y - 0.5
  drawAll()
}*/

/* Feel free to add your own functions below (for example, if you want to add mouse or keyboard interaction) */
function draw() {

  background(bg)
  fill("#f4e242")
  strokeWeight(5)
  stroke("#ffd242")
  ellipse(100, 100, 200, 200)

  stroke("#ada493")
  fill("#d6c8ab")
  rect(450, y + 250, 200, 200)

  triangle(380, y + 250, 720, y + 250, 550, y + 100)

  stroke("#fc66ff")
  fill("#fc66ff")
  ellipse(350, y + 30, 110, 110)
  stroke("#d8ff63")
  fill("#d8ff63")
  ellipse(450, y + 80, 110, 110)
  stroke("#62ffe7")
  fill("#62ffe7")
  ellipse(550, y+50, 110, 110)
  stroke("#fcb85f")
  fill("#fcb85f")
  ellipse(620, y, 110, 110)
  fill("#f77260")
  stroke("#f77260")
  ellipse(480, y-30, 110, 110)
  stroke("#da52f2")
  fill("#da52f2")
  ellipse(575, y-50, 110, 110)
  stroke("#fff196")
  fill("#fff196")
  ellipse(700, y + 35, 110, 110)
  
  y-=2
}
