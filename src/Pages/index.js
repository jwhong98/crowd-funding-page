import React from 'react'
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import HeaderCard from '../Components/HeaderCard';
import ProgressCard from '../Components/ProgressCard';
import DescriptionCard from '../Components/DescriptionCard';
import Plans from '../Components/Plans';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <HeaderCard />
            <ProgressCard />
            <DescriptionCard />
            <Plans />
        </>
    )
}

export default Home;
