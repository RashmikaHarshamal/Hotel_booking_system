import React from "react";
import amenitiesCSS from './../Amenities/Amenities.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import {Autoplay} from "swiper/modules";

import img1 from './../../assets/pool.jpg'
import img2 from './../../assets/gym.jpg'
import img3 from './../../assets/rest.jpg'

import { Link, useNavigate } from 'react-router-dom';
import Footer from "../Footer/Footer";
import NavLoged from "../NavLoged/NavLoged";


function Amenities() {
    return(

        <>
        <NavLoged/>
        <div className={`${amenitiesCSS.amenities_wrapper} section`}>
            <small className="section_Heading">Luxury Amenities</small>
            <h2 className="section_Title">Our Best<span>Amenities</span></h2>

            <Swiper 
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                className={amenitiesCSS.swiper}
                autoplay={{
                    delay: 1000,
                }}
                speed={2000}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img1}  alt="amenities-img"/>

                        <div className={amenitiesCSS.content}>
                            <h2>Swimming Pool</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At est enim tempora id magnam ullam placeat fugiat velit accusantium inventore expedita consequuntur, Culpa ratione ad.</p>
                            <button>Book Now !</button>    
                        </div>   
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img2}  alt="amenities-img"/>

                        <div className={amenitiesCSS.content}>
                            <h2>GYM and Sports</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At est enim tempora id magnam ullam placeat fugiat velit accusantium inventore expedita consequuntur, Culpa ratione ad.</p>
                            <button>Book Now !</button>    
                        </div>   
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img3}  alt="amenities-img"/>

                        <div className={amenitiesCSS.content}>
                            <h2>Restro & cafe</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At est enim tempora id magnam ullam placeat fugiat velit accusantium inventore expedita consequuntur, Culpa ratione ad.</p>
                            <button>Book Now !</button>    
                        </div>   
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

        <Footer/>
        </>
    )
}
  
export default Amenities