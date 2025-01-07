import React from "react";
import navCSS from './../Nav/Nav.module.css'

function Nav(){

    const menu = useRef();

    

    return(
        <div className={navCSS.nav_wrapper}>
            <div className={navCSS.logo}>
                <a href="#"><span>ROYAL</span>X</a>
            </div>

            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Blogs</a></li>
            </ul>

            <div className={navCSS.Nav_btns}>
                <button> Book Now</button>
                <i className="ri-menu-4-line id={navCSS.bars}"></i>
            </div>
        </div>
    )
}

export default Nav