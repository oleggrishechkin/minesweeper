import { BoardState, Cell } from '../states/boardState';

const getBombNearCount = (board: BoardState, targetCell: Cell): number | null => {
    let res = 0;
    let offsetX = -1;
    let offsetY;
    let cell;

    for (; offsetX <= 1; ++offsetX) {
        for (offsetY = -1; offsetY <= 1; ++offsetY) {
            cell = board.board[offsetY + targetCell.row]?.[offsetX + targetCell.col];

            if (cell?.isBomb) {
                ++res;
            }
        }
    }

    return res || null;
};

export default getBombNearCount;
