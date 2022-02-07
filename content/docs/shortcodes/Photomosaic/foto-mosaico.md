# Conversión de la imagen a un foto-mosaico por Hardware.

## Implementacion

En esta implementación, buscaremos reemplazar los pixeles de color dentro de una imagen, con una posible representacion formada por ilustraciones mas pequeñas que busquen estimar el color promedio mas cercano al del pixel que va a representar.

Para esto, primero cargamos la imagenes que representaran la paleta de color dentro de la imagen y las cuales se convertiran en texturas para los pixeles dentro de la implementacion del shader. Seguidamente se cargará la imagen a rasterizar y se buscará el color medio que corresponde a cada píxel en cada una de sus resoluciones por medio del shader, y en base a la eleccion, se colocara la imagen designada para ese rango de color, formando asi el mosaico.

{{< p5-iframe id="shaders" sketch= "/vc/sketches/mosaico.js">}}

## Referencias

https://www.youtube.com/watch?v=nnlAH1zDBDE

https://www.youtube.com/watch?v=-YS5t1R-GO8

https://github.com/aferriss/p5jsShaderExamples/blob/gh-pages/2_texture-coordinates/2-2_tiles/sketch.js

https://visualcomputing.github.io/