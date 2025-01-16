import React from "react";
import aboutCSS from './../About/About.module.css';

import { Link, useNavigate } from 'react-router-dom';

import aboutImg from './../../assets/about-one.png';
import NavLoged from "../NavLoged/NavLoged";
import Footer from "../Footer/Footer";

function About() {
    return(
        <>
        <NavLoged/>
        <div className={`${aboutCSS.about_wrapper} section`}>
            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="about-img" />
            </div>
            <div className={aboutCSS.about_content}>
                <small className="section_Heading">The Royal Hotel</small>
                <h2 className="section_Title">Where Elegance Meets <span>Excellence</span></h2>

                <div className={aboutCSS.Cards}>
                    <p>260+ <span>Awards Wins</span></p>
                    <p>250k+ <span>Visitors Vists</span></p>
                    <p>150k+ <span>Events</span></p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About