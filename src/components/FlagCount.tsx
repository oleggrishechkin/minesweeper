import { useSignal } from 'react-tagged-state';
import { ReactElement } from 'react';
import bombCountState from '../states/bombCountState';
import flagsState from '../states/flagsState';
import startTimeState from '../states/startTimeState';

const FlagCount = (): ReactElement => {
    const bombCount = useSignal(bombCountState);
    const flags = useSignal(flagsState);
    const startTime = useSignal(startTimeState);

    return <span>Flags:{startTime ? flags : bombCount}</span>;
};

export default FlagCount;
