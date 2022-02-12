import { createSignal } from 'react-tagged-state';

export interface Cell {
    id: string;
    row: number;
    col: number;
    bombCount: number;
    isBomb: boolean;
    isFlag: boolean;
    isOpened: boolean;
}

const boardState = createSignal<Array<Array<Cell>> | null>(null);

export default boardState;
