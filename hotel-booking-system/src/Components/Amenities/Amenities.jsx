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
                            <p>Enjoy a refreshing escape in our luxury swimming pool, designed for relaxation and comfort. Whether you want a peaceful morning swim or a calm evening by the water, our pool area offers the perfect atmosphere for a memorable stay.</p>
                            <button>Book Now !</button>    
                        </div>   
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img2}  alt="amenities-img"/>

                        <div className={amenitiesCSS.content}>
                            <h2>GYM and Sports</h2>
                            <p>Stay active and energized during your visit with our fully equipped gym and sports facilities. From modern fitness equipment to dedicated workout spaces, RoyalX ensures you can maintain your healthy lifestyle while enjoying your vacation.</p>
                            <button>Book Now !</button>    
                        </div>   
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img3}  alt="amenities-img"/>

                        <div className={amenitiesCSS.content}>
                            <h2>Restro & cafe</h2>
                            <p>Experience delicious dining at our restaurant and café, offering a variety of cuisines and fresh beverages. Whether it’s a family dinner or a quick coffee break, our cozy space provides the perfect blend of taste and comfort.</p>
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