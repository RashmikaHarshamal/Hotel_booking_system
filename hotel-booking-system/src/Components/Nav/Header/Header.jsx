import React from "react";
import headerCSS from './../Header/Header.module.css'

import {Swiper , SwiperSlide} from 'swiper/react'

function Header(){
    return(
        <div className={headerCSS.header_wrapper}>
            <Swiper>
                <SwiperSlide>
                    <div className={headerCSS.Header_slide}>
                        <div className={headerCSS.content}>
                            <small>Luxury Hotel & Restaurant</small>
                            <h2>Enjoy Your Dream Time with<br/>
                                Luxury Experience
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}