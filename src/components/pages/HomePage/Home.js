import React from 'react';
import HeroSection from '../HeroSection';
import HeroContent from '../HeroContent';
import { homeObjOne, homeObjTwo} from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroContent />
        </>
    )
}

export default Home;