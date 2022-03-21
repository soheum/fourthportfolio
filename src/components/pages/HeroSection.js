import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection({
    h1_headline, h2_text
}) { 
    return (
        <>
        <div className="container">
            <div className="header">
                <div className="empty"></div>
                <div className="fill">
                    <h1>{h1_headline}</h1> <br />
                    <h2>{h2_text}</h2>
                </div>
            </div>
            {/* <div className="header">
                <div className="empty"></div>
                <div className="fill">
                    <h2>{h2_text}</h2>
                </div>
            </div> */}
        </div>

        </>
    );
}

export default HeroSection;