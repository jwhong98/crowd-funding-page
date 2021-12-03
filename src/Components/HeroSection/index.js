import React from 'react'
import { HeroContainer, HeroImg } from './HeroSectionElements';
import img from '../../images/image-hero-mobile.jpg';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroImg src={img} />
        </HeroContainer>
    )
}

export default HeroSection;
