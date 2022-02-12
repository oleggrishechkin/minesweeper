import boardState, { Cell } from '../states/boardState';

const getBombNearCount = (targetCell: Cell) => {
    const board = boardState();
    let res = 0;

    for (let offsetX = -1; offsetX <= 1; offsetX++) {
        for (let offsetY = -1; offsetY <= 1; offsetY++) {
            if (board?.[offsetY + targetCell.row]?.[offsetX + targetCell.col]?.isBomb) {
                res++;
            }
        }
    }

    return res;
};

export default getBombNearCount;
