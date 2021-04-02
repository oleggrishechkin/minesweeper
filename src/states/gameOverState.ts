import { createTagged } from 'react-tagged-state';

export type GameOver = 'win' | 'lose' | null;

const gameOverState = createTagged<GameOver>(null);

export default gameOverState;
