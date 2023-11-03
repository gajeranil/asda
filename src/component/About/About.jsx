import React from "react";
import Shopwithslidebar from "../Shop/Shopwithslidebar"; 
import AboutImage from '../../assets/about-01.png'
import Footer from "../Home/Footer";

const About=()=>{
    return(
        <>
            <Shopwithslidebar/>
            <div className="about-section">
                <div className="left-section">
                    <img src={AboutImage} alt="" />
                </div>
                <div className="right-section"></div>
            </div>
            <Footer/>
        </>
    )
}
export default About;