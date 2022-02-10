import { BoardState } from '../states/boardState';

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
                bombCount: null,
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

    return {
        board,
        flags: bombCount,
        cells: width * height - bombCount
    };
};

export default generateBoardState;
