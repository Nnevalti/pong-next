export class Ball {
	x: number;
	y: number;
	r: number;
	speed: number;
	defaultSpeed: number;
	acceleration: number;

	constructor(canvasWidth, canvasHeight, r, speed, acceleration, p1, p2) {
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.x = canvasWidth/2;
		this.y = canvasHeight/2;
		this.r = r;
		this.speed = speed;
		this.defaultSpeed = speed;
		this.acceleration = acceleration;
		this.velocity = {dx: 0, dy: 0};
		this.p1 = p1;
		this.p2 = p2;
		this.reset();
	}

    // Collision between ball and Paddle
    collision() {
        if (this.x < this.canvasWidth/2)
        {
            return (this.y >= this.p1.y && this.y <= this.p1.y + this.p1.height
                    && this.x - this.r < this.p1.x + this.p1.width);
        }
        else
        {
            return (this.y > this.p2.y && this.y < this.p2.y + this.p2.height
                && this.x + this.r > this.p2.x);
        }
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
        this.speed = this.defaultSpeed;
        this.velocity.dx = dir * (this.speed * Math.cos(angle1));
        this.velocity.dy = this.speed * Math.sin(angle2);
    }

    update() {
        this.x += this.velocity.dx;
        this.y += this.velocity.dy;

        // Collision on axis Y border  of the board game
        if(this.y - this.r <= 0
            || this.y + this.r >= this.canvasHeight)
        {
            this.velocity.dy = -this.velocity.dy;
        }
        //Collision with Players
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
            var p = (this.x < this.canvasWidth/2) ? this.p1 : this.p2;
            let collidePoint = this.y - (p.y + p.height/2);
            // Normalization (min = -1 and max = 1)
            collidePoint = collidePoint/(p.height/2);
            // Caculate angle in Radian
            let angleRad = collidePoint * Math.PI/4
            let dir = (this.x < this.canvasWidth/2) ? 1 : -1;
            this.velocity.dx = dir * (this.speed * Math.cos(angleRad));
            this.velocity.dy = this.speed * Math.sin(angleRad);
            this.speed += this.acceleration;
        }

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
