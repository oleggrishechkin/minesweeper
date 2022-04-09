import { useSignal } from 'react-tagged-state';
import { ReactElement } from 'react';
import widthState from '../states/widthState';

const WidthInput = (): ReactElement => {
    const width = useSignal(widthState);

    return (
        <label>
            Width:
            <input
                key={width}
                defaultValue={width}
                type="number"
                onBlur={(event: { target: HTMLInputElement }) => widthState(Math.max(8, +(event.target.value || 0)))}
                min={8}
            />
        </label>
    );
};

export default WidthInput;
