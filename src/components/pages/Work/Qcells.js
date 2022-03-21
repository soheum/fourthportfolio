import React from 'react';
import './Qcells.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkNine } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import HeroSection  from '../HeroSection';
import { workObjNine } from '../HomePage/Data';
import ReactPlayer from "react-player";


function Qcells() {
    return (
        <>
        <div>
        <HeroSection {...workObjNine} />
        <WorkTitle {...WorkNine} />
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

export default Qcells;