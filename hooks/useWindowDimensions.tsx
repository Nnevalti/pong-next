import { useState, useEffect } from "react";

export function useWindowDimensions() {
	const hasWindow = typeof window !== "undefined";

	function getWindowDimensions() {
		const windowWidth = hasWindow ? window.innerWidth : null;
		const windowHeight = hasWindow ? window.innerHeight : null;

		return {
			windowWidth,
			windowHeight,
		};
	}

	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		if (hasWindow) {
			function handleResize() {
				setWindowDimensions(getWindowDimensions());
				console.log(windowDimensions)
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, [hasWindow]);
	/* Hardcoded for now */
	return [1000, 600]
	return windowDimensions;

}
