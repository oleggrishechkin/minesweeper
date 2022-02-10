import { BoardState, Cell } from '../states/boardState';
import openCell from './openCell';

const openNearCells = (boardCopy: BoardState, targetCell: Cell): BoardState => {
    for (let offsetX = -1; offsetX <= 1; offsetX++) {
        for (let offsetY = -1; offsetY <= 1; offsetY++) {
            openCell(boardCopy, boardCopy.board[offsetY + targetCell.row]?.[offsetX + targetCell.col]);
        }
    }

    return boardCopy;
};

export default openNearCells;
