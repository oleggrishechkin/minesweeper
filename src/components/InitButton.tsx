import { useSignal } from 'react-tagged-state';
import { ReactElement } from 'react';
import gameOverState from '../states/gameOverState';
import init from '../actions/init';

const InitButton = (): ReactElement => {
    const gameOver = useSignal(gameOverState);

    return <button onClick={init}>{gameOver === 'win' ? '😎' : gameOver === 'lose' ? '😵' : '😊'}</button>;
};

export default InitButton;
