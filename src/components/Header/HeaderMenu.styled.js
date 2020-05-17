import styled from 'styled-components';
import { VARIABLES } from '../../constants/theme';
import { StyledContainer } from '../Layout/Layout.styled';
import { Menu } from 'antd';

const MenuItem = Menu.Item;
// đây là cách Kế thừa
export const StyledHeaderMenuContainer = styled(StyledContainer)``;

// HeaderMenuContainer sẽ dùng như 1 Cpt thay cho thẻ <header> có trong Cpt
export const HeaderMenuContainer = styled.header`
    // bên trong là 'string'
    // colorProps là cái truyền vào Props -> colorProps là tên_props
    color: ${props => props.colorProps};
`;

// -> .ant-menu-horizontal (<ul>)
export const StyledMenu = styled(Menu)`
    border-bottom: 0;
    background: ${VARIABLES.BK_MENU};
    color: ${VARIABLES.WHITE};

    &.ant-menu-horizontal  > .ant-menu-item:hover, 
    &.ant-menu-horizontal  > .ant-menu-submenu:hover, 
    &.ant-menu-horizontal  > .ant-menu-item-active, 
    &.ant-menu-horizontal  > .ant-menu-submenu-active, 
    &.ant-menu-horizontal  > .ant-menu-item-open, 
    &.ant-menu-horizontal  > .ant-menu-submenu-open, 
    &.ant-menu-horizontal  > .ant-menu-item-selected, 
    &.ant-menu-horizontal  > .ant-menu-submenu-selected {
        background: ${VARIABLES.HOVER_TEXT};
        color: ${VARIABLES.WHITE};
        border-bottom: 0;
    }

    &.ant-menu-horizontal > .ant-menu-item, 
    &.ant-menu-horizontal > .ant-menu-submenu {
        top: 0;
        border-bottom: 0;
    }
`;

export const StyledMenuItem = styled(MenuItem)`
    font-size: 16px;
`
