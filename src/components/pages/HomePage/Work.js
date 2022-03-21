import React from 'react';
import HeroSection from '../HeroSection';
import WorkContent from '../WorkContent';
import { homeObjOne, homeObjTwo} from './Data'

function Work() {
    return (
        <>
            <HeroSection {...homeObjTwo} />
            <WorkContent />
        </>
    )
}

export default Work;