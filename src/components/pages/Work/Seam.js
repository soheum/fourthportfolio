import React from 'react';
import './Seam.css';
import WorkTitle from './WorkTitle/WorkTitle';
import { WorkTwo } from './WorkTitle/Data';
import WorkSemititle from './WorkTitle/WorkSemititle';
import {Helmet} from 'react-helmet';
import HeroSection  from '../HeroSection';
import { workObjTwo } from '../HomePage/Data';
import ReactPlayer from "react-player";


function Seam() {
    return (
        <>
        <div>
        <HeroSection {...workObjTwo} />
        <WorkTitle {...WorkTwo} />
        </div>

        <div className="seam_bg">
        <div className="container" id="seam_question">
            <img className="joul_img" src={"./images/seam/hmw.jpg"} /> <br />
            <div className="container_question_seam">
                <span className="question">How might we promote </span>
                <span className="emphasize_seam">remote togetherness</span> <br />
                <span className="question">between users with Alzheimer's and their loved ones?</span> <br />
                
            </div>
            <div className="container player-wrapper">
                <ReactPlayer className="react-player" width="100%" height="100%" url="https://youtu.be/02rI5oau75U" />
            </div>

            <div className="container_semititle">
                <span className="emphasize_seam">key components</span>
            </div>
            <div className="container_keycomponent">
                <div className="keycomponent_2">
                    <span className="content_title">SEAM PORTAL</span> <br /> <br />
                    <span className="content_text">Alzheimer's individuals can make live video calls and listen to voice recordings through Seam Portal with the help of visual cues (light).</span><br />
                    <img className="joul_img" src={"./images/seam/Seams-PORT.jpg"} />
                </div>
                <div className="keycomponent_2">
                    <span className="content_title">WEB CAMERA</span> <br /> <br />
                    <span className="content_text">This camera is attached on top of Alzheimer's individuals TV, which is used for making live video calls and playing multiplayer games.</span> <br />
                    <img className="joul_img" src={"./images/seam/Seams-CAM.jpg"} />
                </div>
                <div className="keycomponent_2">
                    <span className="content_title">MOBILE APP</span> <br /> <br />
                    <span className="content_text">Loved ones can use the app to send voice recordings and photos to Alzheimer's individuals.</span> <br />
                    <img className="joul_img" src={"./images/seam/Seams-PHONE.jpg"} />
                </div>
            </div>
        </div>
        </div>

        <div className="container">
            <div className="container_semititle">
                <span className="emphasize_seam">how it works?</span>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">Instant Messaging Asynchronously</span> <br /> <br /> <br />
                    <span className="content_text">Loved ones can send voice messages, photos and videos with Seam Mobile App and Alzheimer's individuals can play these recordings by simply tapping the square button on Seam Portal when it lights up. Alzheimer's individuals can also send voice recordings as a reply through Seam Portal.</span><br /> 
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/seam/seam_howitworks.png"} />
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">video calls and multi-player games synchronously</span> <br /> <br /> <br />
                    <span className="content_text">When Alzheimer's individual is actively engaging with the received content, loved ones gets notified about the activity from the app and can connect through a video call connected with a web camera. When the two users connect synchronously, they can engage with activities such as enjoying different multiplayer games, sing-along, dance, digital board games etc.</span><br /> 
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/seam/seam_howitworks2.png"} />
            </div>
        </div>

        <div className="container">
            <div className="container_semititle">
                <span className="emphasize_seam2">design process: discover</span>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">How might we promote remote togetherness?</span> <br /> <br /> <br />
                    <span className="content_text">Seam started as a collaboration with Microsoft Design Expo. In the beginning, we were asked to create a project brief that merges the topics of togetherness at the distance and future healthcare. We first conducted a general interview with people who are in the medical field, such as doctors, nurses or general practitioners to get an understanding of the healthcare scene.  From this interview, we realized how marginalized communities were being affected by COVID-19 pandemic. Marginalized communities meaning people who are not directly related to COVID-19, but are in need of care such as pregnant women, patients with neurodegenerative diseases or mental care.</span><br /> 
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <div className="col_50">
                    <img className="joul_img" src={"./images/seam/seam_discover1.png"} /> <br /> <br />
                    <span className="content_title">MAP OF MEDICAL COMMUNITY</span>
                </div>
                <div className="col_50">
                    <img className="joul_img" src={"./images/seam/seam_discover2.png"} /> <br /> <br />
                    <span className="content_title">REMOTE INTERVIEWEE MAP</span>
                </div>
            </div>

            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">How might we continue therapy sessions with</span><br /><span className="question_title_seam"> neurodegenerating disorder patients remotely?</span><br /> <br /> <br />
                    <span className="content_text">In order to explore into detail how patients with neurodegenerative diseases are conducting therapy sessions, caregivers and relatives of people with neurodegenerative diseases were interviewed remotely in moderated 1:1 sessions. With this technique, it was possible to dig deeper into meaningful details with specific props. As a result, a comprehensive and empathetic understanding of the needs, limitation and day-to-day experiences of Alzheimer’s patients were created.  </span><br /> 
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <div className="keycomponent_2">
                    <img className="joul_img" src={"./images/seam/seam_discover4.png"} /> <br />
                    <span className="content_title">BEFORE: DAILY JOURNAL</span> <br />
                    <span className="content_text">Before the interviews, participants were asked to write a journal about their day-to-day experiences with neurodegenerative patients.   </span>
                </div>
                <div className="keycomponent_2">
                    <img className="joul_img" src={"./images/seam/seam_discover3.png"} /> <br />
                    <span className="content_title">DURING: WORKSHOP PROPS</span>
                    <span className="content_text">During remote interviews, one moderator was drawing the information provided by the participants as a journey map on a piece of paper.</span>
                </div>
                <div className="keycomponent_2">
                    <img className="joul_img" src={"./images/seam/seam_discover5.png"} /> <br />
                    <span className="content_title">AFTER: JOURNEY MAPS</span>
                    <span className="content_text">After the interview, participants were guided through the drawn journey map to ask more specific questions.</span>
                </div>
            </div>

            <div className="container">
                <div className="container_semititle">
                    <span className="emphasize_seam2">design process: define</span>
                </div> 
                <div className="container_keycomponent">
                    <div className="discover_interview">
                        <span className="question_title_seam">from neurodegenerative diseases to alzheimer's</span> <br /> <br /> <br />
                        <span className="content_text">During the interviews, it became very clear that connection and interaction is one of the biggest challenges during the pandemic for people with early-stage neurodegenerative conditions. In order to narrow down the user group, we decided to focus on Alzheimer's among different neurodegenerative diseases. Alzheimer's were being impacted the most since human interaction can play a significant role in delaying cognitive decline.</span><br /> 
                    </div>
                    <div className="discover_interview_rt"></div>
                </div>      
                <div className="container_keycomponent">
                    <div className="discover_interview">
                        <span className="question_title_seam">professional interviews + desk research</span> <br /> <br /> <br />
                        <span className="content_text">In order to know more specifically about Alzheimer’s, we interviewed various caregivers such as occupational therapists and family members of Alzheimer’s. We got involved in Facebook groups that support Alzheimer’s and Dementia, which mainly consists of caregivers and family members.We also conducted vast amount of desk research because Alzheimer’s was a very specific field that was unfamiliar to us and complex in its nature. Along with basic symptoms and cure methods of Alzheimer’s, we also grasped a positive understanding of the disease. Trying to reinforce memory was not that important in terms of delaying the progression of Alzheimer’s, rather creating memorable memories with their loved ones was something more valuable.</span><br /> 
                    </div>
                    <div className="discover_interview_rt"></div>
                </div>
                <div className="container_how">
                    <img className="joul_img" src={"./images/seam/seam_define2.png"} />
                </div>   
            </div>
            
        </div>

        <div className="seam_bg">
            <div className="container">
                <div className="center_align">
                    <span className="question_title_green">how might we support</span> <span className="question_title_red">remote connectedness and togetherness</span> <br />
                    <span className="question_title_green">between alzheimer's individuals and their loved ones?</span> <br /> <br />
                    <span className="question_title_green">how might we</span> <span className="question_title_red">delay the progression of alzheimer's </span><span className="question_title_green">during a pandemic?</span>
                </div>   
            </div>
        </div>

        <div className="container">
            <div className="container_semititle">
                <span className="emphasize_seam">design process: develop</span>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">remote workshop with ergotherapists</span> <br /> <br /> <br />
                    <span className="content_text">We conducted a remote workshop with ergotherapists and physical therapists who had previous experience working with their own Alzheimer’s patients suffering from the disease. Since Alzheimer’s can be an extremely sensitive topic for family members that experienced it, a direct workshop with Alzheimer's individuals would have been challenging.</span><br /> <br />
                    <span className="content_text">This workshop was not focused on generating ideas. Instead we put more emphasis on collecting different stories and diverse perspectives on Alzheimer’s. We asked participants to pick the most memorable patient and share related experiences. Each shared different therapy methods they tried and any particular stories they can remember with the patient. Then we conducted a future scenario session where professionals use Superpower Cards to propose any kind of new treatment methods that they can practice for the same patient if they were in this COVID-19 quarantine situation.</span>
                </div>
                <div className="discover_interview_rt"></div>
            </div>    
            <div className="container_how">
                <div className="col_50_right">
                    <img className="joul_img" src={"./images/seam/seam_develop1.png"} /> <br />
                </div>
                <div className="col_50_left">
                    <img className="joul_img" src={"./images/seam/seam_develop2.png"} /> <br />
                </div>
            </div> 
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">establish design principles</span> <br /> <br /> <br />
                    <span className="content_text">We’ve discovered that some common patterns were emerging as stories from interviews and workshops. We constructed following design principles to take into consideration during our next ideation step.</span><br /> <br />
                </div>
                <div className="discover_interview_rt"></div>
            </div>  
        </div>

        <div className="seam_bg3">
        <div className="container">
            <div className="container_principles">
                <span className="seam_principles">1. The product-service system should create a shared experience <br /> that is </span><span className="seam_principles_bold">positive, meaningful and memorable</span><span className="seam_principles"> for all users.</span><br />
                <span className="seam_principles">2. The interaction has to be </span><span className="seam_principles_bold">intuitive, accessible and simple.</span> <br />
                <span className="seam_principles">3. The system should not discriminate users with </span><span className="seam_principles_bold">age, disability or cognitive impairment.</span> <br />
                <span className="seam_principles">4. Users should not be required to have extensive prior knowledge to use the system.</span> <br />
                <span className="seam_principles">5. There should be </span><span className="seam_principles_bold">no right or wrong way</span><span className="seam_principles"> of using the product-service system.</span> <br />
                <span className="seam_principles">6. The interaction and appearance of the product-service system should look familiar, <br /></span><span className="seam_principles_bold"> inviting users for interaction with prompting qualities.</span>
            </div>    
        </div>
        </div>

        <div className="container">
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">ideation phase</span> <br /> <br /> <br />
                    <span className="content_text">Based on these design principles, we visualized our ideas on Miro. Different ideas were narrowed down into two concepts and were used in our next step, which was involving users in a validation workshop with our initial stage concept.</span><br /> <br />
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/seam/seam_ideation.png"} />
            </div> 
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">validation workshop</span> <br /> <br /> <br />
                    <span className="content_text">Our concept focused on how users with Alzheimer’s, especially those in their early stage can connect with their loved ones. We created an interaction diagram of our proposal and a user story, indicating different stakeholders involved and how they interact with each other in different stages. Based on this diagram, we conducted a validation workshop with individuals whose family member is going through Alzheimer’s, ergotherapists and experts related to remote communication and interaction.</span><br /> <br />
                    <span className="content_text">We first asked for a general feedback on the proposal and how they would use the service with their Alzheimer’s family member. This workshop was our prototyping testing stage, where we had a feasibility check of how our proposal could meet the needs of users in real life.</span>
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/seam/seam_validation.png"} />
            </div> 
        </div>

        <div className="container">
            <div className="container_semititle">
                <span className="emphasize_seam">design process: deliver</span>
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">prototyping with arduino</span> <br /> <br /> <br />
                    <span className="content_text">After a couple of form iterations, we also tested out different light feedbacks and color schemes that would match the interaction flow that will be suitable for users with Alzheimer’s.</span><br /> <br />
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/seam/seam_prototype.jpg"} />
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">video storytelling</span> <br /> <br /> <br />
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/seam/seam_videostory.jpg"} />
            </div>
            <div className="container_keycomponent">
                <div className="discover_interview">
                    <span className="question_title_seam">final outcome</span> <br /> <br /> <br />
                </div>
                <div className="discover_interview_rt"></div>
            </div>
            <div className="container_how">
                <div className="deliver_1">
                    <span className="content_title">TECH ACCESSIBILITY</span> <br /> <br /> 
                    <span className="content_text">Form resemblance of Seam enables it to be easily accessible for user groups who have a high barrier to technology</span>
                </div>
                <div className="deliver_1">
                    <span className="content_title">MARGINALIZED GROUPS</span> <br /> <br /> 
                    <span className="content_text">As started from Alzheimer's individuals, Seam can be applied to all users who have loved ones in distance</span>
                </div>
                <div className="deliver_1">
                    <span className="content_title">SCALABLE INTERACTION</span> <br /> <br /> 
                    <span className="content_text">Different modules allow scalable experiences depending on each user</span>
                </div>
            </div>
            <div className="container_how">
                <img className="joul_img" src={"./images/seam/seam_finaloutcome.jpg"} />
            </div>
        </div>

        <div className="footer"></div>
        </>
    );
}

export default Seam;