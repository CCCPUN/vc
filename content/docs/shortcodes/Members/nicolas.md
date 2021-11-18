# Nicolas Pardo
Interest in algorithms and data structures, likes competitive programming, is in a team with Jherson "Tovarisch" Medina.

Based on  [this](https://michaelbach.de/ot/cog-Delboeuf/index.html).\

Both yellow circles have the same size, but in every iteration looks like their size change but is an ilusion.

## Optical illusion
{{< p5-global-iframe id="Nicolas" width="820" height="425" >}}

    function setup() {
    createCanvas(800, 400);
    frameRate(60);
    }

    function draw(){
        var on = 0;
        background(135,135,135);
        if(second()%5 == 0){
            if(on){
                on = 0;
            }else{
                on = 1;
            }
        }
        let c = color(255,204,0);
        fill(c);
        circle(200,200,60);
        circle(400,200,60);
        if(on == 1){
            noFill();
            circle(200,200,300);
            circle(400,200,70);
        }
        if(on == 0){
            noFill();
            circle(200,200,70);
            circle(400,200,300);
        }
    }
{{< /p5-global-iframe >}}


