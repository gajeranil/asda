import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Typography=()=>{
    return(
        <>
            <Navbar/>
            <div className="typography-section pt-20 ">
            <div className="flex  justify-start mx-24 text-left">
                <div className="left-part px-5">
                    <h1 className="font-semibold text-[46px] mb-[30px]">h1 - A Visual Type Scale</h1>
                    <h2 className="font-semibold text-[36px] mb-[30px]">h2 - A Visual Type Scale</h2>
                    <h3 className="font-semibold text-[28px] mb-[30px]">h3 - A Visual Type Scale</h3>
                    <h4 className="font-semibold text-[24px] mb-[30px]">h4 - A Visual Type Scale</h4>
                    <h5 className="font-semibold text-[20px] mb-[30px]">h5 - A 2 Type Scale</h5>
                    <h6 className="font-semibold text-[18px] mb-[30px]">h6 - A Visual Type Scale</h6>
                </div>
                <div className="right-part px-5">
                    <h1 className="text-[46px] font-semibold  mb-[30px]">46px</h1>
                    <h2 className="font-semibold text-[36px]  mb-[30px]">36px</h2>
                    <h3 className="font-semibold text-[28px]  mb-[30px]">28px</h3>
                    <h4 className="font-semibold text-[24px]  mb-[30px]">24px</h4>
                    <h5 className="font-semibold text-[20px]  mb-[30px]">20px</h5>
                    <h6 className="font-semibold text-[18px]  mb-[30px]">18px</h6>
                </div>
                </div>
            
            <div className="w-[520px] mx-24">
            <p className="text-base text-gray-500 mb-5">B1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident quos amet non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta vitae! Magni esse ex rem.</p>
            <p className="text-sm text-gray-500 mb-5">B2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident quos amet non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta vitae! Magni esse ex rem.</p>
            <p className="text-xs text-gray-500 mb-5">B3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident quos amet non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta vitae! Magni esse ex rem.</p>
            </div>
            </div>
            <Footer/>
        </>
    )
}
export default Typography;