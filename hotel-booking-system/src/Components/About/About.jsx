import React from "react";
import headerCSS from './../About/About.module.css';

import aboutImg from './../../assets/about-one.png';

function About() {
    return(
        <div className={`${aboutCSS.about_wrapper} section`}>
            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="About the Royal Hotel" />
            </div>
            <div className={aboutCSS.about_content}>
                <small>The Royal Hotel</small>
                <h2 className="section_Title">Where Elegance Meets <span>Excellence</span></h2>

            </div>
        </div>
    )
}

export default About