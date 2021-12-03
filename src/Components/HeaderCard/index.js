import React from 'react'
import { HeaderContainer, HeaderTextWrap, HeaderImg, HeaderTitle, HeaderDescription, ButtonWrap, HeaderButton,Bookmark } from './HeaderCardElements';
import img from '../../images/logo-mastercraft.svg';
import img2 from '../../images/icon-bookmark.svg';

const HeaderCard = () => {
    return (
        <HeaderContainer>
            <HeaderTextWrap>
                <HeaderImg src={img}/>
                <HeaderTitle>Mastercraft Bamboo Monitor Riser</HeaderTitle>
                <HeaderDescription>A beautifully handcrafted monitor stand to reduce neck and eye strain</HeaderDescription>
                <ButtonWrap>
                    <HeaderButton>Back this project</HeaderButton>
                    <Bookmark src={img2}/>
                </ButtonWrap>
            </HeaderTextWrap>
        </HeaderContainer>
    )
}

export default HeaderCard;
