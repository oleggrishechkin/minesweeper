import { BoardState } from '../states/boardState';
import getOpenNearStatus from './getOpenNearStatus';

test('should return -1 if unflag bomb near and flag count equal bomb near count', () => {
    const boardState = {
        board: [
            [
                { isBomb: true, isFlag: false, row: 0, col: 0, bombCount: null },
                { isBomb: false, isFlag: true, row: 0, col: 1, bombCount: 1 }
            ],
            [
                { isBomb: false, isFlag: false, row: 1, col: 0, bombCount: 1 },
                { isBomb: false, isFlag: false, row: 1, col: 1, bombCount: 1 }
            ]
        ]
    } as BoardState;

    const status = getOpenNearStatus(boardState, boardState.board[1][0]);

    expect(status).toBe(-1);
});

test('should return 0 if flag count not equal bomb near count', () => {
    const boardState = {
        board: [
            [
                { isBomb: true, isFlag: false, row: 0, col: 0, bombCount: null },
                { isBomb: false, isFlag: false, row: 0, col: 1, bombCount: 1 }
            ],
            [
                { isBomb: false, isFlag: false, row: 1, col: 0, bombCount: 1 },
                { isBomb: false, isFlag: false, row: 1, col: 1, bombCount: 1 }
            ]
        ]
    } as BoardState;

    const status = getOpenNearStatus(boardState, boardState.board[1][0]);

    expect(status).toBe(0);
});

test('should return 1 if no unflag bomb near and flag count equal bomb near count', () => {
    const boardState = {
        board: [
            [
                { isBomb: true, isFlag: true, row: 0, col: 0, bombCount: null },
                { isBomb: false, isFlag: false, row: 0, col: 1, bombCount: 1 }
            ],
            [
                { isBomb: false, isFlag: false, row: 1, col: 0, bombCount: 1 },
                { isBomb: false, isFlag: false, row: 1, col: 1, bombCount: 1 }
            ]
        ]
    } as BoardState;

    const status = getOpenNearStatus(boardState, boardState.board[1][0]);

    expect(status).toBe(1);
});
