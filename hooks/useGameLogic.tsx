/* THIS FILE IS DEPRECATED I OPTED FOR ANOTHER LOGIC */


import { useState, useEffect, useRef } from "react";


import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { Draw, Player, Ball, Net } from "../class"

export function useGameLogic(canvasRef, canvasWidth, canvasHeight) {

	/* Neon effect */
	let neonEffect = 0.01;
	let firstNeon = 10;
	let secondNeon = 20;
	let neonColor = 0;
	let colorChange = 1;

	const animateNeon = canvas => {
		canvas.style.boxShadow = "inset 0 0 5px #fff,\
			inset 0 0 "+ firstNeon +"px rgb(127, 0, "+ neonColor +"),\
			inset 0 0 "+ secondNeon +"px rgb(127, 0, "+ neonColor +"),\
			0 0 5px #fff,\
			0 0 "+ firstNeon +"px rgb(127, 0, "+ neonColor +")";
		firstNeon += neonEffect;
		secondNeon += neonEffect;
		neonColor += colorChange;
		if (firstNeon <= 10 || firstNeon >= 30)
			neonEffect *= -1;
		if (neonColor < 1 || neonColor > 254)
			colorChange *= -1;
	}

	// Initialize Everything
	const draw = new Draw(canvasRef, canvasWidth, canvasHeight)
	const net = new Net(canvasWidth/100, (canvasWidth/100) * 2, draw, canvasWidth, canvasHeight);
	const player1 = new Player(10, canvasHeight /2, 4, 20, 120, draw);
	const player2 = new Player(canvasWidth - 30, canvasHeight /2, 4, 20, 120, draw);
	const ball = new Ball(canvasWidth /2, canvasHeight /2, 15, 4, 0.5, player1, player2, draw);

	draw.clear();
	net.draw();
	player1.draw();
	player2.draw();
	ball.draw();
	animateNeon(canvasRef);
	return {player1, player2, ball}
}
