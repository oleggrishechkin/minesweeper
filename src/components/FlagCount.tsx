import { useTagged } from 'react-tagged-state';
import { ReactElement } from 'react';
import bombCountState from '../states/bombCountState';
import boardState from '../states/boardState';

const FlagCount = (): ReactElement => {
    const bombCount = useTagged(bombCountState);
    const flags = useTagged(() => boardState()?.flags);

    return <span>Flags:{typeof flags === 'number' ? flags : bombCount}</span>;
};

export default FlagCount;
