let W;
let H;
let slider;
let myShader;
let nImages;
function preload() {
    //img = createVideo('/vc/sketches/video1.mp4');
    //img.hide();
    img=loadImage('/vc/sketches/mainimage.jpg')
    alpha0 = loadImage('/vc/content/sketches/amarillo.png')
    alpha1 = loadImage('/vc/content/sketches/azul.jpg')
    alpha2 = loadImage('/vc/content/sketches/blanco.jpg')
    alpha3 = loadImage('/vc/content/sketches/cyan.jpeg')
    alpha4 = loadImage('/vc/content/sketches/morado.jpg')
    alpha5 = loadImage('/vc/content/sketches/naranja.jpg')
    alpha6 = loadImage('/vc/content/sketches/negro.jpg')
    alpha7 = loadImage('/vc/content/sketches/rojo.jpg')
    alpha8 = loadImage('/vc/content/sketches/rosado.jpeg')
    alpha9 = loadImage('/vc/content/sketches/verde.jpg')
    alpha10 = loadImage('/vc/content/sketches/gris.jpg')
    alpha11 = loadImage('/vc/content/sketches/cafe.jpg')
    alpha12 = loadImage('/vc/content/sketches/fucsia.jpg')
    images=[alpha0,alpha1,alpha2,alpha3,alpha4,alpha5,alpha6,alpha7,alpha8,alpha9,alpha10,alpha11,alpha12]

    nImages=images.length;
    myShader = loadShader("/vc/content/sketches/shader.vert", "/vc/content/sketches/shader2.frag")
}
function compare(a,b){
  return a[0]-b[0];
}
function setup() {
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
        //score+=0.333*images[ind].get(i,j)[0]+0.333*images[ind].get(i,j)[1]+0.333*images[ind].get(i,j)[2];
        score+=0.299*images[ind].get(i,j)[0]+0.587*images[ind].get(i,j)[1]+0.114*images[ind].get(i,j)[2];

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
  //img.loop();
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