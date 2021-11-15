# Jherson Medina
Interest in algorithms and data structures, likes competitive programming, is in a team with Nicolas "Klaus" Pardo.
## Optical Ilussion
Based on  [this](https://michaelbach.de/ot/lum-contourAdapt/index.html).\
Look at the rotating cross, onces it stops, both circles dissapear.\
Click the image to start.

{{< p5-instance-div id="1" >}}
	let jump = 0;
	let count = 0;
	var on = 0; 
	var it = 0;
	p5.setup = function() {
		p5.createCanvas(400, 400);
		p5.frameRate(60);
	};
	p5.draw = function() {
		p5.background(127, 127, 127);

		//Drawing fixed circles
		p5.push();
		p5.noStroke();
		p5.fill(132, 132, 132);
		p5.circle(125, 220, 80);
		p5.circle(275, 220, 80);
		p5.pop();

		p5.push();
		//middle X
		p5.translate(200, 200);
		p5.stroke(0, 255, 0);
		p5.strokeWeight(4);
		if (on) {
			p5.rotate(p5.frameCount * -0.05);
		}
		p5.rect(-8, 0, 16, 1);
		p5.rect(0, -8, 1, 16);
		p5.pop();

		it += 1;
		//flickering circles
		if (on) {
			if (p5.floor(it / 5) % 2 == 0) {
				//black circle
				p5.stroke(0, 0, 0);
				p5.strokeWeight(4);
				p5.noFill();
				p5.circle(125, 220, 80);
				p5.circle(275, 220, 80);
			} else {
				//white circle
				p5.stroke(255, 255, 255);
				p5.strokeWeight(4);
				p5.noFill();
				p5.circle(125, 220, 80);
				p5.circle(275, 220, 80);
			}
		}
		//optical illusion lasts 8 seconds
		if (it % 480 == 0) {
			on = 0;
		}
	}
	p5.mouseClicked = function() {
		on = 1;
		it = 480;
	}
{{< /p5-instance-div >}}
