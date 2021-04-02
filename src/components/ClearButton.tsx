import { useTagged } from 'react-tagged-state';
import { ReactElement } from 'react';
import gameOverState from '../states/gameOverState';
import clear from '../actions/clear';

const ClearButton = (): ReactElement => {
    const gameOver = useTagged(gameOverState);

    return <button onClick={clear}>{gameOver === 'win' ? '😎' : gameOver === 'lose' ? '😵' : '😊'}</button>;
};

export default ClearButton;
