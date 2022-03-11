import { useState, useEffect } from "react";

export function useWindowDimensions() {
	const hasWindow = typeof window !== "undefined";

	function getWindowDimensions() {

		const windowHeight = hasWindow ? window.innerHeight - 50 : null;
		const windowWidth = ((16 * windowHeight) / 9);

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

	return windowDimensions;
}
