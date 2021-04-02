import { BoardState, Cell } from '../states/boardState';

const flagCell = (boardCopy: BoardState, cell: Cell): BoardState => {
    const isFlag = cell.isFlag;

    boardCopy.board[cell.row][cell.col] = { ...boardCopy.board[cell.row][cell.col], isFlag: !isFlag };
    boardCopy.flags += isFlag ? 1 : -1;

    return boardCopy;
};

export default flagCell;
