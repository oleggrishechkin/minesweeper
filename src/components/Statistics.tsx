import styled from 'styled-components';
import { ReactElement } from 'react';
import Timer from './Timer';
import ClearButton from './ClearButton';
import FlagCount from './FlagCount';

const StyledStatistics = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Statistics = (): ReactElement => (
    <StyledStatistics>
        <FlagCount />
        <ClearButton />
        <Timer />
    </StyledStatistics>
);

export default Statistics;
