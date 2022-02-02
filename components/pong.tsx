/* React import */
import { Fragment } from "react";
import { useState, useRef, useEffect } from 'react'

/* Personal Hooks */
import { useWindowDimensions } from "../hooks/useWindowDimensions";

/* Personal components */
import Canvas from "./Canvas"

/* CSS */

const Pong: React.FC<{}> = () => {
	const { windowHeight, windowWidth } = useWindowDimensions();

	return (
			<Canvas
				canvasWidth={windowWidth || 1000}
				canvasHeight={windowHeight || 600}
			/>
	)
};

export default Pong;
