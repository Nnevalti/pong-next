export class Score
{
	x: number;
	y: number;
	width: number;
	height: number;

	constructor(canvasWidth, canvasHeight) {
		this.x1 = canvasWidth/4;
		this.y1 = canvasHeight/10;
		this.x2 = 3*(canvasWidth/4);
		this.y2 = canvasHeight/10;
		this.size = 45;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.p1_Score = 0;
		this.p2_Score = 0;
	}


}
