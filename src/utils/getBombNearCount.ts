import { BoardState, Cell } from '../states/boardState';

const getBombNearCount = (board: BoardState, targetCell: Cell): number | null => {
    let res = 0;

    for (let offsetX = -1; offsetX <= 1; offsetX++) {
        for (let offsetY = -1; offsetY <= 1; offsetY++) {
            if (board.board[offsetY + targetCell.row]?.[offsetX + targetCell.col]?.isBomb) {
                ++res;
            }
        }
    }

    return res || null;
};

export default getBombNearCount;
