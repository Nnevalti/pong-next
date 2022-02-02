export class Draw {
	canvasEl: HTMLCanvasElement;
	context: CanvasRenderingContext2D;

	constructor(canvas, width, height) {
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
	}

	/* General Drawind functions*/
	clear() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

	/* Game Object */
	drawBall(ball) {
		/*this.drawClass.drawCircle(this.x, this.y, this.r + 1, 'black'); */
		this.drawCircle(ball.x, ball.y, ball.r, 'white');
	}

	drawPaddle(paddle) {
		this.drawRectangle(paddle.x, paddle.y, paddle.width, paddle.height, 'white');
	}

	drawNet(net)
	{
		for (let i = 0 ;i <= net.canvasHeight; i += (net.canvasWidth/100) * 3)
		{
			this.drawRectangle(net.x, net.y + i, net.width, net.height, 'white');
		}
	}
}
