import { BoardState } from '../states/boardState';

const copyBoard = (board: BoardState): BoardState => ({
    ...board,
    board: [...board.board]
});

export default copyBoard;
