import React from "react";
import Logo from '../../assets/asset 0.png'
import Background from '../../assets/asset25.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Navbar=()=>{
    return (
        <>
             <div className='header bg-[#f9f3f0]'>
        <div className='header bg-[#282828] w-full h-auto flex justify-between px-20 pb-3'>
          <div className='left-part'>
            <div className='left-main-part ml-3'>
              <div className="dropdown flex  ">
                <div className='english-button group'>
                  <button className="btn relative text-sm text-gray-300 font-sans " type="button">
                    English
                  </button>
                  <ul className="dropdown-menu bg-white p-2 absolute  bg-repeat-rounded opacity-0 group-hover:opacity-100 duration-500 shadow-xl">
                    <li><a className="dropdown-item  hover:bg-pink-600 block rounded px-2 duration-500 hover:text-white" href="#">English</a></li>
                    <li><a className="dropdown-item hover:bg-pink-600 block rounded px-2 duration-500 hover:text-white" href="#">Arabic</a></li>
                    <li><a className="dropdown-item hover:bg-pink-600 block rounded px-2 duration-500 hover:text-white" href="#">Spanish</a></li>
                  </ul>
                </div>
                <div className='usd-button group'>
                  <button className="btn relative ml-3 text-sm text-gray-300 font-sans " type="button">
                    USD
                  </button>
                  <ul className="dropdown-menu bg-white p-2 ml-3 absolute bg-repeat-rounded opacity-0 group-hover:opacity-100 duration-500 shadow-xl">
                    <li><a className="dropdown-item  hover:bg-pink-600 block rounded px-2 duration-500 hover:text-white" href="#">USD</a></li>
                    <li><a className="dropdown-item hover:bg-pink-600 block rounded px-2 duration-500 hover:text-white" href="#">AUD</a></li>
                    <li><a className="dropdown-item hover:bg-pink-600 block rounded px-2 duration-500 hover:text-white" href="#">EUR</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='right-part'>
            <div className='list-none flex text-sm text-gray-300 '>
              <li className='mx-4 hover:text-blue-700 duration-500 cursor-pointer'>Help</li>
              <li className='mx-4 hover:text-blue-700 duration-500 cursor-pointer'>Join Us</li>
              <li className='mx-4 hover:text-blue-700 duration-500 cursor-pointer'>Sign In</li>
            </div>
          </div>

        </div>
        {/* navbar */}
        <div className='navbar py-5 px-20 h-22 bg-white rounded-lg  flex  justify-between shadow-lg'>
          <div className='logo'>
            <img src={Logo} className='w-36 h-10' alt="" />
          </div>
          <div className='navbar flex '>
            <div className='home group'>
              <button class="btn relative font-bold  mx-7 font-sans" type="button">
                Home
              </button>
              <ul className="dropdown-menu bg-white p-6 absolute top-28 bg-repeat-rounded  opacity-0 group-hover:opacity-100 duration-500 shadow-md">
                <li><a className="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 text-pink-500" href="#">Home-Electronics</a></li>
                <li><a className="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-NFT</a></li>
                <li><a className="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-Fashion</a></li>
                <li><a className="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-Jewellery</a></li>
                <li><a className="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-Furniture</a></li>
                <li><a className="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-Multipurpose</a></li>
                <li><a className="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">RTL Version</a></li>
              </ul>
            </div>
            <div className='button group relative '>
              <button class="btn font-bold mx-7 font-sans before:content-[''] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0  duration-300 before:group-hover:w-10  before:group-hover:opacity-100 " type="button">
                Shop
              </button>
              <ul class="dropdown-menu bg-white w-56 p-6 absolute top-12 left-[30%] bg-repeat-rounded opacity-0 group-hover:opacity-100 duration-500 shadow-md">
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 text-pink-500" href="#">Shop With Sidebar</a></li>
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Shop no sidebar</a></li>
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Product Variation 1</a></li>
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Product Variation 2</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Product Variation 3</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Product Variation 4</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Product Variation 5</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Product Variation 6</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Product Variation 7</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Product Variation 8</a></li>
              </ul>
            </div>
            <div className='button group relative'>
              <button class="btn font-bold mx-7 font-sans before:content-[''] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0  duration-300 before:group-hover:w-10  before:group-hover:opacity-100 " type="button">
                Pages
              </button>
              <ul class="dropdown-menu bg-white w-56 p-6 absolute top-14 bg-repeat-rounded opacity-0 group-hover:opacity-100 duration-500 shadow-md">
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 text-pink-500" href="#">Wishlist</a></li>
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Cart</a></li>
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Checkout</a></li>
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-Account</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Sign Up</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Sign In</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Forgot Password</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Reset Password</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Privacy Policy</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Coming soon</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">404 Error</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Typography</a></li>
              </ul>
            </div>



            <div className='button group relative'>
              <button class="btn font-bold mx-7 font-sans before:content-[''] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0  duration-300 before:group-hover:w-12  before:group-hover:opacity-100 " type="button">
                About
              </button>

            </div>
            <div className='button group relative'>
              <button class="btn font-bold mx-7 font-sans before:content-[''] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0  duration-300 before:group-hover:w-10  before:group-hover:opacity-100 " type="button">
                Blog
              </button>
              <ul class="dropdown-menu bg-white p-6 absolute w-56 top-14 bg-repeat-rounded opacity-0 group-hover:opacity-100 duration-500 shadow-md">
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 text-pink-500" href="#">Home-Electronics</a></li>
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-NFT</a></li>
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-Fashion</a></li>
                <li><a class="dropdown-item   mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-Jewellery</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-Furniture</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">Home-Multipurpose</a></li>
                <li><a class="dropdown-item  mb-2 block font-semibold rounded px-2 duration-500 hover:text-pink-500" href="#">RTL Version</a></li>
              </ul>
            </div>
            <div className='button group relative'>
              <button class="btn font-bold mx-7 font-sans before:content-[''] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0  duration-300 before:group-hover:w-14  before:group-hover:opacity-100 " type="button">
                Contact
              </button>

            </div>
          </div>
          <div className='icons flex justify-center'>
            <div className='icon  group relative z-10 '>
              <input  className='relative border py-2 px-8 mr-8 rounded-md  font-normal' type="text" placeholder=" What are you looking for?"/><a href='#' className=" absolute left-3  top-2"><FontAwesomeIcon icon={faMagnifyingGlass}/></a>
            </div>
            <div className='icon  group relative z-10 '>
              <a href='#' className=' mx-3 before:content -[""] before:mx-3 before:absolute before:w-10 before:h-10 before:rounded-full before:bg-pink-500 before:-top-1.5 before:scale-0 before:-left-3 before:-z-10 before:group-hover:scale-100 before:duration-300 before:group-hover:'><FontAwesomeIcon icon={faHeart} className='group-hover:text-white duration-300 ' /></a>
            </div>
            <div className='icon  group relative z-10 '>
              <span className='cart-count w-6 h-6 absolute -top-3.5 -right-1 bg-[#3577f0] border-2 border-white text-center text-sm leading-[20px] text-white rounded-full'>3</span>
              <a href='#' className=' mx-3 before:content -[""] before:mx-3 before:absolute before:w-10 before:h-10 before:rounded-full before:bg-pink-500 before:-top-1.5 before:scale-0 before:-left-2.5 before:-z-10 before:group-hover:scale-100 before:duration-300 before:group-hover:'><FontAwesomeIcon icon={faCartShopping} className='group-hover:text-white duration-300 ' /></a>
            </div>
            <div className='icon  group relative z-10 '>
              <a href='#' className=' mx-3 before:content -[""] before:mx-3 before:absolute before:w-10 before:h-10 before:rounded-full before:bg-pink-500 before:-top-1.5 before:scale-0 before:-left-3 before:-z-10 before:group-hover:scale-100 before:duration-300 before:group-hover:'><FontAwesomeIcon icon={faUser} className='group-hover:text-white duration-300 ' /></a>
            </div>
          </div>
        </div>
      </div>
     
     <div className="  bg-center bg-no-repeat bg-cover" style={{ backgroundImage:`URL(${Background})`}}>

    <div className="content flex justify-center py-5">
      <a href="#" className="text-white"><FontAwesomeIcon icon={faArrowLeft} /></a>
      <p className="text-white font-semibold px-10">STUDENT NOW GET 10% OFF : <a href="#" className=" hover:text-[#ff497c] underline mb-1 decoration-1 decoration-white hover:decoration-[#ff497c] duration-300">GET OFFER</a></p>
      <a href="#" className="text-white"><FontAwesomeIcon icon={faArrowRight} /></a>
    </div>
     </div>
        </>
    )
}
export default Navbar