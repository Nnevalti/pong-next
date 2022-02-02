export class Player {
	x: nulber;
	y: number;
	dy: number;
	width: number;
	height: number;

	constructor(canvas, x, y, dy, width, height, draw) {
		this.canvas = canvas;
		this.x = x;
		this.y = y - (height/2);
		this.dy = dy;
		this.width = width;
		this.height = height;
		this.keyUp = false;
		this.keyDown = false;

		this.drawClass = draw;
	}

	draw() {
		this.drawClass.drawRectangle(this.x, this.y, this.width, this.height, 'white');
	}

	update() {
		if(this.keyUp) {
			if(this.y > 0)
				this.y -= this.dy;
			else
				this.y = 0;
		}
		if(this.keyDown) {
			if(this.y + this.height < this.canvas.height)
				this.y += this.dy;
			else
				this.y = this.canvas.height - this.height;
		}
	}
}
