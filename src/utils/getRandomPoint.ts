const getRandomPoint = (width: number, height: number): [number, number] => [
    Math.floor(Math.random() * height),
    Math.floor(Math.random() * width)
];

export default getRandomPoint;
