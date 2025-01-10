import React from "react";
import testimonialCSS from './../Testimonial/Testimonial.module.css'

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import {Autoplay} from "swiper/modules";

function Testimonial(){
    return(
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
                    speed={2000}
                    modules={[Autoplay]}
                 >

                    <SwiperSlide>
                        <div className={testimonialCSS.testimonial}>
                            <img src={img1} alt=""/>
                            <div className={testimonialCSS.content}>
                                <h3>John Doe <span>manager</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At est enim tempora id magnam ullam placeat fugiat velit accusantium inventore expedita consequuntur, Culpa ratione ad.</p>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

        </div>
    )
}

export default Testimonial