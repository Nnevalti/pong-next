export class Ball {
	x: number;
	y: number;
	r: number;
	speed: number;
	defaultSpeed: number;
	acceleration: number;

	constructor(x, y, r, speed, acceleration, p1, p2, draw) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.speed = speed;
		this.defaultSpeed = speed;
		this.acceleration = acceleration;
		this.velocity = {dx: speed, dy: speed};
		this.p1 = p1;
		this.p2 = p2;
		this.drawClass = draw;

	}

	draw() {
		this.drawClass.drawCircle(this.x, this.y, this.r, 'white');
	}

    // Collision between ball and Paddle
    collision() {
        if (this.x < canvas.width/2)
        {
            return (this.y > p1.y && this.y < p1.y + p1.height
                    && this.x - this.r < p1.x + p1.width);
        }
        else
        {
            return (this.y > p2.y && this.y < p2.y + p2.height
                && this.x + this.r > p2.x);
        }
    }

    reset() {
        // Get old direction before replacing the ball
        let dir = (this.x < canvas.width/2) ? 1 : -1;
        // Caculating angle in degrees cos(angleRad) and sin(angleRad)
        let angle1 = this.velocity.dx / this.speed;
        let angle2 = this.velocity.dy / this.speed;
        // Replacing the ball in the center of the canvas
        this.x = canvas.width /2;
        this.y = canvas.height / 2;
        // resetting speed to default value
        this.speed = this.defaultSpeed;
        this.velocity.dx = dir * (ball.speed * angle1);
        this.velocity.dy = ball.speed * angle2;
    }

    update() {
        this.x += this.velocity.dx;
        this.y += this.velocity.dy;

        // Collision on axis Y border  of the board game
        if(this.y - this.r <= 0
            || this.y + this.r >= canvas.height)
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
            var p = (this.x < canvas.width/2) ? p1 : p2;
            let collidePoint = this.y - (p.y + p.height/2);
            console.log(collidePoint);
            // Normalization (min = -1 and max = 1)
            collidePoint = collidePoint/(p.height/2);
            console.log(collidePoint);
            // Caculate angle in Radian
            let angleRad = collidePoint * Math.PI/4
            let dir = (this.x < canvas.width/2) ? 1 : -1;
            this.velocity.dx = dir *( ball.speed * Math.cos(angleRad));
            this.velocity.dy = ball.speed * Math.sin(angleRad);
            this.speed += this.acceleration;
        }

        // Goal Player two
        if(this.x - this.r <= 0)
        {
            P2_Score++;
            this.reset();
        }
        //Goal player one
        if(this.x + this.r >= canvas.width)
        {
            P1_Score++;
            this.reset();
        }
    }
}
