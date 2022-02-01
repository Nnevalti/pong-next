/* React import */
import { Fragment } from "react";
import { useState, useRef, useEffect } from 'react'

/* Personal Hooks */
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { useGameLogic } from "../hooks/useGameLogic";

/* Personal components */
import Canvas from "./Canvas"

/* CSS */

const Pong: React.FC<{}> = () => {
	const { canvasRef }	= useGameLogic();
	/* const { windowHeight, windowWidth } = useWindowDimensions(); */

	return (
			<Canvas
				canvasRef={canvasRef}
				/*width={windowWidth || 1000} */
				/*height={windowHeight || 600} */
				width={1000}
				height={600}
			/>
	)
};

export default Pong;
