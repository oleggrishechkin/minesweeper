import styled from 'styled-components';
import { ReactElement } from 'react';
import WidthInput from './WidthInput';
import HeightInput from './HeightInput';
import BombCountInput from './BombCountInput';

const StyledSettings = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: wrap;
`;

const Settings = (): ReactElement => (
    <StyledSettings>
        <WidthInput />
        <HeightInput />
        <BombCountInput />
    </StyledSettings>
);

export default Settings;
