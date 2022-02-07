let anch;
let alt;
let lngImg;

let shaderTexture;

let slider;
let checkSwitch;
function preload() {  
    //cargan de iamgenes que haran parte del shader
    images = []
    for (let i = 1; i <= 13; i++) {
      console.log(images);
      images.push(loadImage(`/vc/sketches/images/p${i}.jpg`));
    }
    lngImg=images.length;
    shaderTexture = loadShader("/vc/sketches/shader.vert", "/vc/sketches/shaderTexturecolor.frag")

    //Imagen a rasterizar
    mainBack=loadImage('/vc/sketches/lenna.png')

    //Se carga el video
    video = createVideo('/vc/sketches/sapari.mp4');
    video.hide();
}

function setup() {
  
  //Se habilita la opcion de hacer switch al video
  checkSwitch = createCheckbox('video', false);
  checkSwitch.style('color', 'magenta');
  checkSwitch.changed(() => {
    if (checkSwitch.checked()) {
      shaderTexture.setUniform("texture", video);
    } else {
      shaderTexture.setUniform("texture", mainBack);
    }
  });

  //Se definen las dimensiones del lienzo
  checkSwitch.position(50, 50);
  anch = 500;
  alt = 500;
  createCanvas(anch, alt, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(shaderTexture);

  //Se carga el shader formado por las texturas obtenidas de la imagenes 
  shaderTexture.setUniform("texture", mainBack);
  shaderTexture.setUniform("lngImg", float(lngImg));

  for(let i = 0 ;i < lngImg ;i++)
    shaderTexture.setUniform("imge"+i.toString(), images[i]);

  //se crea un deslizador para variar la resolucion del video
  slider = createSlider(2, 16, 40);
  slider.position(50, 450);
  video.loop();
}

//se le da el valor de modificacion al deslizador
function draw() {
  let resSlider = slider.value();
  shaderTexture.setUniform("resolution", parseInt(500 / resSlider));
  beginShape();
  vertex(-anch / 2, -alt / 2, 0, 0, 0);
  vertex(anch / 2, -alt / 2, 0, 1, 0);
  vertex(anch / 2, alt / 2, 0, 1, 1);
  vertex(-anch / 2, alt / 2, 0, 0, 1);
  endShape();
}