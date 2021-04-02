import minMax from './minMax';

test('should limit value by min value', () => {
    const min = 10;
    const max = 20;
    const value = 1;

    const minMaxValue = minMax(min, value, max);

    expect(minMaxValue).toBe(min);
});

test('should limit value by max value', () => {
    const min = 10;
    const max = 20;
    const value = 21;

    const minMaxValue = minMax(min, value, max);

    expect(minMaxValue).toBe(max);
});

test('should return value is value within interval', () => {
    const min = 10;
    const max = 20;
    const value = 15;

    const minMaxValue = minMax(min, value, max);

    expect(minMaxValue).toBe(value);
});
