import boardState, { Cell } from '../states/boardState';
import openCell from './openCell';

const openNearCells = (targetCell: Cell) => {
    const board = boardState();

    if (!board) {
        return;
    }

    for (let offsetX = -1; offsetX <= 1; offsetX++) {
        for (let offsetY = -1; offsetY <= 1; offsetY++) {
            openCell(board[offsetY + targetCell.row]?.[offsetX + targetCell.col]);
        }
    }
};

export default openNearCells;
