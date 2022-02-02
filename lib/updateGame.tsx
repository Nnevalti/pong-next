export function updateGame(net, player1, player2, ball, keyUp, keyDown) {
	player1.update(keyUp, keyDown);
	player2.update(keyUp, keyDown);
	ball.update();
}
