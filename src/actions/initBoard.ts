import boardState, { Cell } from '../states/boardState';
import flagsState from '../states/flagsState';
import cellsState from '../states/cellsState';
import widthState from '../states/widthState';
import bombCountState from '../states/bombCountState';
import heightState from '../states/heightState';

const initBoard = (excludeRow?: number, excludeCol?: number) => {
    const width = widthState();
    const height = heightState();
    const bombCount = bombCountState();
    const board: Array<Array<Cell>> = [];
    let minesCount = 0;
    let row = 0;
    let col;
    const possibleBombPoints = [];

    for (; row < height; ++row) {
        board[row] = [];

        for (col = 0; col < width; ++col) {
            if (row !== excludeRow || excludeCol !== col) {
                possibleBombPoints.push([row, col]);
            }

            board[row][col] = {
                id: `[${row}][${col}]`,
                row,
                col,
                bombCount: 0,
                isBomb: false,
                isFlag: false,
                isOpened: false
            };
        }
    }

    while (minesCount < bombCount) {
        const [point] = possibleBombPoints.splice(Math.floor(Math.random() * possibleBombPoints.length), 1);

        board[point[0]][point[1]].isBomb = true;
        ++minesCount;
    }

    boardState(board);
    flagsState(bombCount);
    cellsState(width * height - bombCount);
};

export default initBoard;
