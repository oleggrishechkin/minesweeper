import copyBoard from './copyBoard';

test('should copy and copy board prop', () => {
    const boardState = { board: [], flags: 99, cells: 381 };

    const boardCopy = copyBoard(boardState);

    expect(boardCopy).not.toBe(boardState);
    expect(boardCopy.board).not.toBe(boardState.board);
    expect(boardCopy).toEqual(boardState);
});
