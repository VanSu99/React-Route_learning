import styled from 'styled-components';
import { Layout } from 'antd';

// ở đâu muốn dùng Container này thì cứ import vào thôi
export const StyledContainer = styled.div`
    width: 1170px;
    max-width: 100%;
    margin: 0 auto;
`

export const StyledLayout = styled(Layout)`
    background: #fff;
`