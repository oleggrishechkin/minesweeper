import { ReactElement, useEffect, useReducer } from 'react';
import { useSignal } from 'react-tagged-state';
import endTimeState from '../states/endTimeState';
import startTimeState from '../states/startTimeState';

const Timer = (): ReactElement => {
    const [, forceUpdate] = useReducer((s) => s + 1, 0);
    const startTime = useSignal(startTimeState);
    const endTime = useSignal(endTimeState);

    useEffect(() => {
        let intervalId: any;

        if (!endTime && !!startTime) {
            intervalId = setInterval(() => {
                forceUpdate();
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [startTime, endTime]);

    return <span>Time:{startTime ? Math.floor(((endTime || Date.now()) - startTime) / 1000) : 0}</span>;
};

export default Timer;
