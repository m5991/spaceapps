var earth
var angle = 0;
var globe
var table

function preload() {
  earth = loadImage("data/earth.jpg");
  // table = loadTable("data/all_month.csv", "header");
  table = loadTable("data/all_month.csv","csv","header");
}

function setup() {
  createCanvas(600,600, WEBGL);

  // translate(width/2, height/2);


}

function draw() {
  background(51);
  push();
    rotateY(angle);
    // rotateZ(angle * mouseX * 0.001);
    // rotateX(angle * mouseX * 0.001);
    // rotateY(angle * mouseX * 0.001);
    texture(earth);
    noStroke();
    globe = sphere(100);

  pop();
  // for (var row = 0; r < table.getRowCount()-1; r++) {
  //   var lat = table.getNum(r+3,2);
  //   var lon = table.getNum(r+3,3);
  //   var mag = table.getNum(r+3,5);
  //   var theta = radians(lat) + PI/2;
  //   var phi = radians(lon) + PI;
  //   var x = r * sin(theta) * cos(phi);
  //   var y = -r * sin(theta) * sin(phi);
  //   var z = r * cos(theta);
  // }

  angle += 0.05;

}
