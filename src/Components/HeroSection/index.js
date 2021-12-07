import React from 'react'
import { HeroContainer, HeroImg } from './HeroSectionElements';
import img from '../../images/image-hero-mobile.jpg';
import Navbar from '../Navbar';

const HeroSection = () => {
    return (
        <HeroContainer>
            {/* <Navbar /> */}
            <HeroImg src={img} />
        </HeroContainer>
    )
}

export default HeroSection;
