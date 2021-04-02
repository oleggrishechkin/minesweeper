import styled from 'styled-components';
import { ReactElement } from 'react';
import Board from './components/Board/Board';
import Settings from './components/Settings';
import Statistics from './components/Statistics';

const StyledApp = styled.main`
    display: flex;
    flex-direction: column;
    margin: auto;
    height: calc(100vh - 20px);
    padding-top: 20px;
    width: calc(100vw - 40px);
    align-items: center;
`;

const App = (): ReactElement => (
    <StyledApp>
        <Settings />
        <Statistics />
        <Board />
    </StyledApp>
);

export default App;
