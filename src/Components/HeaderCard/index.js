import React from 'react'
import { HeaderContainer, HeaderTextWrap, HeaderImg, HeaderTitle, HeaderDescription, ButtonWrap, HeaderButton,Bookmark } from './HeaderCardElements';

const HeaderCard = () => {
    return (
        <HeaderContainer>
            <HeaderTextWrap>
                <HeaderImg />
                <HeaderTitle></HeaderTitle>
                <HeaderDescription></HeaderDescription>
                <ButtonWrap>
                    <HeaderButton></HeaderButton>
                    <Bookmark></Bookmark>
                </ButtonWrap>
            </HeaderTextWrap>
        </HeaderContainer>
    )
}

export default HeaderCard;
