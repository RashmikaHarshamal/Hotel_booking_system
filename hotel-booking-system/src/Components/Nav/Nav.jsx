import React, { useRef } from "react";
import navCSS from './../Nav/Nav.module.css'
import { Link, useNavigate } from 'react-router-dom';


function Nav(){

    const menu = useRef();
    const navbar = useRef();

    const menuHandler = () =>{
        menu.current.classList.toggle(navCSS.shownNav);
    }

    window.addEventListener('scroll', function(){
        if(window.scrollY > 100){
            navbar.current.classList.add(navCSS.navbarScroll);
        }
        else{
            navbar.current.classList.remove(navCSS.navbarScroll);
        }
    })
const Navigate = useNavigate();
    return(
        <div className={navCSS.nav_wrapper} ref={navbar}>
            <div className={navCSS.logo}>
                <Link to="/"><span>ROYAL</span>X</Link>
            </div>

            {/* <ul ref={menu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                <li><Link to="/foodmenu">FoodMenu</Link></li>
                <li><Link to="/amenities">Amenities</Link></li>
                <li><Link to="/testimonial">Testimonial</Link></li>
            </ul> */}

            <div className={navCSS.Nav_btns}>
                <button onClick={()=>Navigate('/log')}> LogIn</button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
    )
}

export default Nav