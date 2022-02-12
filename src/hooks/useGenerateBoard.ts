import { useEffect } from 'react';
import { createEffect } from 'react-tagged-state';
import clear from '../actions/clear';

const useGenerateBoard = () => {
    useEffect(
        () =>
            createEffect(() => {
                clear();
            }),
        []
    );
};

export default useGenerateBoard;
