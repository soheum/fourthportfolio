import React from 'react';
import './Hera.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkThree, Video } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import {Helmet} from 'react-helmet';
import HeroSection  from '../HeroSection';
import { workObjThree } from '../HomePage/Data';
import ReactPlayer from "react-player";
import RougeHolicVideo from './IS_rougeholic_1.mp4';
import SigniaVideo from './IS_signia_1.mp4';

function Hera() {
    return (
        <>
        <div>
        <HeroSection {...workObjThree} />
        <WorkTitle {...WorkThree} />
        </div>
        {/* <div className="hera_bg"> */}
        <div className="container">
            <div className="container_semititle">
                <span className="emphasize_hera">Rouge Holic</span>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_hera">INSTAGRAM STORY</span> 
                    {/* <span className="content_text_hera">Rouge Holic is Hera's classic lipstick collection that got renewed with a new modern touch.</span> <br />  */}
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container player-wrapper">
                <ReactPlayer className="react-player" width="100%" height="100%" url={RougeHolicVideo} playing={true} />
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_hera">DIGITAL ADS</span> 
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how"  id="#rougeholic_white">
                <img className="joul_img" src={"./images/hera/rougeholic_white.jpg"} />
            </div>

            <div className="container_semititle">
                <span className="emphasize_hera">Signia</span>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_hera">INSTAGRAM STORY</span>
                    {/* <span className="content_text_hera">Signia is Hera's premium skin care line.</span> <br />  */}
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container player-wrapper">
                <ReactPlayer className="react-player" width="100%" height="100%" url={SigniaVideo} playing={true} />
            </div>

            <div className="container_semititle">
                <span className="emphasize_hera">Lingerie collection</span>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_hera">INSTAGRAM STORY</span> 
                    {/* <span className="content_text_hera">Lingerie collection is Hera's limited edition for its makeup products.</span> <br />  */}
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/hera/lingerie_white.jpg"} />
            </div>

            <div className="container_semititle">
                <span className="emphasize_hera">Other collections</span>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_hera">DIGITAL ADS</span> 
                    {/* <span className="content_text_hera">Lingerie collection is Hera's limited edition for its makeup products.</span> <br />  */}
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/hera/sensual_white.jpg"} />
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/hera/kakao_white.jpg"} />
            </div>

        </div>
        {/* </div> */}
      


        <div className="footer"></div>
        </>
    );
}

export default Hera;