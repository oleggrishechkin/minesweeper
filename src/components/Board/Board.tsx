import { Fragment, ReactElement } from 'react';
import { useSignal } from 'react-tagged-state';
import boardState from '../../states/boardState';
import gameOverState from '../../states/gameOverState';
import useVirtualGrid from '../../hooks/useVirtualGrid';
import Cell from '../Cell/Cell';
import { CELL_SIZE } from '../constants';
import useGenerateBoard from '../../hooks/useGenerateBoard';
import styles from './Board.module.css';

const Board = (): ReactElement => {
    const board = useSignal(boardState);
    const gameOver = useSignal(gameOverState);
    const [parentRef, renderedCells] = useVirtualGrid({ width: CELL_SIZE, height: CELL_SIZE, overscan: 5 });

    useGenerateBoard();

    if (!board) {
        return <Fragment />;
    }

    const rows = board.length;
    const cols = board[0].length;
    const width = cols * CELL_SIZE;
    const height = rows * CELL_SIZE;
    const cells = [];

    for (let row = renderedCells.fromRow; row < renderedCells.toRow && row < board.length; row++) {
        for (let col = renderedCells.fromCol; col < renderedCells.toCol && col < board[0].length; col++) {
            const cell = board[row][col];

            cells.push(<Cell key={cell.id} cell={cell} />);
        }
    }

    return (
        <section ref={parentRef} className={styles.board}>
            <div
                className={styles.innerBoard}
                style={{
                    width,
                    height,
                    ...(gameOver ? { pointerEvents: 'none' } : {})
                }}
            >
                {cells}
            </div>
        </section>
    );
};

export default Board;
