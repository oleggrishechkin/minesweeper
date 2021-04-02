import { BoardState } from '../states/boardState';
import flagCell from './flagCell';

test('should flag cell and decrease flags if cell unflag', () => {
    const boardState = {
        board: [[{ row: 0, col: 0, isFlag: false }]],
        flags: 1
    } as BoardState;
    const expectedBoardState = {
        board: [[{ row: 0, col: 0, isFlag: true }]],
        flags: 0
    };

    const nextBoard = flagCell(boardState, boardState.board[0][0]);

    expect(nextBoard).toEqual(expectedBoardState);
});

test('should unflag cell and increase flags if cell flag', () => {
    const boardState = {
        board: [[{ row: 0, col: 0, isFlag: true }]],
        flags: 0
    } as BoardState;
    const expectedBoardState = {
        board: [[{ row: 0, col: 0, isFlag: false }]],
        flags: 1
    };

    const nextBoard = flagCell(boardState, boardState.board[0][0]);

    expect(nextBoard).toEqual(expectedBoardState);
});
