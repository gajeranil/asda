import React from "react";
import Background from '../../assets/bg-image-10.png'
import Logo from '../../assets/asset 0.png'
const Signup=()=>{
    return(
        <>
        <div className="signup-main-section flex   bg-cover bg-top bg-no-repeat" >
            <div className="left-part relative min-h-[615px] w-[500px] bg-cover bg-top bg-no-repeat -z-10 "style={{ backgroundImage:`URL(${Background})`}}>
               <img src={Logo} className="w-[150px] h-[43px] mx-28 my-14 mb-20 z-10" alt="" />
               <h3 className="w-64 mx-28 font-semibold font-sans text-3xl tracking-wide">We Offer the Best Products</h3>
            </div>
            <div className="right-part  py-16 ">
            <div className="flex justify-between">
            <div className="w-[450px]"></div>
            <div className="mb-20 mr-16">
                <span className="mr-8">Already a member?</span>
                    <a href="#" className=" relative px-10 py-5 rounded-md bg-[#ff497c] before:absolute before:content-[''] before:w-[130px] before:inline-block before:rounded-md before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-[#ff497c] before:-z-10 before:hover:scale-110 text-white before:duration-300  ">Sign In</a>
                    </div>
                    </div>


                    <div className="form-section center w-full px-56  ">
                <form className="" >
                    <h3 className="text-2xl font-bold text-slate-800 mb-5">I'm New Here</h3>
                    <p className="text-sm text-gray-400 mb-10">Enter your detail below</p>

                    <div className="relative mb-7 ">
                    <label className="absolute -top-2 right-[67%] bg-white px-2  text-gray-600 text-sm">User Name</label>
                        <input type="text" placeholder="anniemario" className="border w-[370px] px-9 py-4 text-sm rounded-md"></input>
                    </div>
                    <div className="relative mb-7">
                    <label className="absolute -top-2 right-[78%] bg-white px-2 text-gray-600 text-sm">Email</label>
                        <input type="text" placeholder="annie@example.com" className="border w-[370px] px-9 py-4 rounded-md text-sm"></input>
                    </div>
                    <div className="relative mb-7">
                    <label className="absolute -top-2 right-[72%] bg-white px-2 text-gray-600 text-sm">Password</label>
                        <input type="password" placeholder="anniemario" className="border w-[370px] px-9 py-4 text-sm rounded-md"></input>
                    </div>
                    <a href="#" className="px-9 text-white font-bold relative rounded-md py-5 mt-7 leading-[60px] bg-blue-600 before:content-[''] before:absolute before:w-[186px] before:h-[60px] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-blue-600 before:-z-10 before:hover:scale-110 before:duration-300 before:rounded-md">Create Account</a>
                </form>
            </div>

        </div>
        </div>
        </>
    )
}
export default Signup;