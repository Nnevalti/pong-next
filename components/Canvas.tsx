import React from "react";
import styles from '../styles/Canvas.module.css'
import { useState, useRef, useEffect } from 'react'

import useKeyPress from "../hooks/useKeyPress";

import { drawGame } from "../lib/drawGame"
import { updateGame } from "../lib/updateGame"

import { Draw, Player, Ball, Net } from "../class"

const Canvas = (props) => {

	const canvasRef = useRef(null);
	const { canvasWidth, canvasHeight } = props

	const keyUp = useKeyPress('ArrowUp');
	const keyDown = useKeyPress('ArrowDown');

	const net = new Net(canvasWidth/100, (canvasWidth/100) * 2, canvasWidth, canvasHeight);
	const player1 = new Player(canvasWidth, canvasHeight, 10, canvasHeight /2, 4, 20, 120);
	const player2 = new Player(canvasWidth, canvasHeight, canvasWidth - 30, canvasHeight /2, 4, 20, 120);
	const ball = new Ball(canvasWidth, canvasHeight, canvasWidth /2, canvasHeight /2, 15, 4, 0.5, player1, player2);

	let neonEffect = 0.01;
	let firstNeon = 10;
	let secondNeon = 20;
	let neonColor = 0;
	let colorChange = 1;

	/* Neon effect */
	const animateNeon = canvas => {
		canvas.style.boxShadow = "inset 0 0 2px #fff,\
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

	/*useEffect(() => {
		player1.update(true, false);
		player2.update(false, true);
		console.log("keys in useEffect: ", keyUp, keyDown)
	}, [keyUp, keyDown]) */

	useEffect(() => {
		// Initialize Everything
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;

		const draw = new Draw(canvas, canvas.width, canvas.height)

		let animationFrameId;

		const gameLoop = () => {
			drawGame(draw, net, player1, player2, ball);
			animateNeon(canvas);
			ball.update();
			/*console.log("keys in useEffect: ", keyUp, keyDown)*/
			animationFrameId = window.requestAnimationFrame(gameLoop);
		}

		gameLoop()

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, []);

	return (
		<>
			<canvas className={styles.canvas} ref={canvasRef} ></canvas>
		</>
	);
};


export default Canvas;
