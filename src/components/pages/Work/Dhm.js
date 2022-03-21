import React from 'react';
import './Dhm.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkSeven } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import HeroSection  from '../HeroSection';
import { workObjSeven } from '../HomePage/Data';
import ReactPlayer from "react-player";


function Dhm() {
    return (
        <>
        <div>
        <HeroSection {...workObjSeven} />
        <WorkTitle {...WorkSeven} />
        </div>
        <div className="container">
        <hr></hr>
            <div className="container_semititle">
                <span className="more">MORE TO COME UP SOON!</span>
            </div>
        </div>

        {/* <div className="container" id="seam_question">
            <img className="joul_img" src={"./images/seam/hmw.jpg"} /> <br />
            <div className="container_question_seam">
                <span className="question">How might we promote </span>
                <span className="emphasize_seam">remote togetherness</span> <br />
                <span className="question">between users with Alzheimer's and their loved ones?</span> <br />
                
            </div>
        </div> */}

        <div className="footer"></div>
        </>
    );
}

export default Dhm;