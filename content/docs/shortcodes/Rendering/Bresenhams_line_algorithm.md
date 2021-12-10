# Bresenham's line algorithm

El algoritmo de línea de Bresenham es un algoritmo de dibujo de líneas que determina los puntos de una trama n-dimensional que deben seleccionarse para formar una aproximación a una línea recta entre dos puntos. Se suele utilizar para dibujar primitivas de línea en una imagen de mapa de bits (por ejemplo, en la pantalla de un ordenador), ya que sólo utiliza sumas, restas y desplazamientos de bits enteros, todas ellas operaciones muy baratas en conjuntos de instrucciones de ordenador de uso común, como x86_64. Es un algoritmo de error incremental. Es uno de los primeros algoritmos desarrollados en el campo de la infografía. Una extensión del algoritmo original puede utilizarse para dibujar círculos.


{{< p5-global-iframe id="breath" width="640" height="480" >}}
var grid;
var res = 5;
var rows, cols;
var pos;
var vel;

function Array2D(rows, cols) {
  var arr = new Array(rows);
  for (var i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function setup() {
  createCanvas(640, 480);
  rows = width / res;
  cols = height / res;
  grid = Array2D(rows, cols);
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      grid[x][y] = 0;
    }
  }
  pos = createVector(0, 0);
  vel = createVector(3, 5);
}

function draw() {
  background(255);
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      grid[x][y] = 0;
    }
  }
  pos.add(vel);
  if (pos.x > width / res - res || pos.x < 1) {
    vel.x *= -1;
  }
  if (pos.y > height / res || pos.y < 1) {
    vel.y *= -1;
  }
  bresenhamLine(pos.x, pos.y, (width - 1) / res, (height - 1) / res);
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      var px = x * res;
      var py = y * res;
      stroke(0);
      strokeWeight(res / 20);
      if (grid[x][y] == 1) {
        fill(0);
      } else {
        noFill();
      }
      square(px, py, res);
    }
  }
}

function bresenhamLine(x0, y0, x1, y1) {
  var deltaX = x1 - x0;
  var deltaY = y1 - y0;
  var deltaErr = abs(deltaY / deltaX);
  var error = 0;
  var y = y0;
  for (var x = x0; x <= x1; x++) {
    grid[x][y] = 1;
    error += deltaErr;
    if (error >= 0.5) {
      y += (deltaY > 0 ? 1 : -1);
      error -= 1;
    }
  }
}
{{< /p5-global-iframe >}}