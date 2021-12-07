import React, { useState } from 'react'
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import HeaderCard from '../HeaderCard';
import ProgressCard from '../ProgressCard';
import DescriptionCard from '../DescriptionCard';
import Sidebar from '../Sidebar';

const Main = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            {/* <Navbar toggle={toggle}/> */}
            <HeroSection />
            <HeaderCard />
            <ProgressCard />
            <DescriptionCard />
        </>
    )
}

export default Main;
