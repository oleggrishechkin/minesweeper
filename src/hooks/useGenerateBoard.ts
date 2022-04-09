import { useSignalEffect } from 'react-tagged-state';
import init from '../actions/init';

const useGenerateBoard = () => useSignalEffect(init, []);

export default useGenerateBoard;
