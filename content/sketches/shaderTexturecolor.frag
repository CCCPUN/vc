precision mediump float;
uniform sampler2D texture;
uniform sampler2D imge0;
uniform sampler2D imge1;
uniform sampler2D imge2;
uniform sampler2D imge3;
uniform sampler2D imge4;
uniform sampler2D imge5;
uniform sampler2D imge6;
uniform sampler2D imge7;
uniform sampler2D imge8;
uniform sampler2D imge9;
uniform sampler2D imge10;
uniform sampler2D imge11;
uniform sampler2D imge12;

uniform float resolution;
uniform float lngImg;

varying vec4 vVertexColor;
varying vec2 vTexCoord;
void main() {
    vec2 symbolCoord = vTexCoord * resolution;
    vec2 imageCoord = floor(symbolCoord);
    symbolCoord = symbolCoord - imageCoord;
    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);
    vec4 pixelColor = texture2D(texture, imageCoord);
    float mean = 0.333*pixelColor.r + 0.3333*pixelColor.g +  0.333*pixelColor.b;
    int inx = int((mean * lngImg+0.001));
   
    switch(inx){
    case 0:
        gl_FragColor = texture2D(imge0, symbolCoord);
        break;
    case 1:
        gl_FragColor = texture2D(imge1, symbolCoord);
        break;
    case 2:
        gl_FragColor = texture2D(imge2, symbolCoord);
        break;
    case 3:
        gl_FragColor = texture2D(imge3, symbolCoord);
        break;
    case 4:
        gl_FragColor = texture2D(imge4, symbolCoord);
        break;
    case 5:
        gl_FragColor = texture2D(imge5, symbolCoord);
        break;
    case 6:
        gl_FragColor = texture2D(imge6, symbolCoord);
        break;
    case 7:
        gl_FragColor = texture2D(imge7, symbolCoord);
        break;
    case 8:
        gl_FragColor = texture2D(imge8, symbolCoord);
        break;
    case 9:
        gl_FragColor = texture2D(imge9, symbolCoord);
        break
    case 10:
        gl_FragColor = texture2D(imge10, symbolCoord);
        break;
    case 11:
        gl_FragColor = texture2D(imge11, symbolCoord);
        break;
    default:
        gl_FragColor = texture2D(imge12, symbolCoord);
    } 
}