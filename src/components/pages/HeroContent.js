import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroContent.css';

function HeroContent({
    
}) { 
    const text = "I love to design with creativity and play with code. \n I like to visualize in graphics, construct with code and prototype with programs. \n How? Just take a look at my website that I created myself.";
    const text_2 = "Born and raised in Seoul, lived in Umea, Helsinki, Paris, Geneva and Amsterdam. \n Now writing my master's thesis about trust in autonomous vehicles at Umea Institute of Design";
    return (
        <>

       <div className="container">
           <div className="content">
                <div className="empty"></div>
                 <div className="textcontent">
                    <span className="span_p">I love to</span><span className="span_bold"> design with creativity </span><span className="span_p">and</span><span className="span_bold"> play with code.</span> <br /> <span className="span_p">I like to </span><span className="span_bold">visualize in graphics, construct with code and prototype with programs.</span> <br /> <span className="span_p">How? Just take a look at my website that I created myself.</span> <br /> <br />
                    <span className="span_p">Born and raised in Seoul, lived in Umea, Helsinki, Paris, Geneva and Amsterdam. <br /> Now writing my </span><span className="span_bold"> master's thesis about</span><span className="span_red"> trust in autonomous vehicles</span><span className="span_bold"> at Umea Institute of Design</span>
                 </div>          
             </div>
        </div>

        <div className="container topwork">
             <div className="semi_title edu">
                <span className="span_semititle">TOP WORKS</span>
            </div>
            <div className="content_2">
                <Link to="/joul" className="nav-link" >
                <div className="topwork_1">
                    <img className="work_img" src={"./images/about/landing_work_1.jpg"} /> <br /><br />
                    <span className="span_jobtitle">JOUL,  </span>
                    <span className="span_job">a toy for exploring sustainability</span> <br />
                </div>
                </Link>
                <Link to="/seam" className="nav-link" >
                <div className="topwork_2">
                    <img className="work_img" src={"./images/about/landing_work_2.jpg"} /> <br /><br />
                    <span className="span_jobtitle">SEAM,   </span>
                    <span className="span_job">connecting Alzheimer's individuals</span> <br />
                </div>
                </Link>
                <Link to="/hera" className="nav-link" >
                <div className="topwork_3">
                    <img className="work_img" src={"./images/about/landing_work_3.jpg"} /> <br /><br />
                    <span className="span_jobtitle">HERA,   </span> 
                    <span className="span_job">digital visual storytelling</span> <br />
                </div>
                </Link>
            </div>
        </div>
        
        <div className="container work">
            <div className="semi_title edu">
                <span className="span_semititle">WORK</span>
            </div>
           <div className="content_2">
               <div className="titlecontent">
                   <span className="span_jobtitle">UX Design Intern  </span>
                   <span className="span_job">| Philips</span> <br />
                   <span className="span_exp">Amsterdam, Netherlands</span>
               </div>
               <div className="rolecontent">
                   <span className="span_exp">UX/UI Design, Data-enabled Design</span>
               </div>
                <div className="datecontent">
                    <span className="span_date">21.03 - 08</span> <br />
                </div>
             </div>

             <div className="content_down">
               <div className="titlecontent">
                   <span className="span_jobtitle">Visual Design Intern  </span>
                   <span className="span_job">| AmorePacific</span> <br />
                   <span className="span_exp">Seoul, Korea</span>
               </div>
               <div className="rolecontent">
                   <span className="span_exp">Visual storytelling, Digital Graphic Design</span>
               </div>
                <div className="datecontent">
                    <span className="span_date">20.10 - 21. 02</span> <br />
                </div>
                
             </div>

             <div className="content_down">
               <div className="titlecontent">
                   <span className="span_jobtitle">Product Designer  </span>
                   <span className="span_job">| Brandazine</span> <br />
                   <span className="span_exp">Seoul, Korea</span>
               </div>
               <div className="rolecontent">
                   <span className="span_exp">UX/UI Design, Branding, </span>
               </div>
                <div className="datecontent">
                    <span className="span_date">20.06 - 10</span> <br />
                </div>
             </div>
        </div>

        <div className="container">
            <div className="semi_title edu">
                <span className="span_semititle">EDUCATION</span>
            </div>
            <div className="content_2">
                <div className="titlecontent">
                   <span className="span_jobtitle">Umeå Institute of Design</span> <br />
                   <span className="span_exp">Umeå, Sweden</span>
               </div>
               <div className="rolecontent">
                   <span className="span_exp">MFA in Interaction Design</span>
               </div>
                <div className="datecontent">
                    <span className="span_date">19.09 - 22.06</span> 
                </div>
            </div>

            <div className="content_down">
               <div className="titlecontent">
                   <span className="span_jobtitle">Yonsei University</span> <br />
                   <span className="span_exp">Seoul, Korea</span>
               </div>
               <div className="rolecontent">
                   <span className="span_exp">BS in Information and Interaction Design</span>
               </div>
                <div className="datecontent">
                    <span className="span_date">15. 03 - 19. 02</span>
                </div>
             </div>
        </div>

        <div className="container">
            <div className="semi_title awards">
                <span className="span_semititle">AWARDS</span>
            </div>
            <Link to="/seam" className="nav-link" >
            <div className="content_2">
                <div className="titlecontent">
                   <span className="span_awds">2021 iF Design Talent Award</span>
               </div>
                <div className="rolecontent">
                   <span className="span_awds">with Seams</span>
                </div>
                <div className="datecontent">
                    <img class="img_logo" src={"./images/about/iF_2.png"} />
                </div>
            </div>
            </Link>
            <Link to="/seam" className="nav-link" >
            <div className="content_2">
               <div className="titlecontent">
                   <span className="span_awds">2021 UX Design Awards</span> <br /> 
               </div>
                <div className="rolecontent">
                    <span className="span_awds">with Seams</span>
                </div>
                <div className="datecontent">
                    <img class="img_logo_2" src={"./images/about/UX.png"} />
                </div>
             </div>
             </Link>
             <Link to="/joul" className="nav-link" >
             <div className="content_2">
               <div className="titlecontent">
                   <span className="span_awds">2020 iF Design Talent Awards</span> <br /> 
               </div>
                <div className="rolecontent">
                    <span className="span_awds">with Joul</span>
                </div>
                <div className="datecontent">
                    <img class="img_logo" src={"./images/about/iF_1.png"} />
                </div>
             </div>
             </Link>

             <Link to="/joul" className="nav-link" >
             <div className="content_2">
               <div className="titlecontent">
                   <span className="span_awds">2020 Core 77 Runner's Up in Interaction Design</span> <br /> 
               </div>
                <div className="rolecontent">
                    <span className="span_awds">with Joul</span>
                </div>
                <div className="datecontent">
                    <img class="img_logo_3" src={"./images/about/Core.png"} />
                </div>
             </div>
             </Link>
             <Link to="/joul" className="nav-link" >
             <div className="content_2">
               <div className="titlecontent">
                   <span className="span_awds">2020 Core 77 Runner's Up in Consumer Technology</span> <br /> 
               </div>
                <div className="rolecontent">
                    <span className="span_awds">with Joul</span>
                </div>
                <div className="datecontent">
                    <img class="img_logo_3" src={"./images/about/Core.png"} />
                </div>
             </div>
             </Link>

             <div className="content_2">
               <div className="titlecontent">
                   <span className="span_awds">2019 IxDA Awards Shortlisted</span> <br /> 
               </div>
               <div className="rolecontent">
                   <span className="span_awds">with Nori Nuri</span>
               </div>
                <div className="datecontent">
                    <img class="img_logo" src={"./images/about/IxDA.png"} />
                </div>
             </div>
        </div>

        <div className="footer"></div>

        </>
    );
}

export default HeroContent;