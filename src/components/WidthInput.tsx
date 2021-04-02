import { useTagged } from 'react-tagged-state';
import { ReactElement } from 'react';
import widthState from '../states/widthState';
import minMax from '../utils/minMax';

const MAX = 819;

const WidthInput = (): ReactElement => {
    const width = useTagged(widthState);

    return (
        <label>
            Width:
            <input
                key={width}
                defaultValue={width}
                type="number"
                onBlur={(event: { target: HTMLInputElement }) => widthState(minMax(8, +(event.target.value || 0), MAX))}
                min={8}
                max={MAX}
            />
        </label>
    );
};

export default WidthInput;
