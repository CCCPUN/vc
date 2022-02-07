let img;

function preload() {
  img = loadImage('/vc/docs/sketches/lenna.png');
}

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  img.filter(INVERT)
  image(img, 0, 0);
}