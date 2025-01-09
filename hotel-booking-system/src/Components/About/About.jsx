import React from "react";
import aboutCSS from './../About/About.module.css';

import aboutImg from './../../assets/about-one.png';

function About() {
    return(
        <div className={`${aboutCSS.about_wrapper} section`}>
            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="" />
            </div>
            <div className={aboutCSS.about_content}>
                <small>The Royal Hotel</small>
                <h2 className="section_Title">Where Elegance Meets <span>Excellence</span></h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At est enim tempora id magnam ullam placeat fugiat velit accusantium inventore expedita consequuntur, Culpa ratione ad.</p>

                <div className={aboutCSS.Cards}>
                    <p>260+ <span>Awards Wins</span></p>
                    <p>250k+ <span>Visitors Vists</span></p>
                    <p>150k+ <span>Events</span></p>
                </div>
            </div>
        </div>
    )
}

export default About