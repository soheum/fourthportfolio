import React from 'react';
import './Philips.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkFive } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import HeroSection  from '../HeroSection';
import { workObjFive } from '../HomePage/Data';
import ReactPlayer from "react-player";


function Philips() {
    return (
        <>
        <div>
        <HeroSection {...workObjFive} />
        <WorkTitle {...WorkFive} />
        </div>
        <div className="container">
            <hr></hr>
            <div className="container_semititle">
                <span className="more">THIS PROJECT IS NDA PROTECTED. EMAIL SOHEUM@NAVER.COM TO KNOW MORE ABOUT IT!</span>
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

export default Philips;