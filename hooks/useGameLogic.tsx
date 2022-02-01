import { useState, useEffect, useRef } from "react";

import { useWindowDimensions } from "../hooks/useWindowDimensions";

export function useGameLogic() {
	const canvasRef = useRef(null);
	const [context, setContext] = useState(null);

/*	const { windowWidth, windowHeight } = useWindowDimensions(); */

//   Set initial car value
	let initialGameState = {
	};
	const [gameState, setGameState] = useState(initialGameState);

	return {canvasRef, gameState}
}
