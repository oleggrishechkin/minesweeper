import { useSignal } from 'react-tagged-state';
import { ReactElement } from 'react';
import bombCountState from '../states/bombCountState';
import widthState from '../states/widthState';
import heightState from '../states/heightState';

const BombCountInput = (): ReactElement => {
    const bombCount = useSignal(bombCountState);
    const width = useSignal(widthState);
    const height = useSignal(heightState);

    return (
        <label>
            Bomb count:
            <input
                key={bombCount}
                defaultValue={bombCount}
                type="number"
                onBlur={(event: { target: HTMLInputElement }) =>
                    bombCountState(Math.min(Math.max(0, +(event.target.value || 0)), width * height - 1))
                }
                min={0}
                max={width * height - 1}
            />
        </label>
    );
};

export default BombCountInput;
