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
    alpha0 = loadImage('/vc/sketches/amarillo.jpg')
    alpha1 = loadImage('/vc/sketches/azul.jpg')
    alpha2 = loadImage('/vc/sketches/blanco.jpg')
    alpha3 = loadImage('/vc/sketches/cyan.jpg')
    alpha4 = loadImage('/vc/sketches/morado.jpg')
    alpha5 = loadImage('/vc/sketches/naranja.jpg')
    alpha6 = loadImage('/vc/sketches/negro.jpg')
    alpha7 = loadImage('/vc/sketches/rojo.jpg')
    alpha8 = loadImage('/vc/sketches/rosado.jpg')
    alpha9 = loadImage('/vc/sketches/verde.jpg')
    alpha10 = loadImage('/vc/sketches/gris.jpg')
    alpha11 = loadImage('/vc/sketches/cafe.jpg')
    alpha12 = loadImage('/vc/sketches/fucsia.jpg')
    images=[alpha0,alpha1,alpha2,alpha3,alpha4,alpha5,alpha6,alpha7,alpha8,alpha9,alpha10,alpha11,alpha12]

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
  enable_shader.position(10, 50);
  console.log(images);
  W = 500;
  H = 500;
  createCanvas(W, H, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(myShader);

  myShader.setUniform("texture", img);
  myShader.setUniform("nImages", float(nImages));
  console.log(alpha0.width,alpha0.height);
  sortedImages=[]
  for(let ind=0;ind<images.length;ind++){  
    let score=0;
    let cnt=0;
    for(let i=0;i<images[ind].width;i+=5)
      for(let j=0;j<images[ind].height;j+=5){
        score+=0.333*images[ind].get(i,j)[0]+0.333*images[ind].get(i,j)[1]+0.333*images[ind].get(i,j)[2];
        //score+=0.299*images[ind].get(i,j)[0]+0.587*images[ind].get(i,j)[1]+0.114*images[ind].get(i,j)[2];

        cnt++;
      }
    score=score/(cnt);
  
    sortedImages.push([score,ind]);
  }
  sortedImages=sortedImages.sort(compare);


  for(let i = 0 ;i < nImages ;i++)
    myShader.setUniform("alpha"+i.toString(), images[sortedImages[i][1]]);
  
  slider = createSlider(2, 16, 40);
  slider.position(10, 10);
  video.loop();
}
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