import { createTagged } from 'react-tagged-state';

const endTimeState = createTagged<number | null>(null);

export default endTimeState;
