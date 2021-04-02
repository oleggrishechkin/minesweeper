import { BoardState, Cell } from '../states/boardState';
import getBombNearCount from './getBombNearCount';

const openCell = (boardCopy: BoardState, targetCell: Cell): BoardState => {
    const itemsToOpen = [targetCell];
    let currentCell;
    let cell;
    let offsetX;
    let offsetY;

    while (itemsToOpen.length) {
        currentCell = itemsToOpen.pop();

        if (!currentCell || currentCell.isOpened || currentCell.isFlag) {
            continue;
        }

        currentCell = boardCopy.board[currentCell.row][currentCell.col] = {
            ...currentCell,
            isOpened: true,
            bombCount: getBombNearCount(boardCopy, currentCell)
        };
        boardCopy.cells -= 1;

        if (currentCell.bombCount) {
            continue;
        }

        for (offsetX = -1; offsetX <= 1; ++offsetX) {
            for (offsetY = -1; offsetY <= 1; ++offsetY) {
                cell = boardCopy.board[offsetY + currentCell.row]?.[offsetX + currentCell.col];

                if (cell && itemsToOpen.indexOf(cell) === -1 && !cell.isOpened && !cell.isFlag) {
                    itemsToOpen.push(cell);
                }
            }
        }
    }

    return boardCopy;
};

export default openCell;
