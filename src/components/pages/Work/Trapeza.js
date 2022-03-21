import React from 'react';
import './Trapeza.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkEight } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import HeroSection  from '../HeroSection';
import { workObjEight } from '../HomePage/Data';
import ReactPlayer from "react-player";


function Trapeza() {
    return (
        <>
        <div>
        <HeroSection {...workObjEight} />
        <WorkTitle {...WorkEight} />
        </div>

        <div className="container" id="seam_question">
            <img className="joul_img" src={"./images/seam/hmw.jpg"} /> <br />
            <div className="container_question_seam">
                <span className="question">How might we promote </span>
                <span className="emphasize_seam">remote togetherness</span> <br />
                <span className="question">between users with Alzheimer's and their loved ones?</span> <br />
                
            </div>
        </div>

        <div className="footer"></div>
        </>
    );
}

export default Trapeza;