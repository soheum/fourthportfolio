import React from 'react';
import './Thesis.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkFour } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import HeroSection  from '../HeroSection';
import { workObjFour } from '../HomePage/Data';
import ReactPlayer from "react-player";


function Thesis() {
    return (
        <>
        <div>
        <HeroSection {...workObjFour} />
        <WorkTitle {...WorkFour} />
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

export default Thesis;