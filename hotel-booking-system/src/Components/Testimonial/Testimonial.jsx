import React from "react";
import testimonialCSS from './../Testimonial/Testimonial.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";

import img1 from './../../assets/testi-01.jpg';
import img2 from './../../assets/testi-03.jpg';
import img3 from './../../assets/testi-04.jpg';

import { Link, useNavigate } from 'react-router-dom';
import Footer from "../Footer/Footer";
import NavLoged from "../NavLoged/NavLoged";


function Testimonial(){
    return(

        <>
        <NavLoged/>
        <div className={`${testimonialCSS.testimonial_wrapper} section`}>

            <small className="section_Heading">Testimonials</small>
            <h2 className="section_Title">What Our Clients<span>Says</span></h2>
            
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    className={testimonialCSS.swiper}
                    autoplay={{
                        delay: 1000,
                    }}

                    breakpoints = {{
                        0:{
                            slidesPerView:1
                        },
                        1200:{
                            slidePerView:2
                        }
                    }}
                    speed={1500}
                    modules={[Autoplay]}
                 >

                    <SwiperSlide>
                        <div className={testimonialCSS.testimonial}>
                            <img src={img1} alt=""/>
                            <div className={testimonialCSS.content}>
                                <h3>Amrita <span>manager</span></h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At est enim tempora id magnam ullam placeat fugiat velit accusantium inventore expedita consequuntur, Culpa ratione ad.</p>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={testimonialCSS.testimonial}>
                            <img src={img2} alt=""/>
                            <div className={testimonialCSS.content}>
                                <h3>Samantha <span>Sales manager</span></h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At est enim tempora id magnam ullam placeat fugiat velit accusantium inventore expedita consequuntur, Culpa ratione ad.</p>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={testimonialCSS.testimonial}>
                            <img src={img3} alt=""/>
                            <div className={testimonialCSS.content}>
                                <h3>John Doe <span>manager</span></h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At est enim tempora id magnam ullam placeat fugiat velit accusantium inventore expedita consequuntur, Culpa ratione ad.</p>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
            <Footer/>
        </>
    )
}

export default Testimonial