import { createTagged } from 'react-tagged-state';

export interface Cell {
    id: string;
    row: number;
    col: number;
    bombCount: number | null;
    isBomb: boolean;
    isFlag: boolean;
    isOpened: boolean;
}

export interface BoardState {
    board: Array<Array<Cell>>;
    flags: number;
    cells: number;
}

const boardState = createTagged<BoardState | null>(null);

export default boardState;
