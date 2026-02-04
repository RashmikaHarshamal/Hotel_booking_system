import React from "react"; 
import footerCSS from './../Footer/Footer.module.css'

function Footer(){
    return(
        <footer className={`${footerCSS.footer_wrapper} setion`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <h2>RoyalX</h2>
                    <p>RoyalX is a premium hospitality destination offering elegant rooms, world-class services, and unforgettable experiences for travelers worldwide.</p>

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
                <p>Colombo</p>
                <p>Galle</p>
                <p>Kandy</p>
                <p>Gampaha</p>
                <p>Ampara</p>
            </div>

            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address: <span>28/112, Kumudugama, Ampara</span></p>
                <p>Email : <span>rashmikaharshamal169@gmail.com</span></p>
                <p>Phone : <span>0714191696</span></p>
            </div>
        </footer>
    )
}

export default Footer
