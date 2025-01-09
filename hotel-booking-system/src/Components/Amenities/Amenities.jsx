import React from "react";
import amenitiesCSS from './../Amenities/Amenities.module.css'

function Amenities() {
    return(
        <div className={`${amenitiesCSS.amenities_wrapper} section`}>
            <small className="section_Heading">Luxury Amenities</small>
            <h2 className="section_Title">Our Best<span>Amenities</span></h2>
        </div>
    )
}
  
export default Amenities