import { createSignal } from 'react-tagged-state';

const endTimeState = createSignal<number | null>(null);

export default endTimeState;
