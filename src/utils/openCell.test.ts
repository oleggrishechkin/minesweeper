import { BoardState } from '../states/boardState';
import openCell from './openCell';

test('should open cell, compute bombCount and decrease cells if no open and no flag', () => {
    const boardState = {
        board: [[{ row: 0, col: 0, isOpened: false, isFlag: false }]],
        cells: 1
    } as BoardState;
    const expectedBoardState = {
        board: [[{ row: 0, col: 0, isOpened: true, isFlag: false, bombCount: null }]],
        cells: 0
    };

    const nextBoard = openCell(boardState, boardState.board[0][0]);

    expect(nextBoard).toEqual(expectedBoardState);
});

test('should not open cell if open', () => {
    const boardState = {
        board: [[{ row: 0, col: 0, isOpened: true }]],
        cells: 1
    } as BoardState;

    const nextBoard = openCell(boardState, boardState.board[0][0]);

    expect(nextBoard).toEqual(boardState);
});

test('should not open cell if flag', () => {
    const boardState = {
        board: [[{ row: 0, col: 0, isFlag: true }]],
        cells: 1
    } as BoardState;

    const nextBoard = openCell(boardState, boardState.board[0][0]);

    expect(nextBoard).toEqual(boardState);
});

test('should open near cell if no bomb near', () => {
    const boardState = {
        board: [
            [
                { row: 0, col: 0 },
                { row: 0, col: 1 },
                { row: 0, col: 2 }
            ],
            [
                { row: 1, col: 0 },
                { row: 1, col: 1 },
                { row: 1, col: 2 }
            ],
            [
                { row: 2, col: 0 },
                { row: 2, col: 1 },
                { row: 2, col: 2 }
            ]
        ],
        cells: 9
    } as BoardState;
    const expectedBoardState = {
        board: [
            [
                { row: 0, col: 0, isOpened: true, bombCount: null },
                { row: 0, col: 1, isOpened: true, bombCount: null },
                { row: 0, col: 2, isOpened: true, bombCount: null }
            ],
            [
                { row: 1, col: 0, isOpened: true, bombCount: null },
                { row: 1, col: 1, isOpened: true, bombCount: null },
                { row: 1, col: 2, isOpened: true, bombCount: null }
            ],
            [
                { row: 2, col: 0, isOpened: true, bombCount: null },
                { row: 2, col: 1, isOpened: true, bombCount: null },
                { row: 2, col: 2, isOpened: true, bombCount: null }
            ]
        ],
        cells: 0
    };

    const nextBoard = openCell(boardState, boardState.board[1][1]);

    expect(nextBoard).toEqual(expectedBoardState);
});
