import boardState, { Cell } from '../states/boardState';

const getOpenNearStatus = (targetCell: Cell): -1 | 1 | 0 => {
    const board = boardState();

    if (!board) {
        return 0;
    }

    let flagsCount = 0;
    let isUnflagBombNear = false;

    for (let offsetX = -1; offsetX <= 1; offsetX++) {
        for (let offsetY = -1; offsetY <= 1; offsetY++) {
            const cell = board[offsetY + targetCell.row]?.[offsetX + targetCell.col];

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
