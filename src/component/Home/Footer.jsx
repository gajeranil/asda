import React from 'react'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import SecureDelivery from '../../assets/asset 4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Guarantee from '../../assets/asset 5.png'
import Returnpolicy from '../../assets/asset 6.png'
import Support from '../../assets/asset 7.png'
import Qrscan from '../../assets/asset 8.png'
import Appstore from '../../assets/asset 9.png'
import Googleplay from '../../assets/asset 10.png'
import Paypal from '../../assets/asset 11.png'
import Mastercard from '../../assets/asset 12.png'
import Visa from '../../assets/asset 14.png'


const Footer = () => {
    return (
        <>
            <div className='service-section flex justify-between  border-b-2 mb-12 pt-12 pb-7 px-16 mx-10'>
                <div className='delivery flex align-bottom '>
                    <img src={SecureDelivery} className='icon w-12 h-12 mr-5' alt="" />
                    <div className='content'>
                        <h3>Fast & Secure Delivery</h3>
                        <p>Tell about your service</p>
                    </div>
                </div>
                <div className='guarantee flex'>
                    <img src={Guarantee} className='icon w-12 h-12 mr-5' alt="" />
                    <div className='content'>
                        <h3>Fast & Secure Delivery</h3>
                        <p>Tell about your service</p>
                    </div>
                </div>
                <div className='policy flex'>
                    <img src={Returnpolicy} className='icon w-12 h-12 mr-5' alt="" />
                    <div className='content'>
                        <h3>Fast & Secure Delivery</h3>
                        <p>Tell about your service</p>
                    </div>
                </div>
                <div className='support flex'>
                    <img src={Support} className='icon w-12 h-12 mr-5' alt="" />
                    <div className='content'>
                        <h3>Fast & Secure Delivery</h3>
                        <p>Tell about your service</p>
                    </div>
                </div>
            </div>

            <div className='footer-section px-20 flex justify-between pb-10  border-b-2 mx-10'>

                <div className='Support-part'>
                    <h3 className='font-bold leading-8'>Support</h3>
                    <p className='w-[155px] leading-8 text-gray-500 font-medium font-sans mb-4'>685 Market Street,
                        Las Vegas, LA 95820,
                        United States.</p>
                    <ul>
                        <li className='leading-9 text-gray-500 hover:text-gray-900 duration-300'><a href='#'><FontAwesomeIcon icon={faEnvelopeOpen} /> example@domain.com</a></li>
                        <li className='leading-9 text-gray-500 hover:text-gray-900 duration-300'><a href='#'><FontAwesomeIcon icon={faPhone} /> (+01) 850-315-5862</a></li>
                    </ul>

                </div>
                <div className='Account-part'>
                    <h3 className='font-bold leading-9'>Account</h3>
                    <ul>
                    <div className='relative group'>
                            <li className=' leading-9 text-gray-500 font-semibold hover:text-gray-900 duration-300 before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0   before:group-hover:w-24 before:right-5 before:group-hover:left-0   before:group-hover:opacity-100 '><a href='#'>My Account</a></li>
                        </div>
                        <div className='relative group'>
                            <li className=' leading-9 text-gray-500 font-semibold hover:text-gray-900 duration-300 before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0   before:group-hover:w-[100%] before:right-0 before:group-hover:left-0   before:group-hover:opacity-100 '><a href='#'>Login / Register</a></li>
                        </div>
                        <div className='relative group'>
                            <li className=' leading-9 text-gray-500 font-semibold hover:text-gray-900 duration-300 before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0   before:group-hover:w-8 before:right-20 before:group-hover:left-0   before:group-hover:opacity-100 '><a href='#'>Cart</a></li>
                        </div>
                        <div className='relative group'>
                            <li className=' leading-9 text-gray-500 font-semibold hover:text-gray-900 duration-300 before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0   before:group-hover:w-20 before:right-9 before:group-hover:left-0   before:group-hover:opacity-100 '><a href='#'>Whishlist</a></li>
                        </div>
                        <div className='relative group'>
                            <li className=' leading-9 text-gray-500 font-semibold hover:text-gray-900 duration-300 before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0   before:group-hover:w-10 before:right-20 before:group-hover:left-0   before:group-hover:opacity-100 '><a href='#'>Shop</a></li>
                        </div>
                    </ul>
                </div>
                <div className='Quick-link-part'>
                    <h3 className='font-bold leading-9'>Quick Link</h3>
                    <ul>
                        <div className='relative group'>
                            <li className=' leading-9 text-gray-500 font-semibold hover:text-gray-900 duration-300 before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0   before:group-hover:w-[100%] before:right-0 before:group-hover:left-0   before:group-hover:opacity-100 '><a href='#'>Privacy Policy</a></li>
                        </div>
                        <div className='relative group'>
                            <li className=' leading-9 text-gray-500 font-semibold hover:text-gray-900 duration-300 '><a href='#' className='before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0   before:group-hover:w-[100%] before:right-0 before:group-hover:left-0   before:group-hover:opacity-100 '>Terms Of Use</a></li>
                        </div>
                        <div className='relative group'>
                            <li className=' leading-9 text-gray-500 font-semibold hover:text-gray-900 duration-300'><a href='#' className='before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0   before:group-hover:w-10 before:right-16 before:group-hover:left-0   before:group-hover:opacity-100 '>FAQ</a></li>
                        </div>
                        <div className='relative group'>
                            <li className=' leading-9 text-gray-500 font-semibold hover:text-gray-900 duration-300 before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0   before:group-hover:w-14 before:right-10 before:group-hover:left-0   before:group-hover:opacity-100 '><a href='#'>Contact</a></li>
                        </div>
                        <div className='relative group'>
                            <li className=' leading-9 text-gray-500 font-semibold hover:text-gray-900 duration-300 before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:bottom-1  before:bg-black before:opacity-0   before:group-hover:w-14 before:right-10 before:group-hover:left-0   before:group-hover:opacity-100 '><a href='#'>Contact</a></li>
                        </div>
                    </ul>
                </div>
                <div className='Download-part'>
                    <h3 className='font-bold leading-9'>Download App</h3>
                    <p className='w-56 mb-2 leading-9 text-gray-500'>Save $3 With App & New User only</p>
                    <div className='Qr-code-section flex'>
                        <div className='Qr-img'>
                            <img src={Qrscan} className='w-24 mr-3' alt="" />
                        </div>
                        <div className='App-img'>
                            <img src={Appstore} className='w-32 mb-4' alt="" />
                            <img src={Googleplay} className='w-32' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-bottom flex justify-between px-28 py-5'>
                <div className='social-icon'>
                    <ul className='flex '>
                    <div className='icon relative group z-10'>
                        <li><a href='#' className=' text-gray-500  mx-3 before:content-[""] before:mx-3.5 before:absolute before:w-8 before:h-8 before:rounded-full before:bg-pink-500 before:-top-1 before:scale-0 before:-left-3 before:-z-10 before:group-hover:scale-110 before:duration-300'><FontAwesomeIcon icon={faFacebookF} className='group-hover:text-white duration-300' /></a></li>
                        </div>
                    <div className='icon relative group z-10'>
                        <li><a href='#' className=' text-gray-500 mx-3 before:content-[""] before:mx-3.5 before:absolute before:w-8 before:h-8 before:rounded-full before:bg-pink-500 before:-top-1 before:scale-0 before:-left-2.5 before:-z-10 before:group-hover:scale-110 before:duration-300'><FontAwesomeIcon icon={faInstagram} className='group-hover:text-white duration-300'/></a></li>
                        </div>
                    <div className='icon relative group z-10'>
                        <li><a href='#' className=' text-gray-500 mx-3 before:content-[""] before:mx-3.5 before:absolute before:w-8 before:h-8 before:rounded-full before:bg-pink-500 before:-top-1 before:scale-0 before:-left-2.5 before:-z-10 before:group-hover:scale-110 before:duration-300'><FontAwesomeIcon icon={faTwitter} className='group-hover:text-white duration-300'/></a></li>
                        </div>
                    <div className='icon relative group z-10'>
                        <li><a href='#' className=' text-gray-500 mx-3 before:content-[""] before:mx-3.5 before:absolute before:w-8 before:h-8 before:rounded-full before:bg-pink-500 before:-top-1 before:scale-0 before:-left-2.5 before:-z-10 before:group-hover:scale-110 before:duration-300'><FontAwesomeIcon icon={faLinkedinIn} className='group-hover:text-white duration-300' /></a></li>
                        </div>
                    <div className='icon relative group z-10'>
                        <li><a href='#' className='mr-4 text-gray-500 mx-3 before:content-[""] before:mx-3.5 before:absolute before:w-8 before:h-8 before:rounded-full before:bg-pink-500 before:-top-1 before:scale-0 before:-left-2 before:-z-10 before:group-hover:scale-110 before:duration-300'><FontAwesomeIcon icon={faDiscord}className='group-hover:text-white duration-300' /></a></li>
                </div>
                    </ul>
                    </div>
                <div className='paragraph '>
                    <p className='text-gray-500 relative group '>© 2023. All rights reserved by <a href='#' className=' hover:text-black duration-300 before:content-[""] before:w-0  before:duration-700 before:h-0.5 before:absolute before:-bottom-1.5  before:bg-black before:opacity-0   before:group-hover:w-20 before:right-0 before:group-hover:left-[215px]  before:group-hover:opacity-100'>Axilthemes.</a></p>
                </div>

                <div className='Accept-part '>
                    <ul className='flex justify-center'>
                    <div className='relative z-10'></div>
                        <li className='ml-3'>Accept For</li>
                        <li className='ml-3'><img src={Paypal} alt="" /></li>
                        <li className='ml-3'><img src={Mastercard} alt="" /></li>
                        <li className='ml-3'><img src={Visa} alt="" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;
