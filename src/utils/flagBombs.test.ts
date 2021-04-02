import { BoardState } from '../states/boardState';
import flagBombs from './flagBombs';

test('should flag all bombs on board', () => {
    const boardState = {
        board: [
            [
                { isBomb: true, isFlag: false },
                { isBomb: false, isFlag: false }
            ],
            [
                { isBomb: true, isFlag: false },
                { isBomb: false, isFlag: false }
            ]
        ]
    } as BoardState;
    const expectedBoardCopy = {
        board: [
            [
                { isBomb: true, isFlag: true },
                { isBomb: false, isFlag: false }
            ],
            [
                { isBomb: true, isFlag: true },
                { isBomb: false, isFlag: false }
            ]
        ]
    };

    const boardCopy = flagBombs(boardState);

    expect(boardCopy).toEqual(expectedBoardCopy);
});
