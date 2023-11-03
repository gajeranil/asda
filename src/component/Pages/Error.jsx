import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

import ErrorImage from '../../assets/error.png'



const Error = () => {
  return (
    <>
    <div>
      <Navbar/>
      <div className="error-section flex justify-between mx-24 py-20">
        <div className="left-part">
        <h3 className="text-[#ff497c] font-bold text-sm align-middle mb-2"><i class="fa-solid fa-circle-exclamation text-xl mr-1 "></i> Oops! Somthing's missing.</h3>
        <h4 className="text-5xl  font-semibold mb-10">Page not found</h4>
        <p className="w-[420px] text-gray-500 mb-10">It seems like we dont find what you searched. The page you were looking for doesn't exist, isn't available loading incorrectly.</p>
        <a href="#" className="relative text-center z-10 bg-[#ff497c] px-8 rounded-md text-white py-5 before:content-[''] before:absolute  before:-z-10 before:text-center before:top-0 before:left-0 before:px-[100px] before:py-8 before:bg-[#ff497c] before:hover:scale-110 before:rounded-md  before:duration-300">Book To Home <i class="fa-solid fa-arrow-right-long ml-2"></i></a>
        </div>
        <div className="right-part">
          <img src={ErrorImage} className="w-[500px] h-[auto]" alt="" />
        </div>
        </div>
      <Footer/>
    </div>
    </>
  )
}
export default Error;