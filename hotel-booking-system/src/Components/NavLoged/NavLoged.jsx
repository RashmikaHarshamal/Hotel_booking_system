import React, { useRef } from "react";
import navlogedCSS from './../NavLoged/NavLoged.module.css'
import { Link, useNavigate } from 'react-router-dom';


function NavLoged(){

    const menu = useRef();
    const navbar = useRef();

    const menuHandler = () =>{
        menu.current.classList.toggle(navlogedCSS.shownNav);
    }

    window.addEventListener('scroll', function(){
        if(window.scrollY > 100){
            navbar.current.classList.add(navlogedCSS.navbarScroll);
        }
        else{
            navbar.current.classList.remove(navlogedCSS.navbarScroll);
        }
    })
const Navigate = useNavigate();
    return(
        <div className={navlogedCSS.nav_wrapper} ref={navbar}>
            <div className={navlogedCSS.logo}>
                <Link to="/"><span>ROYAL</span>X</Link>
            </div>

            <ul ref={menu}>
                <li><Link to="/headerloged">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                <li><Link to="/foodmenu">FoodMenu</Link></li>
                <li><Link to="/amenities">Amenities</Link></li>
                <li><Link to="/testimonial">Testimonial</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>

            <div className={navlogedCSS.Nav_btns}>
                <button onClick={()=>Navigate('/header')}> LogOut</button>
                <i className="ri-menu-4-line" id={navlogedCSS.bars} oncClick={menuHandler}></i>
            </div>
        </div>
    )
}

export default NavLoged