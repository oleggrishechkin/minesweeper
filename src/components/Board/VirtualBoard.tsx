import { ReactElement, RefObject, useLayoutEffect, useMemo, Fragment, useState } from 'react';
import { BoardState, Cell } from '../../states/boardState';
import { CELL_SIZE } from './constants';

const VirtualBoard = ({
    parentRef,
    board,
    children
}: {
    parentRef: RefObject<HTMLElement>;
    board: BoardState['board'];
    children: (props: { cell: Cell }) => ReactElement;
}): ReactElement => {
    const [state, setState] = useState(() => [
        [0, 0],
        [0, 0]
    ]);

    useLayoutEffect(() => {
        let frameId: any;
        const frame = () => {
            if (parentRef.current) {
                const rect = parentRef.current.getBoundingClientRect();

                const nextFromRow = Math.max(Math.floor(parentRef.current.scrollTop / CELL_SIZE), 0);
                const nextToRow = Math.max(Math.ceil((parentRef.current.scrollTop + rect.height) / CELL_SIZE), 0);
                const nextFromCol = Math.max(Math.floor(parentRef.current.scrollLeft / CELL_SIZE), 0);
                const nextToCol = Math.max(Math.ceil((parentRef.current.scrollLeft + rect.width) / CELL_SIZE), 0);

                setState((currentState) => {
                    if (
                        currentState[0][0] === nextFromRow &&
                        currentState[0][1] === nextToRow &&
                        currentState[1][0] === nextFromCol &&
                        currentState[1][1] === nextToCol
                    ) {
                        return currentState;
                    }

                    return [
                        [nextFromRow, nextToRow],
                        [nextFromCol, nextToCol]
                    ];
                });
            }
            frameId = requestAnimationFrame(frame);
        };

        frame();

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, [parentRef]);
    const data = useMemo(() => {
        const res = [];
        let row = state[0][0];
        let col;
        const rows = board.length;
        const cols = board[0].length;

        for (; row < state[0][1] && row < rows; ++row) {
            for (col = state[1][0]; col < state[1][1] && col < cols; ++col) {
                res.push(children({ cell: board[row][col] }));
            }
        }

        return res;
    }, [board, children, state]);

    return <Fragment>{data}</Fragment>;
};

export default VirtualBoard;
