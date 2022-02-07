let W;
let H;
let slider;
let myShader;
let nImages;
let enableVideo;
function preload() {
    //Imagen a rasterizar
    img=loadImage('/vc/sketches/lenna.png')

    //carga de iamgtenes que haran parte del shader
    images = []
    for (let i = 1; i <= 13; i++) {
      console.log(images);
      images.push(loadImage(`/vc/sketches/images/p${i}.jpg`));
    }

    nImages=images.length;
    myShader = loadShader("/vc/sketches/shader.vert", "/vc/sketches/shader4.frag")

    //Se carga el video
    video = createVideo('/vc/sketches/sapari.mp4');
    video.hide();
}
function compare(a,b){
  return a[0]-b[0];
}
function setup() {
  
  //Se habilita la opcion de hacer switch al video
  enable_shader = createCheckbox('enable video', false);
  enable_shader.style('color', 'magenta');
  enable_shader.changed(() => {
    if (enable_shader.checked()) {
      console.log("Checked")
      myShader.setUniform("texture", video);
    } else {
      console.log("no Checked")
      myShader.setUniform("texture", img);
    }
  });

  //Se definen las dimensiones del lienzo
  enable_shader.position(10, 50);
  console.log(images);
  W = 500;
  H = 500;
  createCanvas(W, H, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(myShader);

  //Se carga el shader formado por las texturas obtenidas de la imagenes 
  myShader.setUniform("texture", img);
  myShader.setUniform("nImages", float(nImages));

  for(let i = 0 ;i < nImages ;i++)
    myShader.setUniform("alpha"+i.toString(), images[i]);
  
  slider = createSlider(2, 16, 40);
  slider.position(100, 100);
  video.loop();
}

//se le da el valor de modificacion al deslizador
function draw() {
  let posSlider = slider.value();
  myShader.setUniform("resolution", parseInt(500 / posSlider));
  beginShape();
  vertex(-W / 2, -H / 2, 0, 0, 0);
  vertex(W / 2, -H / 2, 0, 1, 0);
  vertex(W / 2, H / 2, 0, 1, 1);
  vertex(-W / 2, H / 2, 0, 0, 1);
  endShape();
}