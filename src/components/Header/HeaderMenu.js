import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { HeaderMenuContainer, StyledHeaderMenuContainer, StyledMenu, StyledMenuItem } from './HeaderMenu.styled';
import { ButtonStyled } from '../../ui-kits/Button/button.styled';
import Text from '../../ui-kits/Text';



function HeaderMenu(props) {

    const [currentUrl, setCurrentUrl] = useState('/');
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        setCurrentUrl(location.pathname);
    }, [location])

    function handleSelectedActive(selectedItem) {
        setCurrentUrl(selectedItem);   
        // kỷ thuật chuyển trang bằng code không dùng thẻ <Link>
        history.push(selectedItem.key);
    }
   

    return (
        <HeaderMenuContainer colorProps='red'>
            <Text tag='link' href="/" isBold isUnderline></Text>
            <ButtonStyled>Click me!</ButtonStyled>
            <div className="header-menu">
                <StyledHeaderMenuContainer>
                    <StyledMenu
                        theme="light"
                        mode="horizontal"
                        selectedKeys={[currentUrl]}
                        onSelect={handleSelectedActive}
                    >
                        <StyledMenuItem key="/">Home</StyledMenuItem>
                        <StyledMenuItem key="/dashboard">Dashboard</StyledMenuItem>
                        <StyledMenuItem key="/listblogs">List Blogs</StyledMenuItem>
                        <StyledMenuItem key="/login">Login</StyledMenuItem>
                    </StyledMenu>
                </StyledHeaderMenuContainer>
            </div>
        </HeaderMenuContainer>
    );
}

export default HeaderMenu;