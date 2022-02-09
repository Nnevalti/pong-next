export class Player {
	x: nulber;
	y: number;
	dy: number;
	width: number;
	height: number;

	constructor(name, canvasWidth, canvasHeight, x, y, dy, width, height, color) {
		this.name = name;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.x = x;
		this.y = y - (height/2);
		this.dy = dy;
		this.width = width;
		this.height = height;
		this.color = color;
		this.step = 0;
		this.timing = 15;
	}

	update(keyUp, keyDown) {
		if(keyUp && !keyDown) {
			if(this.y > 0)
				this.y -= this.dy;
			else
				this.y = 0;
		}

		if(keyDown && !keyUp) {
			if(this.y + this.height < this.canvasHeight)
				this.y += this.dy;
			else
				this.y = this.canvasHeight - this.height;
		}
	}
}
