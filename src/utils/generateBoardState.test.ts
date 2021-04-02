import generateBoardState from './generateBoardState';

test('should generate board', () => {
    const width = 1;
    const height = 1;
    const bombCount = 0;

    const expectedBoardState = {
        board: [
            [
                {
                    row: 0,
                    col: 0,
                    bombCount: null,
                    isBomb: false,
                    isFlag: false,
                    isOpened: false
                }
            ]
        ],
        flags: 0,
        cells: 1
    };

    const boardState = generateBoardState(width, height, bombCount);

    expect(boardState).toEqual(expectedBoardState);
});
