import React from 'react';
import { Link } from 'react-router-dom';
import './WorkTitle.css';


function WorkTitle({
    cover_img, award_img, award_img2, info_1, info_2, info_3
}) { 
    return (
        <>

            <div className="header_img ">
                <img class="img_cover" src={cover_img} />
            </div>

        <div className="header_details container">
            <div className="header_awards">
                <img class="img_logo_bottom" src={award_img} /> <br />
                <img class="img_logo_bottom" src={award_img2} />
            </div>
            <div className="header_info">
                <div className="info_1">
                    <span className="h3_title">PROJECT DETAILS</span> <br />
                    <p className="p_text p_text_margin">{info_1}</p> <br /> <br />
                    <span className="h3_title">MY ROLE</span><br />
                    <p className="p_text p_text_margin">{info_2}</p><br /><br />
                    <span className="h3_title">TOOLS USED</span> <br />
                    <p className="p_text p_text_margin">{info_3}</p>
                </div> 
            </div>
            
        </div>
        </>
    );
}

export default WorkTitle;
