import React from "react";
import styles from '../styles/Canvas.module.css'
import { useState, useRef, useEffect } from 'react'

const Canvas = (props) => {

  const { draw, canvasRef, ...rest } = props

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

  useEffect(() => {
	  const canvas = canvasRef.current
	  const context = canvas.getContext('2d')
	  let animationFrameId

	  const render = () => {
		  animateNeon(canvas)
		  animationFrameId = window.requestAnimationFrame(render)
	  }

	  render()

	  return () => {
	 window.cancelAnimationFrame(animationFrameId)
   }
  }, []);

  return (
    <>
      <canvas className={styles.canvas} ref={canvasRef} {...rest}  ></canvas>
    </>
  );
};


export default Canvas;

/*
export class Canvas {
	canvasEl: HTMLCanvasElement;
	context: CanvasRenderingContext2D;

	map: number;
	mode: number;
	position: number;
	constructor(gameRef, {width = 1024, height = 768, zIndex = 0}) {
		this.canvasEl = document.createElement("canvas");
		this.context = this.canvasEl.getContext("2d");
		this.canvasEl.width = width;
		this.canvasEl.height = height;

		this.canvasEl.style.zIndex = zIndex.toString();
		this.canvasEl.style.position = 'absolute';
		this.map = 0;
		this.mode = 0;
		this.position = -1;
		gameRef.append(this.canvasEl);
	}

	clear() {
		this.context.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
	}

	drawRectangle(x: number, y: number, width: number, height: number, color: string) {
		this.context.fillStyle = color;
		this.context.fillRect(x, y, width, height);
	}

	drawCircle(x: number, y: number, radius: number, color: string) {
		this.context.beginPath();
		this.context.arc(x, y, radius, 0, 2 * Math.PI, true);
		this.context.fillStyle = color;
		this.context.fill();
		this.context.stroke();
	}
}
*/
