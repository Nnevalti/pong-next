import React from "react";
import styles from '../styles/Canvas.module.css'
import { useState, useRef, useEffect } from 'react'

import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { useGameLogic } from "../hooks/useGameLogic"

const Canvas = (props) => {

	const canvasRef = useRef(null);
	const { width, height } = props

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
	/* END NEON */

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		let animationFrameId;

		const render = () => {
			animateNeon(canvas);
			useGameLogic(canvas, width, height);
			animationFrameId = window.requestAnimationFrame(render);
		}

		render()

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
