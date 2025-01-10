import React from "react"; 
import footerCSS from './../Footer/Footer.module.css'

function Footer(){
    return(
        <footer className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <h2>RoyalX</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At est enim tempora id magnam ullam placeat fugiat velit accusantium inventore expedita consequuntur, Culpa ratione ad.</p>

                </div>
            </div>

            <div className={footerCSS.FooterLinks}>
                <h3>Quick Links</h3>
                <p>About</p>
                <p>Contact Us</p>
                <p>Rooms</p>
                <p>GYM</p>
                <p>Restaurant</p>
            </div>

            <div className={footerCSS.FooterLinks}>
                <h3>City Branches</h3>
                <p>Maxico</p>
                <p>Bharat</p>
                <p>Germany</p>
                <p>Australia</p>
                <p>California</p>
            </div>

            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address: <span>360 Street- Mumbai, India</span></p>
                <p>Email : ex@gmail.com</p>
                <p>Phone : 0714191696</p>
            </div>

            <div className={footerCSS.FooterLinks}></div>
            <div className={footerCSS.FooterLinks}></div>
        </footer>
    )
}

export default Footer
