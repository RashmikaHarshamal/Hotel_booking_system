import React from "react";
import headerlogedCSS from './../HeaderLoged/HeaderLoged.module.css'
import NavLoged from '../NavLoged/NavLoged';

import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css'
import {Autoplay , Parallax} from "swiper/modules";

import { Link, useNavigate } from 'react-router-dom';


function HeaderLoged(){
    return(
        <>
        <NavLoged/>

         <div className={headerlogedCSS.header_wrapperr}>
             <Swiper 
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                className={headerlogedCSS.swiperr}
                autoplay={{
                    delay: 2500,
                }}
                parallax={true}
                speed={1500}
                modules={[Autoplay , Parallax]}
            >
                 <SwiperSlide>
                     <div className={`${headerlogedCSS.Header_slidee} ${headerlogedCSS.slide11}`}>
                         <div className={headerlogedCSS.contentt}>
                             <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small>
                             <h2 data-swiper-parallax="-300">Enjoy Your <span>Dream</span> Time with <br />
                                 <span>Luxury</span> Experience
                             </h2>
                             <p data-swiper-parallax="-400">Call Now <span>9876543210</span></p>
                         </div>
                     </div>
                 </SwiperSlide>
                 <SwiperSlide>
                     <div className={`${headerlogedCSS.Header_slidee} ${headerlogedCSS.slide22}`}>
                         <div className={headerlogedCSS.contentt}>
                             <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small>
                             <h2 data-swiper-parallax="-300">Enjoy Your <span>Dream</span> Time with <br />
                                 <span>Luxury</span> Experience
                             </h2>
                             <p data-swiper-parallax="-400">Call Now <span>9876543210</span></p>
                         </div>
                     </div>
                 </SwiperSlide>
                 <SwiperSlide>
                     <div className={`${headerlogedCSS.Header_slidee} ${headerlogedCSS.slide33}`}>
                         <div className={headerlogedCSS.contentt}>
                             <small>Luxury Hotel & Restaurant</small>
                             <h2>Enjoy Your <span>Dream</span> Time with <br />
                                 <span>Luxury</span> Experience
                             </h2>
                             <p>Call Now <span>9876543210</span></p>
                         </div>
                     </div>
                 </SwiperSlide>
             </Swiper>
        </div>
        </>
    )
}

export default HeaderLoged