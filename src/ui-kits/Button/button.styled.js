import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonStyled = styled(Button)`
    background: lightgreen;
    height: 40px;
    font-weight: bold;
    font-size: 18px;

    &:hover, 
    &:focus, 
    &:active {
        background: #e53935;
        color: #333;
        border-color: #e53935;
    }
    
`;