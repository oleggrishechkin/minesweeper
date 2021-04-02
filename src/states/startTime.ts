import { createTagged } from 'react-tagged-state';

const startTimeState = createTagged<number | null>(null);

export default startTimeState;
