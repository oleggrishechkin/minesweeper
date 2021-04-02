import { useTagged } from 'react-tagged-state';
import { ReactElement } from 'react';
import heightState from '../states/heightState';
import minMax from '../utils/minMax';

const MAX = 819;

const HeightInput = (): ReactElement => {
    const height = useTagged(heightState);

    return (
        <label>
            Height:
            <input
                key={height}
                defaultValue={height}
                type="number"
                onBlur={(event: { target: HTMLInputElement }) =>
                    heightState(minMax(1, +(event.target.value || 0), MAX))
                }
                min={8}
                max={MAX}
            />
        </label>
    );
};

export default HeightInput;
