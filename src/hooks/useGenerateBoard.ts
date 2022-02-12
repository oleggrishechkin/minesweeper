import { useEffect } from 'react';
import { createEffect } from 'react-tagged-state';
import init from '../actions/init';

const useGenerateBoard = () => {
    useEffect(
        () =>
            createEffect(() => {
                init();
            }),
        []
    );
};

export default useGenerateBoard;
