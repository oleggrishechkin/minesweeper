import { ReactElement, MouseEvent, useRef } from 'react';
import { useTagged } from 'react-tagged-state';
import styled from 'styled-components';
import open from '../../actions/open';
import openNear from '../../actions/openNear';
import flag from '../../actions/flag';
import start from '../../actions/start';
import boardState from '../../states/boardState';
import gameOverState, { GameOver } from '../../states/gameOverState';
import widthState from '../../states/widthState';
import heightState from '../../states/heightState';
import generateBoardState from '../../utils/generateBoardState';
import Cell from './Cell';
import { CELL_SIZE, BOARD_ID } from './constants';
import VirtualBoard from './VirtualBoard';

const StyledBoard = styled.section`
    display: flex;
    overflow: auto;
    max-width: 100%;
    border-top: 1px solid black;
    border-left: 1px solid black;
`;

const getEventPoint = (event: MouseEvent) => {
    const rect = document.getElementById(BOARD_ID)?.getBoundingClientRect();

    if (!rect) {
        return [0, 0];
    }

    return [Math.floor((event.clientY - rect.top) / CELL_SIZE), Math.floor((event.clientX - rect.left) / CELL_SIZE)];
};

const Board = (): ReactElement => {
    const ref = useRef<HTMLDivElement | null>(null);
    const board = useTagged(boardState);
    const gameOver = useTagged<GameOver>(gameOverState);
    const width = useTagged<number>(widthState);
    const height = useTagged<number>(heightState);
    const boardBoard = board ? board.board : generateBoardState(width, height, 0).board;
    const rows = boardBoard.length;
    const cols = boardBoard[0].length;
    const boardWidth = cols * CELL_SIZE;
    const boardHeight = rows * CELL_SIZE;

    return (
        <StyledBoard ref={ref}>
            <canvas
                id={BOARD_ID}
                style={{
                    width: boardWidth,
                    height: boardHeight,
                    userSelect: 'none',
                    cursor: 'pointer',
                    pointerEvents: gameOver ? 'none' : undefined
                }}
                data-is-over={!!gameOver}
                width={boardWidth}
                height={boardHeight}
                onClick={(event) => {
                    const [row, col] = getEventPoint(event);

                    if (board) {
                        open(boardBoard[row][col]);

                        return;
                    }

                    start(row, col);
                }}
                onDoubleClick={
                    board
                        ? (event: MouseEvent) => {
                              const [row, col] = getEventPoint(event);

                              openNear(boardBoard[row][col]);
                          }
                        : undefined
                }
                onContextMenu={
                    board
                        ? (event: MouseEvent) => {
                              event.preventDefault();

                              const [row, col] = getEventPoint(event);

                              flag(boardBoard[row][col]);
                          }
                        : undefined
                }
            />
            <VirtualBoard parentRef={ref} board={boardBoard}>
                {({ cell }) => <Cell key={cell.id} cell={cell} />}
            </VirtualBoard>
        </StyledBoard>
    );
};

export default Board;
