import { BoardState } from '../states/boardState';
import getRandomPoint from './getRandomPoint';

const generateBoardState = (
    width: number,
    height: number,
    bombCount: number,
    excludeRow?: number,
    excludeCol?: number
): BoardState => {
    const board: BoardState['board'] = [];
    let minesCount = 0;
    let row = 0;
    let col;

    for (; row < height; ++row) {
        board[row] = [];

        for (col = 0; col < width; ++col) {
            board[row][col] = {
                id: `[${row}][${col}]`,
                row,
                col,
                bombCount: null,
                isBomb: false,
                isFlag: false,
                isOpened: false
            };
        }
    }

    while (minesCount < bombCount) {
        [row, col] = getRandomPoint(width, height);

        if (!board[row][col].isBomb && (row !== excludeRow || excludeCol !== col)) {
            board[row][col].isBomb = true;
            ++minesCount;
        }
    }

    return {
        board,
        flags: bombCount,
        cells: width * height - bombCount
    };
};

export default generateBoardState;
