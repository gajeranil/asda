import React from "react";
import Logo from '../../assets/asset 0.png'
import Bg from '../../assets/asset1.jpeg'
const Comingsoon=()=>{
    return(
        <>
        <div className="signup-main-section flex items-center  bg-cover bg-top bg-no-repeat" >
            <div className="left-part relative min-h-[615px] w-[500px] bg-cover bg-top bg-no-repeat -z-10 "style={{ backgroundImage:`URL(${Bg})`}}>
               
            </div>
            <div className="right-part  py-16 ">
                    <div className="form-section text-center w-full px-40  ">
                <form className="" >
                <img src={Logo} className="w-[190px] h-[58px] mx-auto my-14 mb-10 z-10" alt="" />
                    
                <h4 className="text-4xl font-semibold mb-5 ">Our new website is on the way</h4>
                <p className="text-gray-500 mb-5">We're coming soon! We're working hard to give you<br></br>
the best experince.</p>
                <div className="main-counter flex justify-center items-center">
                    <div className="w-24 h-24 bg-[#3577f0] rounded-full mx-2 pt-4">
                        <div className="text-3xl text-white">0</div>
                        <div className="text-white font-bold text-sm">Day</div>
                    </div>
                    <div className="w-24 h-24 bg-[#3577f0] rounded-full mx-2 pt-4">
                        <div className="text-3xl text-white">00</div>
                        <div className="text-white font-bold text-sm">Hrs</div>
                    </div>
                    <div className="w-24 h-24 bg-[#3577f0] rounded-full mx-2 pt-4">
                        <div className="text-3xl text-white">00</div>
                        <div className="text-white font-bold text-sm">Min</div>
                    </div>
                    <div className="w-24 h-24 bg-[#3577f0] rounded-full mx-2 pt-4 ">
                        <div className="text-3xl text-white">00</div>
                        <div className="text-white font-bold text-sm ">Sec</div>
                    </div>
                </div>
                </form>
            </div>

        </div>
        </div>
        </>
    )
}
export default Comingsoon;