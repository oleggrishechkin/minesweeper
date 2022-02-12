import { MouseEvent, ReactElement } from 'react';
import { useTagged } from 'react-tagged-state';
import { Cell as CellInterface } from '../../states/boardState';
import open from '../../actions/open';
import openNear from '../../actions/openNear';
import flag from '../../actions/flag';
import { CELL_COLOR, CELL_SIZE } from '../constants';
import styles from './Cell.module.css';

const getCellContent = (cell: CellInterface) => {
    if (!cell.isOpened) {
        if (cell.isFlag) {
            return '🚩';
        }

        return null;
    }

    if (cell.isBomb) {
        if (cell.isFlag) {
            return '✅';
        }

        return '💣';
    }

    return cell.bombCount || '';
};

const Cell = ({ cell }: { cell: CellInterface }): ReactElement => {
    useTagged(cell);

    return (
        <div
            className={styles.cell}
            style={{
                top: cell.row * CELL_SIZE,
                left: cell.col * CELL_SIZE,
                width: CELL_SIZE,
                height: CELL_SIZE,
                background: cell.isOpened ? 'aliceblue' : 'lightgray',
                color: CELL_COLOR[cell.bombCount || 0],
                ...(cell.row === 0 ? { borderTop: '1px solid black' } : {}),
                ...(cell.col === 0 ? { borderLeft: '1px solid black' } : {})
            }}
            onClick={() => {
                open(cell);
            }}
            onDoubleClick={() => {
                openNear(cell);
            }}
            onContextMenu={(event: MouseEvent) => {
                event.preventDefault();

                flag(cell);
            }}
        >
            {getCellContent(cell)}
        </div>
    );
};

export default Cell;
