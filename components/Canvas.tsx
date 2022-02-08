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

	let keysArray = [];
	let konamiCode = [ "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a" ];
	let modeDev = false;

	let gameState = "waiting";
	let frameRate = 60; //Set the frame rate
	let start; //Get the start time
	let current = 0;
	let elapsed = 0;
	let frameDuration = 1000 / frameRate; //Set the frame duration in milliseconds
	let lag = 0;

	const net = new Net(canvasWidth/100, (canvasWidth/100) * 2, canvasWidth, canvasHeight);
	const player1 = new Player(canvasWidth, canvasHeight, 10, canvasHeight /2, 6, 20, 120);
	const player2 = new Player(canvasWidth, canvasHeight, canvasWidth - 30, canvasHeight /2, 6, 20, 120);
	const ball = new Ball(canvasWidth, canvasHeight, 15, 400, frameRate, 500, 10, player1, player2);

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

	const keyUp = false;
	const keyDown = false;

	const upHandler = ({key}): void => {
		if (key === "ArrowUp") {
			keyUp = false;
		}
		if (key === "ArrowDown") {
			keyDown = false;
		}
	}

	const developperCheck = key => {
		console.log(key)
		if (key === "Escape" || key === " ")
		{
			gameState = "waiting";
			if (key === "Escape")
				ball.reset();
		}
		if (key === "+")
		{
			if (frameRate === 120)
				return ;
			frameRate++;
			frameDuration = 1000 / frameRate;
			ball.changeFrameRate(frameRate);
			console.log("framerate: ", frameRate, ", in Ball: ", ball.frameRate);

		}
		if (key === "-")
		{
			if (frameRate === 1)
				return ;
			frameRate--;
			ball.changeFrameRate(frameRate);
			frameDuration = 1000 / frameRate;
			console.log("framerate: ", frameRate, ", in Ball: ", ball.frameRate);

		}
	}

	const downHandler = ({ key }): void => {

		if (key === "ArrowUp") {
			keyUp = true;
		}
		if (key === "ArrowDown") {
			keyDown = true;
		}
		if (key === "Enter") {
			if (gameState === "waiting")
				gameState = "starting";
		}

		if (keysArray.length === 10)
			keysArray.shift();
		keysArray.push(key);
		if (keysArray.length === konamiCode.length && keysArray.every((value, index) => value === konamiCode[index])) {
			modeDev = true;
			console.log("Developer mode activated");
		}
		if (modeDev === true)
			developperCheck(key);
	};

	useEffect(() => {
		// Initialize Everything
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;

		const draw = new Draw(canvas, canvas.width, canvas.height)

		let animationFrameId;
		window.addEventListener("keydown", downHandler);
		window.addEventListener("keyup", upHandler);
		let i = 0;
		let second = 0;

		const gameLoop = () => {
			animationFrameId = window.requestAnimationFrame(gameLoop);
			if (gameState === "running") {
				current = Date.now();
				elapsed = current - start;
				start = current;
				lag += elapsed;
				second+= elapsed;
				while (lag >= frameDuration)
				{
					if (second >= 1000)
					{
						/*console.log("i: ", i++);*/
						i = 0;
						second -= 1000;
					}
					i++;
					ball.update();
					player1.update(keyUp, keyDown);
					player2.update(keyUp, keyDown);
					lag -= frameDuration;
				}
			} else if (gameState === "starting") {
				start = Date.now()
				gameState = "running";
			} else if (gameState === "waiting") {


			}
			drawGame(draw, net, player1, player2, ball);
			animateNeon(canvas);
		}

		gameLoop()

		return () => {
			window.cancelAnimationFrame(animationFrameId)
			window.removeEventListener("keydown", downHandler);
			window.removeEventListener("keyup", upHandler);
		}
	}, []);

	return (
		<>
			<canvas className={styles.canvas} ref={canvasRef} ></canvas>
		</>
	);
};


export default Canvas;
