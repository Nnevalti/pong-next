import { useState, useEffect, useRef } from "react";

export function useRender(canvasRef, draw, net, player1, player2, ball) {

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

	/* Game draw */
	draw.clear();
	net.draw();
	player1.draw();
	player2.draw();
	ball.draw();
	animateNeon(canvasRef);
}
