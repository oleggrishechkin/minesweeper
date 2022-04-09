import { useSignal } from 'react-tagged-state';
import { ReactElement } from 'react';
import heightState from '../states/heightState';

const HeightInput = (): ReactElement => {
    const height = useSignal(heightState);

    return (
        <label>
            Height:
            <input
                key={height}
                defaultValue={height}
                type="number"
                onBlur={(event: { target: HTMLInputElement }) => heightState(Math.max(8, +(event.target.value || 0)))}
                min={8}
            />
        </label>
    );
};

export default HeightInput;
