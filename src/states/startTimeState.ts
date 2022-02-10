import { createSignal } from 'react-tagged-state';

const startTimeState = createSignal<number | null>(null);

export default startTimeState;
