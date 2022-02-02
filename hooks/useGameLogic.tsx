import { useState, useEffect, useRef } from "react";


import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { Draw } from "../components/Draw"
import { Player } from "../components/Player"
import { Ball } from "../components/Ball"

export function useGameLogic(canvasRef, width, height) {
	const draw = new Draw(canvasRef, 1000, 600)
	const player1 = new Player(10, height /2, 4, 20, 120, draw);
	const player2 = new Player(width - 30, height /2, 4, 20, 120, draw);
	const ball = new Ball(width /2, height /2, 15, 4, 0.5, player1, player2, draw);

	/* let initialGameState = {
	}; */
	/*const [gameState, setGameState] = useState(initialGameState);*/
	player1.draw();
	player2.draw();
	ball.draw();
	return {player1, player2, ball}
}
