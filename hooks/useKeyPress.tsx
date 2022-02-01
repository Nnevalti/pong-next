import { useEffect } from 'react';
/**
 * useKeyPress
 * https://www.caktusgroup.com/blog/2020/07/01/usekeypress-hook-react/
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */

export default function useKeypress(key: string, action) {
	useEffect(() => {
		function onKeyup(e:KeyboardEvent) {
			if (e.key === key) action()
		}
		window.addEventListener('keydown', onKeyup);

		return () => window.removeEventListener('keydown', onKeyup);
	});
}

import { useRef, useEffect, useState, useCallback } from "react";

// Desktop events listeners

const arrowKeys = {
  up: 38,
  down: 40,
};

const arrowKeysReverse = {
  38: "up",
  40: "down",
};

export const useKeys = () => {
  const [keysDown, setKeysDown] = useState({
    up: false,
    down: false
  });

  const handleKeyDown = useCallback((e) => {
    const { keyCode } = e; // a conditional for up

    // onKeyDown event
    setKeysDown((previousPressedKeys) => {
      return { ...previousPressedKeys, [arrowKeysReverse[keyCode]]: true };
    });
  });

  const handleKeyUp = useCallback((e) => {
    const { keyCode } = e;

    // onKeyUp event
    setKeysDown((previousPressedKeys) => {
      return { ...previousPressedKeys, [arrowKeysReverse[keyCode]]: false };
    });

  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return function cleanup() {
      window.removeEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keysDown;
};
