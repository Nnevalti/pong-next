export class Draw {
	canvasEl: HTMLCanvasElement;
	context: CanvasRenderingContext2D;

	constructor(canvas, width, height) {
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
		this.neonEffect = 0.01;
		this.firstNeon = 10;
		this.secondNeon = 20;
		this.neonColor = 0;
		this.colorChange = 1;
		this.degrees = 0;
		this.particles = [];
		this.particleInit = false;
	}

	/* General Drawind functions*/
	clear() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	drawRectangle(x: number, y: number, width: number, height: number, color: string) {
		this.context.save();
		this.context.fillStyle = color;
		this.context.shadowColor = "rgb(127, 0, "+ this.neonColor +")";
		this.context.shadowBlur = this.firstNeon + 10;
		this.context.fillRect(x, y, width, height);
		this.context.restore();
	}

	drawArc(x: number, y: number, radius: number, color: string, degrees: number) {
		this.context.save();
		this.context.beginPath();
		this.context.arc(x, y, radius, (degrees * (Math.PI/180)), (degrees * (Math.PI/180) + (3/2) * Math.PI));
		this.context.lineWidth = 20;
		this.context.strokeStyle = color;
		this.context.shadowColor = "rgb(127, 0, "+ this.neonColor +")";
		this.context.shadowBlur = this.firstNeon + 10;
		this.context.stroke();
		this.context.restore();
	}

	drawCircle(x: number, y: number, radius: number, color: string) {
		this.context.save();
		this.context.beginPath();
		this.context.arc(x, y, radius, 0, 2 * Math.PI);
		this.context.lineWidth = 0;
		this.context.strokeStyle = color;
		this.context.shadowColor = "rgb(127, 0, "+ this.neonColor +")";
		this.context.shadowBlur = this.firstNeon + 10;
		this.context.fillStyle = color;
		this.context.fill();
		this.context.stroke();
		this.context.restore();
	}

	drawText(text, x, y, size, color) {
		this.context.save();
		this.context.fillStyle = color;
		this.context.font = size + "px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";
		this.context.fillText(text, x, y);
		this.context.restore();
	}

	/* Game Object */
	drawBall(ball) {
		this.drawCircle(ball.x, ball.y, ball.r, 'white');
	}

	drawPaddle(paddle) {
		this.drawRectangle(paddle.x, paddle.y, paddle.width, paddle.height, "white");

		if (paddle.color !== "rgba(255, 255, 255, 0.8)" && paddle.step <= paddle.timing)
		{
			/*console.log(this.step);
			console.log('rgba(' + (245 + (this.step/this.timing * 10)) + ', ' + (203 + (this.step/this.timing * 52)) + ', '+ (66 + (this.step/this.timing * 189)) + ', 0.8)')*/
			paddle.color = "rgb(" + (127 + (paddle.step/paddle.timing * 128)) + ", " + (0 + (paddle.step/paddle.timing * 255)) + ", " + (this.neonColor + (paddle.step/paddle.timing * (255 - (this.neonColor % 255)))) + ", 0.8)"
			this.drawRectangle(paddle.x, paddle.y, paddle.width, paddle.height, paddle.color);
			/*paddle.color = 'rgba(' + (245 + (paddle.step/paddle.timing * 10)) + ', ' + (203 + (paddle.step/paddle.timing * 52)) + ', '+ (66 + (paddle.step/paddle.timing * 189)) + ', 0.8)';*/
			paddle.step++;
		} else {
			paddle.step = 0;
			paddle.color = 'rgba(255, 255, 255, 0.8)'
		}
	}

	drawNet(net)
	{
		for (let i = 0 ;i <= net.canvasHeight; i += (net.canvasWidth/100) * 3)
		{
			this.drawRectangle(net.x, net.y + i, net.width, net.height, 'white');
		}
	}

	drawScore(score) {
		this.drawText(score.p1_Score, score.x1, score.y1, score.size, 'white');
		this.drawText(score.p2_Score, score.x2, score.y2, score.size, 'white');
	}

	drawCenteredText(text, x, y, size, color) {
		this.context.save();
		this.context.font = size + "px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";
		this.context.fillStyle = color;
		this.context.textBaseline = "middle";
		this.context.textAlign = "center";
		this.context.shadowColor = "rgb(127, 0, "+ this.neonColor +")";
		this.context.shadowBlur = this.firstNeon + 10;
		this.context.fillText(text, x, y);
		this.context.restore();
	}

	drawPauseButton() {
		let pauseSizeX = this.canvas.height/10;
		let pauseSizeY = this.canvas.height/10;
		this.drawRectangle(0, 0, this.canvas.width, this.canvas.height, "rgba(0, 0, 0, 0.1)")
		this.drawRectangle(((this.canvas.width/2) - pauseSizeX/2), ((this.canvas.height/2) - pauseSizeY/2), pauseSizeX/3, pauseSizeY, 'white');
		this.drawRectangle(((this.canvas.width/2) + pauseSizeX/6), ((this.canvas.height/2) - pauseSizeY/2), pauseSizeX/3, pauseSizeY, 'white');
	}

	drawLoading(loading) {
		this.drawRectangle(0, 0, this.canvas.width, this.canvas.height, "rgba(0, 0, 0, 0.5)");
		this.drawArc(this.canvas.width/2, this.canvas.height/2, this.canvas.height/4, "white", this.degrees);
		this.drawCenteredText(loading, this.canvas.width/2, this.canvas.height/2, 45, "white");
		this.degrees += 6;
		if (this.degrees === 360)
			this.degrees = 0;
	}

	drawCountDown(count) {
		if (count === 0)
		{
			this.particles = [];
			this.particleInit = false;
			count = "GO !!!"
		}
		this.drawCenteredText(count, this.canvas.width/2, this.canvas.height/2, 45, "white");
	}

	drawGoalParticle(ball) {
		if (this.particleInit === false)
		{
			for (let i = 0; i < 50; i++) {
				this.particles.push({
					'x': ball.x,
					'y': ball.y,
					'dy': (5- 20 * Math.random()) * 1.5,
					'dx': (5- 20 * Math.random()) * 1.5,
					'r': (5 + 10 * Math.random())
				})
			}
			this.particleInit = true;
		} else if (this.particleInit === true) {
			for (let i = 0; i < 50; i++) {
				this.drawCircle(this.particles[i].x, this.particles[i].y, this.particles[i].r, 'white');
				this.particles[i].x += this.particles[i].dx;
				this.particles[i].y += this.particles[i].dy;
				if (this.particles[i].x <= 0 || this.particles[i].x >= this.canvas.width )
					this.particles[i].dx = -this.particles[i].dx;
				if (this.particles[i].y <= 0 || this.particles[i].y >= this.canvas.height )
					this.particles[i].dy = -this.particles[i].dy;
			}
		}
	}

	drawGoal(ball, playersGoal, p1, p2) {
		if (playersGoal["1"])
			this.drawCenteredText((p1.name + " Scores !!!"), this.canvas.width/2, ((this.canvas.height/2) - (this.canvas.height/10)), 45, 'white');
		else if (playersGoal["2"])
			this.drawCenteredText((p2.name + " Scores !!!"), this.canvas.width/2, ((this.canvas.height/2) - (this.canvas.height/10)), 45, 'white');
		this.drawGoalParticle(ball);
	}

	/* Neon effect */
	animateNeon(canvas) {
		canvas.style.boxShadow = "inset 0 0 2px #fff,\
			inset 0 0 "+ this.firstNeon +"px rgb(127, 0, "+ this.neonColor +"),\
			inset 0 0 "+ this.secondNeon +"px rgb(127, 0, "+ this.neonColor +"),\
			0 0 5px #fff,\
			0 0 "+ this.firstNeon +"px rgb(127, 0, "+ this.neonColor +")";
		this.firstNeon += this.neonEffect;
		this.secondNeon += this.neonEffect;
		this.neonColor += this.colorChange;
		if (this.firstNeon <= 10 || this.firstNeon >= 30)
			this.neonEffect *= -1;
		if ((this.neonColor % 255) === 0)
			this.colorChange *= -1;
	}
}
