export function drawGame(canvas, draw, net, player1, player2, ball, score) {
	/* Game draw */
	draw.clear();
	/*draw.drawRectangle(0, 0, canvas.width, canvas.height, "rgba(0, 0, 0, 0.1)");*/
	draw.drawNet(net);
	draw.drawPaddle(player1);
	draw.drawPaddle(player2);
	draw.drawBall(ball);
	draw.drawScore("0", "0", score)
	draw.animateNeon(canvas);
}
