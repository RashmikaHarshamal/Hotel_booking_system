import React from "react";
import roomsCSS from './../Rooms/Rooms.module.css'

function Rooms(){
   return(
           <div className={`${ServicesCSS.Service_wrapper} section`}>
               <small className="section_Heading">Facilities</small>
               <h2 className="section_Title">Our Best<span>Services</span></h2>
            </div>
       )
}

export default Rooms