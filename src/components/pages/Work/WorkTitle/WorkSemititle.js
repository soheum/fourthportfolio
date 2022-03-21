import React from 'react';
import { Link } from 'react-router-dom';
import './WorkSemititle.css';


function WorkSemititle({
    semi_1
}) { 
    return (
        <>
        <div className="work_semititle">
            <div className="line">
                <hr />
            </div>
            <div className="line_text">
                <span className="semititle">{semi_1}</span>
            </div>
        </div>
           
        </>
    );
}

export default WorkSemititle;