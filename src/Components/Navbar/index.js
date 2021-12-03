import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink } from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    crowdfund
                </NavLogo>
                <MobileIcon onclick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Discover</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Get Started</NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
