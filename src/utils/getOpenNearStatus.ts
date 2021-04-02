import { BoardState, Cell } from '../states/boardState';

const getOpenNearStatus = (board: BoardState | null, targetCell: Cell): -1 | 1 | 0 => {
    if (!board) {
        return 0;
    }

    let flagsCount = 0;
    let isUnflagBombNear = false;
    let offsetX = -1;
    let offsetY;
    let cell;

    for (; offsetX <= 1; ++offsetX) {
        for (offsetY = -1; offsetY <= 1; ++offsetY) {
            cell = board.board[offsetY + targetCell.row]?.[offsetX + targetCell.col];

            if (cell?.isFlag) {
                flagsCount++;

                continue;
            }

            if (cell?.isBomb) {
                isUnflagBombNear = true;
            }
        }
    }

    return flagsCount === targetCell.bombCount ? (isUnflagBombNear ? -1 : 1) : 0;
};

export default getOpenNearStatus;
