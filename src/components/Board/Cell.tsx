import { Fragment, memo, useLayoutEffect } from 'react';
import { Cell as CellInterface } from '../../states/boardState';
import { CELL_SIZE, HALF_CELL_SIZE, BOARD_ID, CELL_COLOR } from './constants';

const renderCell = (ctx: CanvasRenderingContext2D, { cell }: { cell: CellInterface }) => {
    const x = cell.col * CELL_SIZE;
    const y = cell.row * CELL_SIZE;

    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
    ctx.fillStyle = cell.isOpened ? 'aliceblue' : 'lightgray';
    ctx.fillRect(x, y, CELL_SIZE - 1, CELL_SIZE - 1);
    ctx.font =
        "12px -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (!cell.isOpened) {
        if (cell.isFlag) {
            ctx.fillText('🚩', x + HALF_CELL_SIZE - 1, y + HALF_CELL_SIZE);

            return;
        }

        return;
    }

    if (cell.isBomb) {
        if (cell.isFlag) {
            ctx.fillText('✅', x + HALF_CELL_SIZE - 1, y + HALF_CELL_SIZE);

            return;
        }

        ctx.fillText('💣', x + HALF_CELL_SIZE - 1, y + HALF_CELL_SIZE);

        return;
    }

    if (!cell.bombCount) {
        return;
    }

    if (CELL_COLOR[cell.bombCount]) {
        ctx.fillStyle = CELL_COLOR[cell.bombCount];
    }

    ctx.fillText(`${cell.bombCount}`, x + HALF_CELL_SIZE - 1, y + HALF_CELL_SIZE);
};

const Cell = memo<{ cell: CellInterface }>(({ cell }) => {
    useLayoutEffect(() => {
        const ctx = (document.getElementById(BOARD_ID) as HTMLCanvasElement).getContext('2d');

        if (ctx) {
            renderCell(ctx, { cell });
        }
    }, [cell]);

    return <Fragment />;
});

export default Cell;
