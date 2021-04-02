import { BoardState } from '../states/boardState';
import openBombs from './openBombs';

test('should open all bombs on board', () => {
    const boardState = {
        board: [
            [
                { isBomb: true, isOpened: false },
                { isBomb: false, isOpened: false }
            ],
            [
                { isBomb: true, isOpened: false },
                { isBomb: false, isOpened: false }
            ]
        ]
    } as BoardState;
    const expectedBoardCopy = {
        board: [
            [
                { isBomb: true, isOpened: true },
                { isBomb: false, isOpened: false }
            ],
            [
                { isBomb: true, isOpened: true },
                { isBomb: false, isOpened: false }
            ]
        ]
    };

    const boardCopy = openBombs(boardState);

    expect(boardCopy).toEqual(expectedBoardCopy);
});
