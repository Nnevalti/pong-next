export enum GameState {
	QUEUE,
	INIT,
	STARTING,
	PLAYING,
	PAUSED,
	RESUME,
	GOAL,
	END
}

type PlayerGoal = {
	p1: boolean;
	p2: boolean;
}

export type GameConstants = {
	canvasWidth: number;
	canvasHeight: number;
	roomState: GameState;
	loading: string[4];
	playersGoal: PlayerGoal;

	start: number;

	/*
		To remove in prod
		Variable used for dev mode
		Register the 10 last keys pressed in keysArrays
	*/
	konamiCode: string[];
	keysArray: string[];
	devMode: boolean;
}

export const gameConstants: GameConstants = {
	canvasWidth: 1920,
	canvasHeight: 1080,
	roomState: GameState.QUEUE,
	loading: ["Loading", "Loading.", "Loading..", "Loading..."],
	playerGoal: { p1: false, p2: false },

	start: Date.now(),

	/* to remove in prod */
	konamiCode: [ "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a" ],
	keysArray: [],
	devMode: false,

}
