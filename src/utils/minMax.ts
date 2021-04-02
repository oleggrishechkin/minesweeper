const minMax = (min: number, value: number, max: number): number => Math.max(Math.min(value, max), min);

export default minMax;
