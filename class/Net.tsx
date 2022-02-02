export class Net
{
	x: number;
	y: number;
	width: number;
	height: number;

	constructor(width, height, draw, canvasWidth, canvasHeight) {
		this.x = canvasWidth/2 - width/2;
		this.y = 0;
		this.width = width;
		this.height = height;
		this.drawClass = draw;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
	}

    draw()
    {
        for (let i = 0 ;i <= this.canvasHeight; i += (this.canvasWidth/100) * 3)
        {
			this.drawClass.drawRectangle(this.x, this.y + i, this.width, this.height, 'white');
        }
    }
}
