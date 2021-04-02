import { BoardState } from '../states/boardState';

const openBombs = (boardCopy: BoardState): BoardState => {
    let row = 0;
    let col;
    const rowsCount = boardCopy.board.length;
    const colsCount = boardCopy.board[0].length;

    for (; row < rowsCount; ++row) {
        for (col = 0; col < colsCount; col++) {
            if (boardCopy.board[row][col].isBomb) {
                boardCopy.board[row][col] = { ...boardCopy.board[row][col], isOpened: true };
            }
        }
    }

    return boardCopy;
};

export default openBombs;
