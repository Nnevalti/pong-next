import React from "react";
import styles from '../styles/Canvas.module.css'
import { useState, useRef, useEffect } from 'react'

import useKeyPress from "../hooks/useKeyPress";

import { animateNeon, drawGame } from "../lib/drawGame"
import { updateGame } from "../lib/updateGame"

import { Draw, Player, Ball, Net, Score } from "../class"

const Canvas = (props) => {

	const canvasRef = useRef(null);
	const { canvasWidth, canvasHeight } = props

	let keysArray = [];
	let konamiCode = [ "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a" ];
	let devMode = false;

	let gameState = "waiting";
	let frameRate = 60; //Set the frame rate
	let start = Date.now(); //Get the start time
	let current = 0;
	let elapsed = 0;
	let frameDuration = 1000 / frameRate; //Set the frame duration in milliseconds
	let lag = 0;

	const net = new Net(canvasWidth/100, (canvasWidth/100) * 2, canvasWidth, canvasHeight);
	const player1 = new Player(canvasWidth, canvasHeight, 10, canvasHeight /2, 6, 20, 120);
	const player2 = new Player(canvasWidth, canvasHeight, canvasWidth - 30, canvasHeight /2, 6, 20, 120);
	const ball = new Ball(canvasWidth, canvasHeight, 15, 400, frameRate, 3*(canvasWidth/4), 10, player1, player2);
	const score = new Score(canvasWidth, canvasHeight);

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

	/* This is the debugging/developper function, maybe not let everything on production */
	const developperCheck = key => {
		if (key === " ")
		{
			gameState = (gameState === "running") ? "paused" : "starting";
			gameState === "paused" ? console.log("Game Paused") : console.log("Game Resumed");
		}
		if (key === "Escape")
		{
			gameState = "waiting"
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
			devMode = true;
			console.log("Konami Code entered :", konamiCode);
			console.log("Developer mode activated");
		}
		if (devMode === true)
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

		const gameRunning = () => {

			lag += elapsed;
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
		}

		let dot = ".";

		const gameLoop = () => {
			animationFrameId = window.requestAnimationFrame(gameLoop);
			current = Date.now();
			elapsed = current - start;
			start = current;
			second += elapsed;

			drawGame(canvas, draw, net, player1, player2, ball, score);
			if (gameState === "running" || gameState === "paused") {
				if (gameState == "running")
					gameRunning();
				if (gameState === "paused"){
					draw.drawPauseButton();
				}
			} else if (gameState === "starting") {
				start = Date.now()
				if (second >= 3500)
				{
					start = Date.now()
					gameState = "running";
					second -= 3500;
				}
				draw.drawCountDown(Math.ceil((3 - (second/1000))));
			} else if (gameState === "waiting") {
				draw.drawLoading("Loading" + dot);
				if (second >= 1000)
				{
					if (dot === "...")
						dot = "";
					dot += ".";
					second -= 1000;
				}
			}
		}

		gameLoop();

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
