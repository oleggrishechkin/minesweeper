import { createTagged } from 'react-tagged-state';

const bombCountState = createTagged<number>(99);

export default bombCountState;
