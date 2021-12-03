import styled from 'styled-components';
import {Link as LinkR} from "react-router-dom";

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    font-size: 1.5rem;
    margin-top: -80px;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 30px;
    z-index: 1;
`;

export const NavLogo = styled.h1`
    display: flex;
    align-items: center;
    color: #fff;
`;

export const MobileIcon = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #fff;

    @media screen and (min-width: 640px) {
            display: none;
    }
`;

export const NavMenu = styled.ul`
    display: none;

    @media screen and (min-width: 640px) {
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
    }
`;

export const NavItem = styled.li`
   
`;

export const NavLink = styled.a`

`;
