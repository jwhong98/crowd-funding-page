import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FAFAFA;
`;

export const HeaderTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border-radius: 10px;
    margin-top: -80px;
    z-index: 10;
    background-color: #fff;
    padding: 30px;
`;

export const HeaderImg = styled.img`
    margin-bottom: 30px;
    width: 5rem;
    margin-top: -75px;
    background-color: transparent;
`;

export const HeaderTitle = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    background-color: #fff;
`;

export const HeaderDescription = styled.p`
    text-align: center;
    margin-bottom: 30px;
    color: #4E4E4E;
    background-color: #fff;
`;

export const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
`;

export const HeaderButton = styled.button`
    font-size: 1.5rem;
    border-radius: 50px;
    outline: none;
    border: none;
    padding: 20px 60px;
    font-weight: 700;
    color: #fff;
    background-color: hsl(176, 50%, 47%);
    cursor: pointer;
`;

export const Bookmark = styled.img`
    cursor: pointer;
`;