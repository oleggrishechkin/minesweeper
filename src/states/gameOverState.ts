import { createSignal } from 'react-tagged-state';

export type GameOver = 'win' | 'lose' | null;

const gameOverState = createSignal<GameOver>(null);

export default gameOverState;
