import { mutated } from 'react-tagged-state';
import boardState, { Cell } from '../states/boardState';
import cellsState from '../states/cellsState';
import getBombNearCount from '../selectors/getBombNearCount';

const openCell = (targetCell?: Cell) => {
    const board = boardState();

    if (!board || !targetCell || targetCell.isOpened || targetCell.isFlag) {
        return;
    }

    const itemsToOpen = new Set([targetCell]);

    itemsToOpen.forEach((currentCell) => {
        currentCell.isOpened = true;
        currentCell.bombCount = getBombNearCount(currentCell);
        mutated(currentCell);
        cellsState((cells) => cells - 1);

        if (currentCell.bombCount) {
            return;
        }

        for (let offsetX = -1; offsetX <= 1; ++offsetX) {
            for (let offsetY = -1; offsetY <= 1; ++offsetY) {
                const cell = board[offsetY + currentCell.row]?.[offsetX + currentCell.col];

                if (cell && !cell.isOpened && !cell.isFlag) {
                    itemsToOpen.add(cell);
                }
            }
        }
    });
};

export default openCell;
