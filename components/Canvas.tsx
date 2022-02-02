import React from "react";
import styles from '../styles/Canvas.module.css'
import { useState, useRef, useEffect } from 'react'

import { useKeyPress } from "../hooks/useKeyPress";

import { useRender } from "../hooks/useRender"
import { useUpdate } from "../hooks/useUpdate"

import { Draw, Player, Ball, Net } from "../class"

const Canvas = (props) => {

	const canvasRef = useRef(null);
	const { canvasWidth, canvasHeight } = props

	useEffect(() => {
		// Initialize Everything
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;

		const draw = new Draw(canvas, canvas.width, canvas.height)
		const net = new Net(canvas.width/100, (canvas.width/100) * 2, draw, canvas.width, canvas.height);
		const player1 = new Player(canvas, 10, canvas.height /2, 4, 20, 120, draw);
		const player2 = new Player(canvas, canvas.width - 30, canvas.height /2, 4, 20, 120, draw);
		const ball = new Ball(canvas, canvas.width /2, canvas.height /2, 15, 4, 0.5, player1, player2, draw);

		let animationFrameId;

		const gameLoop = () => {
			/* const key = useKeyPress; IT DOES NOT WORK*/
			useUpdate(canvas, draw, net, player1, player2, ball);
			useRender(canvas, draw, net, player1, player2, ball);
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
