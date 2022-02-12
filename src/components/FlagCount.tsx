import { useTagged } from 'react-tagged-state';
import { ReactElement } from 'react';
import bombCountState from '../states/bombCountState';
import flagsState from '../states/flagsState';
import startTimeState from '../states/startTimeState';

const FlagCount = (): ReactElement => {
    const bombCount = useTagged(bombCountState);
    const flags = useTagged(flagsState);
    const startTime = useTagged(startTimeState);

    return <span>Flags:{startTime ? flags : bombCount}</span>;
};

export default FlagCount;
