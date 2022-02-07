let asciiShader;
let shaderTexture;


function preload() {
  img = loadImage('/vc/docs/sketches/imaging-hardware/acii-art/image-test.jpg');
  asciiShader = loadShader('/vc/docs/sketches/imaging-hardware/acii-art/ascii-art.vert', '/vc/docs/sketches/imaging-hardware/acii-art/ascii-art.frag');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  shaderTexture = createGraphics(800, 800, WEBGL);
}

function draw() {
  date = Date.now();
  shaderTexture.shader(asciiShader);
  asciiShader.setUniform('tex', img);
  texture(shaderTexture);
  shaderTexture.rect(0,0,400,400);
  rect(-400,-400,800,800);
  noLoop();
  print("TIME HARDWARE: ", Date.now()-date);
}