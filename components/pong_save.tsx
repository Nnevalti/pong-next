
const useCanvas: React.FC<{}> = draw => {

	const canvasRef = useRef(null)

	let frameCount = 0
	let animationFrameId

	let pressedKeys = [{
		"oneUp": false
	},{
		"oneDown": false
	},{
		"twoUp": false
	},{
		"twoDown": false
	}];

	let neonEffect = 0.01;
	let firstNeon = 10;
	let secondNeon = 20;
	let neonColor = 0;
	let colorChange = 1;

	const animateNeon = canvas => {
		canvas.style.boxShadow = "inset 0 0 5px #fff,\
			inset 0 0 "+ firstNeon +"px rgb(127, 0, "+ neonColor +"),\
			inset 0 0 "+ secondNeon +"px rgb(127, 0, "+ neonColor +"),\
			0 0 5px #fff,\
			0 0 "+ firstNeon +"px rgb(127, 0, "+ neonColor +")";
		firstNeon += neonEffect;
		secondNeon += neonEffect;
		neonColor += colorChange;
		if (firstNeon <= 10 || firstNeon >= 30)
			neonEffect *= -1;
		if (neonColor < 1 || neonColor > 254)
			colorChange *= -1;
	}

	const movePlayers = pressedKeys => {
		if(pressedKeys["oneUp"])
			playerOne.moveUp();
		if(pressedKeys["oneDown"])
			playerOne.moveDown();
		if(pressedKeys["twoUp"])
			playerTwo.moveUp();
		if(pressedKeys["twoDown"])
			playerTwo.moveDown();
	}

	const collisionFirstPlayer = (ball, paddle) => {
		if (ball.x + ball.velocity.dx <= paddle.x + paddle.width
			&& ball.y + ball.velocity.dy >= paddle.y
			&& ball.y + ball.velocity.dy <= paddle.y + paddle.height)
			return true;
		else
			return false;
	}

	const collisionSecondPlayer = (ball, paddle) => {
		if (ball.x + ball.side + ball.velocity.dx >= paddle.x
			&& ball.y + ball.velocity.dy >= paddle.y
			&& ball.y + ball.velocity.dy <= paddle.y + paddle.height)
			return true;
		else
			return false;
	}

	class playerPaddle
	{
		constructor(x, y, dy, width, height, ctx){
			this.x = x;
			this.y = y - (height/2);
			this.dy = dy;
			this.width = width;
			this.height = height;
		}

		draw = () => {
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.fillStyle = 'white';
			ctx.fill();
			ctx.closePath();
		}

		moveUp = () =>
		{
			if(this.y > 0){
				this.y = this.y - this.dy;
				this.draw();
			}
		}

		moveDown = () =>
		{
			if(this.y + this.height < canvas.height){
				this.y = this.y + this.dy;
				this.draw();
			}
		}
	}

	class Ball
	{
		constructor(x, y, side, speed, ctx){
			this.x = x;
			this.y = y;
			this.side = side;
			this.speed = speed;
			this.velocity = {dx: speed, dy: speed};
		}

		draw = () => {
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.side, this.side);
			ctx.fillStyle = 'white';
			ctx.fill();
			ctx.closePath();
		}

		reset = () => {
			this.x = canvas.width /2;
			this.y = canvas.height / 2;
		}

		animate = () => {
			this.x += this.velocity.dx;
			this.y += this.velocity.dy;

			// Collision on axis Y border  of the board game
			if(this.y <= 0 || this.y + this.side >= canvas.height)
				this.velocity.dy = -this.velocity.dy;

			if(collisionFirstPlayer(ball, playerOne))
				this.velocity.dx = -this.velocity.dx;
			if(collisionSecondPlayer(ball, playerTwo))
				this.velocity.dx = -this.velocity.dx;

			// Goal Player two
			if(this.x <= 0)
			{
				playerTwoScore++;
				displayScoreBoard();
				this.reset();
				newScore = true;
				start = new Date().getTime();
				end = start;
			}
			//Goal player one
			if(this.x + this.side >= canvas.width)
			{
				playerOneScore++;
				displayScoreBoard();
				this.reset();
				newScore = true;
				start = new Date().getTime();
				end = start;
			}
		}
	}

	useEffect(() => {

		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')

		canvas.width = 1000;
		canvas.height = 500;

		let playerOne = new playerPaddle(10, canvas.height /2, 4, 10, 120, ctx);
		let playerTwo = new playerPaddle(canvas.width - 20, canvas.height /2, 4, 10, 120, ctx);
		let ball = new Ball(canvas.width /2, canvas.height /2, 15, 4, ctx);

		document.addEventListener('keydown', evt => {
			if(evt.keyCode == 90)
				pressedKeys["oneUp"] = true;
			if(evt.keyCode == 83)
				pressedKeys["oneDown"] = true;
			if(evt.keyCode == 40)
				pressedKeys["twoDown"] = true;
			if(evt.keyCode == 38)
				pressedKeys["twoUp"] = true;
		});

		document.addEventListener('keyup', evt => {
			console.log(evt.keyCode);
			if(evt.keyCode == 90)
				pressedKeys["oneUp"] = false;
			if(evt.keyCode == 83)
				pressedKeys["oneDown"] = false;
			if(evt.keyCode == 40)
				pressedKeys["twoDown"] = false;
			if(evt.keyCode == 38)
				pressedKeys["twoUp"] = false;
		});

		const render = () => {
			frameCount++;
			animateNeon(canvas)
			draw(ctx)
			playerOne.draw(ctx)
			playerTwo.draw(ctx)
			ball.draw()

			animationFrameId = window.requestAnimationFrame(render)
		}

		render()

		console.log("W: ", canvas.width, " ,H: ", canvas.height)
		return () => {
				window.cancelAnimationFrame(animationFrameId)
		}
	}, [draw])

	return canvasRef
}

const Canvas = (props) => {

	const { draw, canvasRef, ...rest } = props

	return (
		<>
			<canvas className="canvas" ref={canvasRef} {...rest}  ></canvas>
		</>
	);
};

const Canvas: Reac.FC<{}> = () => {
	const draw = (ctx) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
	}

	return <Pong draw={draw} />
}
