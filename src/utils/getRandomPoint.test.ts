import getRandomPoint from './getRandomPoint';

test('should get numbers within [0-max) interval', () => {
    const maxRow = 10;
    const maxCol = 20;

    const [row, col] = getRandomPoint(maxCol, maxRow);

    expect(row < maxRow && row >= 0).toBe(true);
    expect(col < maxCol && col >= 0).toBe(true);
});
