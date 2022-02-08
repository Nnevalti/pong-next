export class Ball {
	x: number;
	y: number;
	r: number;
	speed: number;
	maxSpeed: number;
	defaultSpeed: number;
	acceleration: number;

	constructor(canvasWidth, canvasHeight, r, speed, frameRate, maxSpeed, acceleration, p1, p2) {
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.x = canvasWidth/2;
		this.y = canvasHeight/2;
		this.r = r;

		this.frameRate = frameRate;
		this.defaultSpeed = speed;
		this.defaultMaxSpeed = maxSpeed;
		this.defaultAcceleration = acceleration;

		this.speed = speed/frameRate;
		this.maxSpeed = maxSpeed/frameRate;
		this.acceleration = acceleration / frameRate;

		this.velocity = {dx: 0, dy: 0};
		this.p1 = p1;
		this.p2 = p2;
		this.reset();
	}

	// Collision between ball and Paddle
	collision() {
		if (this.x < this.canvasWidth/2) {
			if (((this.x + this.velocity.dx) - this.r) <= this.p1.x + this.p1.width)
			{
				if ((this.y + this.r >= this.p1.y && this.y + this.r <= this.p1.y + this.p1.height)
				|| (this.y - this.r >= this.p1.y && this.y - this.r <= this.p1.y + this.p1.height))
				{
					this.x = (this.p1.x + this.p1.width) + this.r;
					this.r = 10;
					return true;
				}
			}
		}
		else {
			if (((this.x + this.velocity.dx) + this.r) >= this.p2.x)
			 {
				 if ((this.y + this.r >= this.p2.y && this.y + this.r <= this.p2.y + this.p2.height)
				 || ( this.y - this.r >= this.p2.y && this.y - this.r <= this.p2.y + this.p2.height))
				 {
					 this.x = this.p2.x - this.r;
					 this.r = 10;
					 return true
				 }
			 }
		}
		return false;
	}


	handleCollision() {
		// Collision on axis Y border  of the board game
		if((this.y + this.velocity.dy) - this.r <= 0 || (this.y + this.velocity.dy) + this.r >= this.canvasHeight)
		{
			this.velocity.dy = -this.velocity.dy;
			this.r = 10;
		}

		if(this.collision())
		{
			// Here we try to change the ball angle when hitting one side of the Paddle
			// To do this we determine where the ball collide with the paddle (in px)
			// then we normalize this number to get a number between -1 and 1.
			// With this value we can caculate the angle in radian
			// And thanks to some trigo things we get the new x and y direction for our ball
			// This conserve the speed and only change the angle but to make the game a little
			// bit harder i increment the speed value every time the ball hit a paddle
			// Where did the ball hit the Paddle
			let p = (this.x < this.canvasWidth/2) ? this.p1 : this.p2;
			let collidePoint = this.y - (p.y + p.height/2);
			// Normalization (min = -1 and max = 1)
			collidePoint = collidePoint/(p.height/2);
			// Caculate angle in Radian
			let angleRad = collidePoint * Math.PI/4
			let dir = (this.x < this.canvasWidth/2) ? 1 : -1;
			this.velocity.dx = dir * (this.speed * Math.cos(angleRad));
			this.velocity.dy = this.speed * Math.sin(angleRad);
			if (this.speed + this.acceleration < this.maxSpeed)
			{
				this.speed += this.acceleration;
				this.acceleration += this.defaultAcceleration;
			}
			return true;
		}
		return false;
	}

	changeFrameRate(newFrameRate)
	{
		this.frameRate = newFrameRate;
		this.speed = this.defaultSpeed/this.frameRate;
		this.maxSpeed = this.defaultMaxSpeed/this.frameRate;
		this.acceleration = this.defaultAcceleration/this.frameRate;

		// resetting speed to default value
		let angle1 = this.velocity.dx / this.speed;
		let angle2 = this.velocity.dy / this.speed;
		let dir;
		if (((this.x < this.canvasWidth/2) && this.velocity.dx < 0))
			dir = -1
		else if (((this.x < this.canvasWidth/2) && this.velocity.dx > 0))
			dir = 1;
		else if ((this.x > this.canvasWidth/2) && this.velocity.dx > 0)
			dir = 1;
		else
			dir = -1
		this.speed = this.defaultSpeed/this.frameRate;
		this.velocity.dx = dir * (this.speed * Math.cos(angle1));
		this.velocity.dy = this.speed * Math.sin(angle2);
	}

    reset() {
        // Get old direction before replacing the ball
        let dir = (this.x < this.canvasWidth/2) ? 1 : -1;
        // Caculating angle in degrees cos(angleRad) and sin(angleRad)
        let angle1 = this.velocity.dx / this.speed;
        let angle2 = this.velocity.dy / this.speed;
        // Replacing the ball in the center of the canvas
        this.x = this.canvasWidth /2;
        this.y = this.canvasHeight / 2;
        // resetting speed to default value
        this.speed = this.defaultSpeed/this.frameRate;
        this.velocity.dx = dir * (this.speed * Math.cos(angle1));
        this.velocity.dy = this.speed * Math.sin(angle2);
    }

	update() {
		if (this.r < 15)
		{
			this.r += 1;
			console.log("Speed: ", this.speed, ", frameRate: ", this.frameRate, ", Speed*frameRate = ", (this.speed*this.frameRate), " ? ", this.defaultSpeed);

		}
		if (!this.handleCollision())
		{
			this.x += this.velocity.dx;
			this.y += this.velocity.dy;
		}

		//Collision with Players

        // Goal Player two
        if(this.x - this.r <= 0)
        {
            /* P2_Score++; */
            this.reset();
        }
        //Goal player one
        if(this.x + this.r >= this.canvasWidth)
        {
            /* P1_Score++; */
            this.reset();
        }
    }
}
