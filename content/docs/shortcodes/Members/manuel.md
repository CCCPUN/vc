# Manuel Medrano
Interested in video game and software development.

Based on  [this](https://michaelbach.de/ot/lum-cobc/index.html).\
Drag the yellow circular figure with your mouse and observe the center of both gray circles.\

## Optical illusion
{{< p5-global-iframe id="Manuel" width="820" height="425" >}}

    //Atributos del circulo amarillo
    var radiusP = 270;
    var circles = [
        { x: 200, y: 200, active: false }
    ]

    function setup() {
    createCanvas(800, 400);
    frameRate(60);
    ellipseMode(CENTER);
    }

    function draw() {
    
    background(135, 135, 135);
    
    //Gradiente posterior
    radialGradient(200, 200,360,360,color(160,160,160),color(135, 135, 135))
    
    //dibujamos los dos circulos grises
    noStroke();
    fill(131, 131, 131);
    circle(200, 200, 300);
    circle(600, 200, 300);
    
    //Gradiente interna del circulo de la izquierda
    radialGradient(200, 200,300,300,color(150, 150, 150),color(128,128,128))
    
    noStroke();
    fill(131, 131, 131);
    circle(200, 200, 245);
    
    //Se dibuja el circulo amarillo
    var circleP = circles[0];
    noFill();
    stroke(124, 122, 81);
    strokeWeight(90);
    ellipse(circleP.x, circleP.y, radiusP, radiusP);
        
    }
    //Funcion que dibuja un numero definido de elipses para simular gradiente de un color a otro
    function radialGradient(x, y, w, h, inner, outer) {
    noStroke();
    for (let i = Math.max(w, h); i > 0; i--) {
        const step = i / Math.max(w, h);
        const colour = lerpColor(inner, outer, step);//Calculo del proximo color
        fill(colour);
        ellipse(x, y, step * w, step * h);
    }
    }

    //Funcion que verifica si el mouse esta presionado sobre el circulo amarillo
    function mousePressed() {
        if (circles.length > 0) {
            for (var i = 0; i < circles.length; i++) {
                var circle = circles[i],
                        distance = dist(mouseX, mouseY, circle.x, circle.y);
                if (distance < radiusP) {
                    circle.active = true;
                } else {
                    circle.active = false;
                }
            }
        }
    return false;
    }

    //Funcion que modifica la ubicacion del circulo amarillo 
    function mouseDragged() {
        if (circles.length > 0) {
            for (var i = 0; i < circles.length; i++) {
                var circle = circles[i];
                if (circle.active) {
                    circle.x = mouseX;
                    circle.y = mouseY;
                    break;
                }
            }
        }
    return false;
    }
{{< /p5-global-iframe >}}

