export function updateGame(net, player1, player2, ball, keyUp, keyDown, secondPassed) {
	player1.update(keyUp, keyDown, secondPassed);
	player2.update(keyUp, keyDown, secondPassed);
	ball.update(secondPassed);
}

export function resetGame(ball, player1, player2) {
	ball.reset();
	player1.reset();
	player2.reset();
}
