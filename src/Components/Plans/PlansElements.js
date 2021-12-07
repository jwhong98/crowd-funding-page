import styled from "styled-components";

export const PlansContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #4E4E4E;
    border-radius: 10px;
    padding: 25px;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #fff;
`;

export const Header = styled.div`
    background-color: #fff;
`;

export const Title = styled.h3`
    margin-bottom: 10px;
    background-color: #fff;
`;

export const Subtitle = styled.p`
    margin-bottom: 30px;
    color: hsl(176, 50%, 47%);
    font-weight: 500;
    background-color: #fff;
`;

export const Content = styled.p`
    color: #4E4E4E;
    line-height: 1.5;
    margin-bottom: 30px;
    background-color: #fff;
`;

export const Footer = styled.div`
    background-color: #fff;
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    background-color: #fff;
`;

export const Value = styled.h1`
    margin-right: 10px;
    background-color: #fff;
`;

export const Label = styled.p`
    color: #4E4E4E;
    background-color: #fff;
`;

export const PlansButton = styled.button`
    padding: 20px 50px;
    border-radius: 30px;
    outline: none;
    border: none;
    background-color: hsl(176, 50%, 47%);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
`;