import { BoardState } from '../states/boardState';
import getBombNearCount from './getBombNearCount';

test('should return bomb near count', () => {
    const boardState = {
        board: [
            [
                { isBomb: true, isFlag: false, row: 0, col: 0 },
                { isBomb: true, isFlag: false, row: 0, col: 1 }
            ],
            [
                { isBomb: false, isFlag: false, row: 1, col: 0 },
                { isBomb: false, isFlag: false, row: 1, col: 1 }
            ]
        ]
    } as BoardState;

    const status = getBombNearCount(boardState, boardState.board[1][0]);

    expect(status).toBe(2);
});

test('should return null if no bomb near', () => {
    const boardState = {
        board: [
            [
                { isBomb: false, isFlag: false, row: 0, col: 0 },
                { isBomb: false, isFlag: false, row: 0, col: 1 }
            ],
            [
                { isBomb: false, isFlag: false, row: 1, col: 0 },
                { isBomb: false, isFlag: false, row: 1, col: 1 }
            ]
        ]
    } as BoardState;

    const status = getBombNearCount(boardState, boardState.board[1][0]);

    expect(status).toBe(null);
});
