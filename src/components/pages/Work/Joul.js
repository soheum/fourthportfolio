import React from 'react';
import './Joul.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkOne, Video } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import {Helmet} from 'react-helmet';
import HeroSection  from '../HeroSection';
import { workObjOne } from '../HomePage/Data';
import ReactPlayer from "react-player";


function Joul() {
    return (
        <>
        <div>
        <HeroSection {...workObjOne} />
        <WorkTitle {...WorkOne} />
        </div>
        <div className="joul_bg">
        <div className="container" id="joul_question">
            <img className="joul_img" src={"./images/joul/hmw.png"} /> <br />
            <div className="container_question">
                <span className="question">How might children explore about </span>
                <span className="emphasize">sustainability by themselves,</span> <br />
                <span className="question">but not being taught?</span>
            </div>
            <div className="container player-wrapper">
                <ReactPlayer className="react-player" width="100%" height="100%" url="https://vimeo.com/396714971" />
            </div>

            <div className="container_semititle">
                <span className="emphasize">key components</span>
            </div>
            <div className="container_keycomponent">
                <div className="keycomponent_1">
                    <span className="content_title"> GENERATOR BLOCKS</span> <br /> <br />
                    <span className="content_text">Children can generate different types of energy such as </span><span className="content_text_bd">kinetic, solar or wind energy</span><span className="content_text"> with generator blocks. </span> <br />
                    <img className="joul_img" src={"./images/joul/kc_generator.png"} />
                </div>
                <div className="keycomponent_1">
                    <span className="content_title">BATTERY BLOCKS</span> <br /> <br />
                    <span className="content_text_bd">Charged energy is stored</span><span className="content_text">in battery blocks and three LED lights visually quantify its charging status.</span> <br />
                    <img className="joul_img" src={"./images/joul/kc_battery.png"} />
                </div>
                <div className="keycomponent_1">
                    <span className="content_title">OUTPUT BLOCKS</span> <br /> <br />
                    <span className="content_text">Battery blocks connect to output blocks </span><span className="content_text_bd">to create different feedback such as light, sound or vibration.</span> <br />
                    <img className="joul_img" src={"./images/joul/kc_output.png"} />
                </div>
                <div className="keycomponent_1">
                    <span className="content_title">MOBILE APP</span> <br /> <br />
                    <span className="content_text">The app shows </span><span className="content_text_bd">how much energy is being charged in joules</span><span className="content_text"> while the generator blocks are being charged. </span> <br />
                    <img className="joul_img" src={"./images/joul/kc_app.png"} />
                </div> 
            </div>

            <div className="container_semititle">
                <span className="emphasize">how it works?</span>
            </div>
            <div className="container_how">
                <div className="how_1">
                    <ReactPlayer url={"./images/joul/key_charge.mp4"} width="100%" height="100%" controls={false} muted={true} playing={true} loop={true}/>
                    <span className="content_title">CHARGE ENERGY</span>
                </div>
                <div className="how_1">
                    <ReactPlayer url={"./images/joul/key_generate.mp4"} width="100%" height="100%" controls={false} muted={true} playing={true} loop={true}/>
                   <span className="content_title">STORE CHARGED ENERGY</span>
                </div>
                <div className="how_1">
                    <ReactPlayer url={"./images/joul/key_output.mp4"} width="100%" height="100%" controls={false} muted={true} playing={true} loop={true}/>
                    <span className="content_title">USE STORED ENERGY</span>
                </div>
            </div>
            <div className="container_how" id="how">
                <div className="how_2_left">
                  <span className="content_title">MOBILE APP CONNECTION</span> <br /> <br />
                  <span className="content_text">Joul blocks can be </span><span className="content_text_bd">connected to a mobile app</span><span className="content_text"> that indicates the </span> <span className="content_text_bd">status of charged energy in joules</span>
                  <span className="content_text"> simulatenously. It also makes a</span> <span className="content_text_bd"> visual analogy of other activities that are available.</span> <br /> <br />
                  <span className="content_text"> This enables children to understand if the charged energy is equivalent for example for lightening up a lamp or using a smartphone.</span>
                </div>
                <div className="how_2_right" id="how_2_right"> 
                    <img className="joul_img" id="joul_img" src={"./images/joul/how_app.png"} />
                </div>
            </div>
        </div>
        </div>

        <div className="joul_bg2">
        <div className="container" id="joul_discover">
            <div className="container_semititle">
                <span className="emphasize3">design process: discover</span>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title2">ARE PARENTS TEACHING THEIR CHILDREN ABOUT SUSTAINABILITY?</span> <br /> <br /> <br />
                    <span className="content_text">We interviewed </span><span className="content_text_bd">2 parents with children</span><span className="content_text"> who were each 19 and 5 years old.</span> <br /> 
                    <span className="content_text">As a result, </span><span className="content_text_bd">parents with 5 year olds better acknowledged the importance of teaching sustainability.</span><span className="content_text"> However, they were </span>
                    <span className="content_text_bd">having a hard time explaining abstract concepts.</span><span className="content_text">Teaching sustainability was not primarily about conveying micro-level habits like recycling or saving power. Parents had to give their children a bigger picture of the cycle and how our planet's resources work.</span>
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <div className="interview_result">
                   <img className="joul_int_img" src={"./images/joul/int_sustain.png"} /> <br/><br/><br/>
                    <span className="content_title">IMPORTANCE OF SUSTAINABILITY</span> <br /><br/>
                    <span className="content_text">“I haven't spare time to teach my children about sustainability in particular, <br/>rather </span><span className="content_text_bd">I thought it was common sense.”</span><br/>
                    <span className="content_text">_father with 19 year old daughter</span>
                </div>
                <div className="interview_result">
                    <img className="joul_int_img" src={"./images/joul/int_abstract.png"} /> <br/><br/><br/>
                    <span className="content_title">ABSTRACT CONCEPTS</span><br/><br/>
                    <span className="content_text_bd">“Talking about abstract concepts with my son is hard, </span><br/><span className="content_text">because I don't know on which level to explain them.”</span><br/>
                    <span className="content_text">_mother with 5 year old son</span>
                </div>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title2">how do children from 4 to 6 year olds learn?</span> <br /> <br />
                    <span className="content_text">We saw how different children workshops are done in Bildmuseet, an art museum next to our school. <br />There were workshops that dealt questions like </span><span className="content_text_bd">“What would you change if you can change something in the world?”</span><span className="content_text">and children had to craft their solutions. Results varied from making robots that are run with orange peels to self-sorting trash cans. </span><span className="content_text_bd">Workshops were throwing open-ended questions to children</span><span className="content_text"> so that they can have an opportunity to think and explore by themselves, instead of having top-down questions that have a yes and no answer.</span>
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/joul/research_buildmuset.jpg"} />
            </div>
        </div>  
        </div>

        <div className="joul_bg3">
        <div className="container" id="joul_define">
            <div className="container_semititle">
                <span className="emphasize2">design process: define</span>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title">How can children learn sustainability, rather than being taught?</span> <br /> <br /> <br />
                    <span className="content_text_bd">Sustainability should not be taught from a top-down approach. </span><br /><span className="content_text">Rather children should learn by themselves through creative freedom and exploration. After this exploration process, our solution should act as </span><span className="content_text_bd">a conversation starter for parents that they can naturally use </span><span className="content_text">to explain important concepts through play.</span><br /> 
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/joul/joul_define.jpg"} />
            </div>
        </div>
        </div>

        <div className="container" id="joul_develop">
            <div className="container_semititle">
                <span className="emphasize3">design process: develop</span>
            </div>
            <div className="container_develop">
                <div className="develop_left">
                    <span className="content_title">01. EARLY STAGE MOCKUPS AND SOUND SKETCH VIDEO</span> <br /> <br /> 
                    <span className="content_text">Early on in the process, we made rudimentary foam mockups and magnets to visualize different types of modules and test interaction methods. These foam mockups were also used to film a sound sketch video, where we tested out sound effects for each interaction.</span>
                </div>
                <div className="develop_right">
                </div>
            </div>
            <div className="container_develop_btm">
                <div className="develop_video">
                    <ReactPlayer url={"./images/joul/joul_mockup1.mp4"} width="100%" height="100%" controls={false} muted={true} playing={true} loop={true}/>
                </div>
                <div className="develop_video">
                    <ReactPlayer url={"./images/joul/joul_mockup2.mp4"} width="100%" height="100%" controls={false} muted={true} playing={true} loop={true}/>
                </div>
                <div className="develop_video">
                    <ReactPlayer url={"./images/joul/joul_mockup3.mp4"} width="100%" height="100%" controls={false} muted={true} playing={true} loop={true}/>
                </div>
            </div>
            <div className="container_develop">
                <div className="develop_left">
                    <span className="content_title">02. EXPLORING FORM THAT ENHANCES CREATIVE FREEDOM</span> <br /> <br /> 
                    <span className="content_text">In order to give the most creative freedom for children, we brainstormed different forms and decided on a basic square-shape. This basic form will allow children to focus on their creativity since it does not have any additional details.</span>
                </div>
                <div className="develop_right">
                </div>
            </div>
            <div className="container_develop_btm">
                <img className="joul_img" src={"./images/joul/joul_form.png"} /> 
            </div>
            <div className="container_develop">
                <div className="develop_left">
                    <span className="content_title">03. FINAL MODEL MAKING</span> 
                </div>
                <div className="develop_right"></div>
            </div>
            <div className="container_develop_btm">
                <img className="joul_img" src={"./images/joul/joul_model.jpg"} />
            </div>
            <div className="container_develop">
                <div className="develop_left">
                    <span className="content_title">04. MODEL MAKING AND INTERACTION</span> <br /> <br />
                    <span className="content_text">As the only interaction designer in the group, I was responsible for creating an interaction for a battery block turning on a LED light attached on an output block. I used a reed switch, magnets and semi-transparent paper to light up the output block.</span>
                </div>
                <div className="develop_right"></div>
            </div>
            <div className="container_develop_btm">
                <img className="joul_img" src={"./images/joul/joul_prototype.jpg"} />
            </div>
            <div className="container_develop">
                <div className="develop_left">
                    <span className="content_title">05. SOUND DESIGN</span> <br /> <br />
                    <span className="content_text">Sound was used as an interaction factor to make the process more playful and comprehensible. Specially designed sounds help children to link different sounds to energy sources and assist them in making the energy cycle tangible. The sound concept focuses on playful, wooden sounds, which go hand in hand with the natural material of the wooden blocks. Tones from the marimba characterize the connection between different blocks. Wind energy is aurally described through a flute sound that is created through air, while solar energy has a ray sound-effect utilizing guitar strings.</span>
                </div>
                <div className="develop_right"></div>
            </div>
            <div className="container_develop_btm">
                <img className="joul_img" src={"./images/joul/joul_sound.jpg"} />
            </div>
            <div className="container_develop">
                <div className="develop_left">
                    <span className="content_title">06. FILM MAKING / USER TESTING</span> <br /> <br />
                    <span className="content_text">Since the project was only 2 weeks, we decided to challenge ourselves by combining filmmaking and user testing. Instead of asking the child to act out in front of a camera, we showed our prototype and asked him to play with. For certain features that were not made in our prototype, we explained how it would work in detail. As a result, the child kept on asking additional questions about how the toy and energy cycle works which was why we decided to add a mobile app feature. This was therefore an iterative process where we found a clear reason in implementing a digital app.</span>
                </div>
                <div className="develop_right"></div>
            </div>
            <div className="container_develop_btm">
                <img className="joul_img" src={"./images/joul/joul_filmmaking.jpg"} />
            </div>
        </div>

        <div className="container" id="joul_deliver">
            <div className="container_semititle">
                <span className="emphasize3">design process: deliver</span>
            </div>
            <div className="container_deliver">
                <span className="question_title2">01. KEY FEATURES</span> 
            </div>
            <div className="container_keycomponent">
                <div className="deliver_1">
                    <span className="content_title">INTERACTIVE</span> <br /> <br /> 
                    <span className="content_text">Different sounds gives feedback for different types of action</span>
                </div>
                <div className="deliver_1">
                    <span className="content_title">TANGIBLE</span> <br /> <br /> 
                    <span className="content_text">Creative freedom achieved through combining tangible blocks</span>
                </div>
                <div className="deliver_1">
                    <span className="content_title">EDUCATIONAL</span> <br /> <br /> 
                    <span className="content_text">Learning through play about sustainability and how energy cycle works</span>
                </div>
            </div>
            <div className="container_develop_btm">
                <img className="joul_img" src={"./images/joul/joul_deliver.png"} />
            </div>

            <div className="container_deliver">
                <span className="question_title2">02. INTERACTION DIAGRAM</span> 
            </div>
            <div className="container_develop_btm">
                <img className="joul_img" src={"./images/joul/joul_intdiagram.jpg"} />
            </div>

            <div className="container_deliver">
                <span className="question_title2">03. USER FLOW</span> 
            </div>
            <div className="container_develop_btm">
                <img className="joul_img" src={"./images/joul/joul_userflow.png"} />
            </div>
        </div>
   


        <div className="footer"></div>
        </>
    );
}

export default Joul;