export class Net
{
	x: number;
	y: number;
	width: number;
	height: number;

	constructor(width, height, canvasWidth, canvasHeight) {
		this.x = canvasWidth/2 - width/2;
		this.y = 0;
		this.width = width;
		this.height = height;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
	}


}
