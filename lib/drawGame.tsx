export function drawGame(draw, net, player1, player2, ball) {
	/* Game draw */
	draw.clear();
	draw.drawNet(net);
	draw.drawPaddle(player1);
	draw.drawPaddle(player2);
	draw.drawBall(ball);
}
