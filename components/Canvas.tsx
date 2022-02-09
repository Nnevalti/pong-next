import React from "react";
import styles from '../styles/Canvas.module.css'
import { useState, useRef, useEffect } from 'react'

import useKeyPress from "../hooks/useKeyPress";

import { animateNeon, drawGame } from "../lib/drawGame"
import { updateGame } from "../lib/updateGame"

import { Draw, Player, Ball, Net, Score } from "../class"

const Canvas = (props) => {

	/*
		Canvas ref and size
	*/
	const canvasRef = useRef(null);
	const { canvasWidth, canvasHeight } = props

	/*
		Game initialisation
		Game Object
	*/
	let gameState = "waiting";
	let frameRate = 60; //Set the frame rate
	let start = Date.now(); //Get the start time
	let current = 0;
	let elapsed = 0;
	let frameDuration = 1000 / frameRate; //Set the frame duration in milliseconds
	let lag = 0;

	const net = new Net(canvasWidth/100, (canvasWidth/100) * 2, canvasWidth, canvasHeight);
	const player1 = new Player("Sans" ,canvasWidth, canvasHeight, 10, 6, 20, 120, 'rgba(255, 255, 255, 0.8)');
	const player2 = new Player("Papyrus" ,canvasWidth, canvasHeight, canvasWidth - 30, 6, 20, 120, 'rgba(255, 255, 255, 0.8)');
	const ball = new Ball(canvasWidth, canvasHeight, 15, 400, frameRate, 3*(canvasWidth/4), 10, player1, player2);
	const score = new Score(canvasWidth, canvasHeight);
	let playersGoal = {"1": false, "2": false}
	/*
		Variable used for dev mode
		Register the 10 last keys pressed in keysArrays
	*/
	let keysArray = [];
	let konamiCode = [ "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a" ];
	let devMode = false;

	/*
		Handle key controls
	*/
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

	/*
		This is the debugging/developper function, maybe not let everything on production
		Extension of keyDownHandler
	*/
	const developperCheck = key => {
		if (key === " ")
		{
			gameState = (gameState === "running") ? "paused" : "resume";
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
			if (gameState === "waiting" || gameState === "gameEnd")
				gameState = "initializing";
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
				playersGoal = ball.update(score)
				if (playersGoal["1"] || playersGoal["2"])
					gameState = "goal";
				player1.update(keyUp, keyDown);
				player2.update(keyUp, keyDown);
				lag -= frameDuration;
			}
		}

		let dot = ".";
		let display = 0;

		const gameLoop = () => {
			animationFrameId = window.requestAnimationFrame(gameLoop);
			current = Date.now();
			elapsed = current - start;
			start = current;
			second += elapsed;

			drawGame(canvas, draw, net, player1, player2, ball, score);
			/* Maybe use a switch and rename the gameState properly */
			if (gameState === 'initializing') {
				score.p1_Score = 0;
				score.p2_Score = 0;
				gameState = "starting";
			}
			if (gameState === "running" || gameState === "paused") {
				if (gameState == "running")
					gameRunning();
				if (gameState === "paused"){
					draw.drawPauseButton();
				}
			} else if (gameState === "resume") {
				start = Date.now();
				gameState = "running";
			} else if (gameState === "starting" || gameState === "goal") {
				start = Date.now();
				if (second >= 3500)
				{
					start = Date.now();
					ball.reset();
					player1.reset();
					player2.reset();
					gameState = "running";
					second -= 3500;
				}
				draw.drawRectangle(0, 0, canvasWidth, canvasHeight, "rgba(0, 0, 0, 0.5)");
				if (gameState === "goal" && (score.p1_Score >= 3 || score.p2_Score >= 3)) {
					gameState = "gameEnd"
				}
				else if (gameState === "goal")
					draw.drawGoal(ball, playersGoal, player1, player2);
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
			} else if (gameState === "gameEnd") {
				draw.drawGoalParticle(ball);
				draw.drawRectangle(0, 0, canvasWidth, canvasHeight, "rgba(0, 0, 0, 0.2)");
				if (second >= 1000)
				{
					if (display < 3)
						display++;
					second -= 1000;
				}
				if (display >= 1 && score.p1_Score >= 3)
					draw.drawCenteredText((player1.name + " Won !!!"), canvasWidth/2, ((canvasHeight/2) - (canvasHeight/10)), 45, 'white')
				else if (display >= 1 && score.p2_Score >= 3)
					draw.drawCenteredText((player2.name + " Won !!!"), canvasWidth/2, ((canvasHeight/2) - (canvasHeight/10)), 45, 'white')
				if (display >= 2)
					draw.drawCenteredText("Press enter to rematch", canvasWidth/2, ((canvasHeight/2)), 45, 'white')
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
