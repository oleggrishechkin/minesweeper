import { createSignal } from 'react-tagged-state';

const bombCountState = createSignal<number>(99);

export default bombCountState;
