import React from "react";
import styles from '../styles/Canvas.module.css';
import { useState, useRef, useEffect } from 'react';

import useKeyPress from "../hooks/useKeyPress";

import { animateNeon, drawGame } from "../lib/drawGame";
import { updateGame, resetGame } from "../lib/updateGame";
import { GameConstants, GameState, gameConstants } from "../constants/gameConstants"
import { Draw, Player, Ball, Net, Score } from "../class";

const Canvas: React.FC<{}> = (props) => {
	/*
		Canvas ref and size
	*/
	const canvasRef = useRef<HTMLCanvasElement>(null);
	console.log(props);
	const players = props.room.players;
	const nbGoal = props.room.gameParam.nbGoal;

	console.log(props);
	/*
		Game initialisation
		Game Object
	*/
	let roomState = gameConstants.roomState;

	let start = Date.now();
	let oldTimestamp = 0;
	let secondElapsed = 0;
	let dot = 0;
	let display = 0;
	let seconds = 0;

	const net = new Net(20, 50, gameConstants.canvasWidth, gameConstants.canvasHeight);
	const player1 = new Player(players.p1, gameConstants.canvasWidth, gameConstants.canvasHeight, 10, 540, 30, 200, 'rgba(255, 255, 255, 0.8)');
	const player2 = new Player(players.p2, gameConstants.canvasWidth, gameConstants.canvasHeight, (gameConstants.canvasWidth-40), 540, 30, 200, 'rgba(255, 255, 255, 0.8)');
	const ball = new Ball(gameConstants.canvasWidth, gameConstants.canvasHeight, 25, 800, (gameConstants.canvasWidth/4) * 3, 50, player1, player2);
	const score = new Score(gameConstants.canvasWidth, gameConstants.canvasHeight);


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
			roomState = (roomState === GameState.PLAYING) ? GameState.PAUSED : GameState.RESUME;
			roomState === GameState.PAUSED ? console.log("Game Paused") : console.log("Game Resumed");
		}
		if (key === "Escape")
		{
			roomState = GameState.QUEUE
			ball.reset();
		}
	}

	const downHandler = ({ key }): void => {
		console.log(key)
		if (key === "ArrowUp") {
			keyUp = true;
		}
		if (key === "ArrowDown") {
			keyDown = true;
		}
		if (key === "Enter") {
			if (roomState === GameState.QUEUE || roomState === GameState.GOAL)
				roomState = GameState.INIT;
		}

		/* Dev mode part */
		if (gameConstants.keysArray.length === 10)
			gameConstants.keysArray.shift();
		gameConstants.keysArray.push(key);
		if (gameConstants.keysArray.length === gameConstants.konamiCode.length && gameConstants.keysArray.every((value, index) => value === gameConstants.konamiCode[index])) {
			gameConstants.devMode = true;
			console.log("Developer mode activated");
		}
		if (gameConstants.devMode === true)
			developperCheck(key);
	};

	useEffect(() => {
		// Initialize Everything
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		canvas.width = gameConstants.canvasWidth;
		canvas.height = gameConstants.canvasHeight;

		const draw = new Draw(canvas, gameConstants.canvasWidth, gameConstants.canvasHeight)

		let animationFrameId;
		window.addEventListener("keydown", downHandler);
		window.addEventListener("keyup", upHandler);

		const gameRunning = () => {
			ball.update(score, gameConstants, secondElapsed);
			if (gameConstants.playerGoal.p1 || gameConstants.playerGoal.p2)
				roomState = GameState.GOAL;
			player1.update(keyUp, keyDown, secondElapsed);
			player2.update(keyUp, keyDown, secondElapsed);
		}

		const loading = () => {
			draw.drawLoading(gameConstants.loading[dot]);
			if (seconds >= 1)
			{
				dot = (dot+1) % gameConstants.loading.length;
				seconds = 0;
			}
		}

		const gameEnd = () => {
			draw.drawGoalParticle(ball);
			draw.drawRectangle(0, 0, gameConstants.canvasWidth, gameConstants.canvasHeight, "rgba(0, 0, 0, 0.2)");
			seconds += secondElapsed;
			if (seconds >= 1)
			{
				if (display < 3)
					display++;
				seconds -= 1;
			}
			if (display >= 1 && score.p1_Score >= 3)
				draw.drawCenteredText((player1.name + " Won !!!"), gameConstants.canvasWidth/2, ((gameConstants.canvasHeight/2) - (gameConstants.canvasHeight/10)), 45, 'white');
			else if (display >= 1 && score.p2_Score >= 3)
				draw.drawCenteredText((player2.name + " Won !!!"), gameConstants.canvasWidth/2, ((gameConstants.canvasHeight/2) - (gameConstants.canvasHeight/10)), 45, 'white');
			if (display >= 2)
				draw.drawCenteredText("Match end", gameConstants.canvasWidth/2, ((gameConstants.canvasHeight/2)), 45, 'white');
		}

		const gameLoop = (timestamp = 0) => {
			animationFrameId = window.requestAnimationFrame(gameLoop);
			secondElapsed = (timestamp - oldTimestamp) / 1000;
			oldTimestamp = timestamp;

			drawGame(canvas, draw, net, player1, player2, ball, score);
			// draw.drawText("FPS: " + Math.round(1/secondElapsed), (gameConstants.canvasWidth - 150), 45, 45, "white");
			/* Maybe use a switch and rename the roomState properly */
			if (roomState === GameState.INIT) {
				score.p1_Score = 0;
				score.p2_Score = 0;
				roomState = GameState.STARTING;
			}

			if (roomState === GameState.PLAYING || roomState === GameState.PAUSED) {
				if (roomState == GameState.PLAYING)
					gameRunning();
				if (roomState === GameState.PAUSED){
					draw.drawPauseButton();
				}
			} else if (roomState === GameState.RESUME) {
				oldTimestamp = Date.now();
				roomState = GameState.PLAYING;
			} else if (roomState === GameState.STARTING || roomState === GameState.GOAL) {
				if (roomState === GameState.GOAL && (score.p1_Score >= nbGoal || score.p2_Score >= nbGoal)) {
					roomState = GameState.END;
				}
				else {
					seconds += secondElapsed;
					if (seconds >= 3.5)
					{
						seconds = 0;
						draw.resetParticles();
						resetGame(ball, player1, player2);
						roomState = GameState.PLAYING;
					}
					draw.drawRectangle(0, 0, gameConstants.canvasWidth, gameConstants.canvasHeight, "rgba(0, 0, 0, 0.5)");
					if (roomState === GameState.GOAL)
						draw.drawGoal(ball, gameConstants.playerGoal, player1, player2);
					draw.drawCountDown(Math.ceil(3 - seconds));
				}
			} else if (roomState === GameState.QUEUE) {
				seconds += secondElapsed;
				// seconds += secondElapsed;
				loading();
			} else if (roomState === GameState.END) {
				gameEnd();
			}
		}

		gameLoop();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
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
