import { BoardState, Cell } from '../states/boardState';
import getBombNearCount from './getBombNearCount';

const openCell = (boardCopy: BoardState, targetCell: Cell): BoardState => {
    const itemsToOpen = new Set([targetCell]);
    let cell;
    let offsetX;
    let offsetY;

    if (targetCell.isOpened || targetCell.isFlag) {
        return boardCopy;
    }

    itemsToOpen.forEach((currentCell) => {
        if (!currentCell || currentCell.isOpened || currentCell.isFlag) {
            return;
        }

        currentCell = boardCopy.board[currentCell.row][currentCell.col] = {
            ...currentCell,
            isOpened: true,
            bombCount: getBombNearCount(boardCopy, currentCell)
        };
        boardCopy.cells -= 1;

        if (currentCell.bombCount) {
            return;
        }

        for (offsetX = -1; offsetX <= 1; ++offsetX) {
            for (offsetY = -1; offsetY <= 1; ++offsetY) {
                cell = boardCopy.board[offsetY + currentCell.row]?.[offsetX + currentCell.col];

                if (cell && !cell.isOpened && !cell.isFlag) {
                    itemsToOpen.add(cell);
                }
            }
        }
    });

    return boardCopy;
};

export default openCell;
