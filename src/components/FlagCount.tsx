import { useTagged } from 'react-tagged-state';
import { ReactElement } from 'react';
import bombCountState from '../states/bombCountState';
import boardState, { BoardState } from '../states/boardState';

const FlagCount = (): ReactElement => {
    const bombCount = useTagged(bombCountState);
    const flags = useTagged(boardState<BoardState['flags']>`flags`);

    return <span>Flags:{typeof flags === 'number' ? flags : bombCount}</span>;
};

export default FlagCount;
