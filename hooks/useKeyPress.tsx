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

export const useKeyPress = () => {

  const [keysPress, setKeysPress] = useState({
    up: false,
    down: false
  });

  const handleKeyDown = useCallback((e) => {
    const { key, keyCode } = e; // a conditional for up
    // onKeyDown event
    setKeysDown((previousPressedKeys) => {
      return { ...previousPressedKeys, [arrowKeysReverse[keyCode]]: true };
    });
  });

  const handleKeyUp = useCallback((e) => {
    const { key, keyCode } = e;

    // onKeyUp event
    setKeysDown((previousPressedKeys) => {
      return { ...previousPressedKeys, [arrowKeysReverse[keyCode]]: false };
    });

  });

  useEffect(() => {
	console.log(keyPress);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return function cleanup() {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keysPress;
};
