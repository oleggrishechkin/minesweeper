import { BoardState } from '../states/boardState';
import openNearCells from './openNearCells';
import * as openCell from './openCell';

test('should open all near cells', () => {
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
        ]
    } as BoardState;

    const openCellSpy = jest.spyOn(openCell, 'default').mockImplementation();

    openNearCells(boardState, boardState.board[1][1]);

    expect(openCellSpy).toBeCalledWith(boardState, boardState.board[0][0]);
    expect(openCellSpy).toBeCalledWith(boardState, boardState.board[0][1]);
    expect(openCellSpy).toBeCalledWith(boardState, boardState.board[0][2]);
    expect(openCellSpy).toBeCalledWith(boardState, boardState.board[1][0]);
    expect(openCellSpy).toBeCalledWith(boardState, boardState.board[1][1]);
    expect(openCellSpy).toBeCalledWith(boardState, boardState.board[1][2]);
    expect(openCellSpy).toBeCalledWith(boardState, boardState.board[2][0]);
    expect(openCellSpy).toBeCalledWith(boardState, boardState.board[2][1]);
    expect(openCellSpy).toBeCalledWith(boardState, boardState.board[2][2]);
});
