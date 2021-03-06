export class Player {
	x: number;
	y: number;
	dy: number;
	width: number;
	height: number;

	constructor(name, canvasWidth, canvasHeight, x, dy, width, height, color) {
		this.name = name;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.defaultX = x;
		this.x = this.defaultX;
		this.y = (canvasHeight/2) - (height/2);
		this.dy = dy;
		this.width = width;
		this.height = height;
		this.color = color;
		this.step = 0;
		this.timing = 15;
	}

	reset() {
		this.x = this.defaultX;
		this.y = (this.canvasHeight/2) - (this.height/2);
	}

	update(keyUp, keyDown, secondPassed) {
		// console.log(this.dy * secondPassed);
		if(keyUp && !keyDown) {
			if(this.y > 0)
				this.y -= this.dy * secondPassed;
			else
				this.y = 0;
		}

		if(keyDown && !keyUp) {
			if(this.y + this.height < this.canvasHeight)
				this.y += this.dy * secondPassed;
			else
				this.y = this.canvasHeight - this.height;
		}
	}
}
