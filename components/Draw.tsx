export class Draw {
	canvasEl: HTMLCanvasElement;
	context: CanvasRenderingContext2D;

	constructor(canvasRef, width, height) {
		this.canvas = canvasRef;
		this.context = this.canvas.getContext("2d");
		this.canvas.width = width;
		this.canvas.height = height;
	}

	clear() {
		this.context.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
	}

	drawRectangle(x: number, y: number, width: number, height: number, color: string) {
		this.context.save()
		this.context.fillStyle = color;
		this.context.fillRect(x, y, width, height);
		this.context.restore()
	}

	drawCircle(x: number, y: number, radius: number, color: string) {
		this.context.save()
		this.context.beginPath();
		this.context.arc(x, y, radius, 0, 2 * Math.PI, true);
		this.context.fillStyle = color;
		this.context.fill();
		this.context.stroke();
		this.context.restore()
	}
}
