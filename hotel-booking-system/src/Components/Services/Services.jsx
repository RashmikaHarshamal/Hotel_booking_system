import React from "react";
import ServicesCSS from './../Services/Services.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../Footer/Footer";
import NavLoged from "../NavLoged/NavLoged";


function Services(){
    return(

        <>
        <NavLoged/>
        <div className={`${ServicesCSS.Service_wrapper} section`}>
            <small className="section_Heading">Facilities</small>
            <h2 className="section_Title">Our Best<span>Services</span></h2>
        
            <div className={ServicesCSS.Services_cards}>
                <div className={ServicesCSS.Service_card}>
                    <i className="ri-hotel-line"></i>
                    <h3>Basic Facilities</h3>
                    <p>- Reception /Front Desk</p>
                    <p>- Room Services</p>
                    <p>- House Keeping</p>
                    <p>- Wifi & Parking</p>
                </div>

                <div className={ServicesCSS.Service_card}>
                    <i className="ri-hotel-bed-line"></i>
                    <h3>Room Aminities</h3>
                    <p>- Comfortable Bedding</p>
                    <p>- Bed Room and Pool</p>
                    <p>- TV and AC</p>
                    <p>- Bar</p>
                </div>

                <div className={ServicesCSS.Service_card}>
                    <i className="ri-goblet-line"></i>
                    <h3>Dining Options</h3>
                    <p>- Restaurant Cafe</p>
                    <p>- Bar & Lounge</p>
                    <p>- Cafe & Caanteen</p>
                    <p>- Room Service</p>
                </div>

                <div className={ServicesCSS.Service_card}>
                    <i className="ri-restaurant-line"></i>
                    <h3>Special Features </h3>
                    <p>- Custom Rooms</p>
                    <p>- Cricket Ground</p>
                    <p>- Gym</p>
                </div>

            </div>
        </div>
        <Footer/>
    </>
    )
}

export default Services