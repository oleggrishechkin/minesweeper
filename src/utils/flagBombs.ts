import { BoardState } from '../states/boardState';

const openBombs = (boardCopy: BoardState): BoardState => {
    const rowsCount = boardCopy.board.length;
    const colsCount = boardCopy.board[0].length;

    for (let row = 0; row < rowsCount; row++) {
        for (let col = 0; col < colsCount; col++) {
            if (boardCopy.board[row][col].isBomb) {
                boardCopy.board[row][col] = { ...boardCopy.board[row][col], isFlag: true };
            }
        }
    }

    return boardCopy;
};

export default openBombs;
