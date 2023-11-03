import React from "react";
import Logo from '../../assets/asset 0.png'
import Alexa from '../../assets/asset 2.png'
import Background from '../../assets/asset25.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Footer from "../Home/Footer";
const Privacypolicy=()=>{
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

     <div className="Explore-section flex justify-between bg-gray-100 py-16 px-24 " >
      <div className="left-part">
        <ul className="flex mb-4">
          <li><a href="#" className="text-[#777777] mr-3 hover:text-[#3577f0] font-medium duration-500">Home</a></li>
          <li className="bg-[#e5e5e5] w-[2px] h-[11px] top-2 mr-3 relative"></li>
          <li className="text-[#3577f0] font-medium">My Account</li>
        </ul>
        <h3 className="text-4xl tracking-wide font-bold">Explore All Products</h3>
      </div>
        <div className="right-part relative z-10">
        <span className=" before:content-[''] before:absolute before:w-[110px] before:h-[110px] before:bg-white before:rounded-full before:-top-3 before:right-16 before:-z-10"></span>
          <img src={Alexa} alt="" />
        </div>
      </div>
      <div className="text-section  pt-20 px-24">
        <p className="relative text-2xl mb-24 text-[#272725] font-semibold before:absolute before:content-[''] before:w-[620px] before:top-12 before:h-1 before:bg-[#3577f0]">This Privacy policy was published on February 26th, 2022.</p>
        <h4 className="text-2xl font-semibold mb-5">GDPR compliance</h4>
        <p className="text-gray-500 text-base mb-10  w-[860px] text-justify">Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean convallis ligula orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>

        <h4 className="text-2xl font-semibold mb-5">About eTrade</h4>
        <p className="text-gray-500 text-base mb-10 w-[860px] text-justify">In dapibus, nibh sit amet pulvinar convallis, massa nunc tincidunt nunc, a pretium risus nulla ut dui. Ut ut condimentum tellus, dapibus volutpat est. Integer ullamcorper iaculis blandit. Pellentesque id tempus urna. Quisque luctus cursus imperdiet.<span className="text-[#3577f0]">hello@etrade.store</span> </p>

        <h4 className="text-2xl font-semibold mb-5">When we collect personal data about you</h4>
        <ul className="list-disc pl-5 marker:text-gray-300 leading-9 text-gray-500 mb-10">
            <li>Email is a crucial channel in any marketing.</li>
            <li>Curious what to say? How to say it?</li>
            <li>Whether you’re kicking off a new campaign.</li>
            <li>Habitasse per feugiat aliquam luctus accumsan curae</li>
        </ul>

        <h4 className="text-2xl font-semibold mb-5">Why we collect and use personal data</h4>
        <p className="text-gray-500 text-base mb-10  w-[860px] text-justify">Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean convallis ligula orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>

        <ul className="list-disc pl-5 marker:text-gray-300 leading-9 text-gray-500 mb-10">
            <li>Nulla facilisi. Sed pulvinar nec purus eu sollicitudin. Quisque ut tempus quam, in cursus eros. </li>
            <li>Fusce malesuada luctus velit eu tempor. Pellentesque habitant morbi tristique senectus et netus et.</li>
            <li>Pellentesque ornare nulla est, non blandit sapien lacinia nec. Nulla ac velit id est mattis faucibus.</li>
            <li>Aliquam lacus nisi, lobortis non diam eget, malesuada bibendum justo. Praesent fringilla sagittis ex, ac molestie ipsum <br></br>ullamcorper a.</li>
            <li>Vestibulum nulla tortor, aliquam at porta in, hendrerit sed nibh.</li>
        </ul>

        <h4 className="text-2xl font-semibold mb-5">Type of personal data collected</h4>
        <p className="text-gray-500 text-base mb-10  w-[860px] text-justify">In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>

        <h4 className="text-2xl font-semibold mb-5">Information we collect automatically</h4>
        <p className="text-gray-500 text-base mb-10  w-[860px] text-justify">Etiam vel mi vel neque mattis iaculis. Proin vitae consequat augue, vel porta tellus. Nullam tincidunt ac lorem eu lacinia. Praesent ac diam id odio elementum efficitur. Suspendisse sit amet urna vitae neque tempor pellentesque. Aenean ut dapibus urna. Pellentesque neque nulla, interdum vitae rhoncus at, pretium id arcu. Etiam sodales lectus at convallis vestibulum. Quisque non neque augue. Nullam condimentum nulla felis, nec suscipit augue congue ac.</p>

        <h4 className="text-2xl font-semibold mb-5">The use of cookies and web beacons</h4>
        <p className="text-gray-500 text-base mb-5  w-[860px] text-justify">We may log information using "cookies." Cookies are small data files stored on your hard drive by a website. Cookies help us make our Site and your visit better.</p>
        <p className="text-gray-500 text-base mb-5  w-[860px] text-justify">We may log information using digital images called web beacons on our Site or in our emails.</p>
        <p className="text-gray-500 text-base mb-10  w-[860px] text-justify">This information is used to make our Site work more efficiently, as well as to provide business and marketing information to the owners of the Site, and to gather such personal data as browser type and operating system, referring page, path through site, domain of ISP, etc. for the purposes of understanding how visitors use our Site. Cookies and similar technologies help us tailor our Site to your personal needs, as well as to detect and prevent security threats and abuse. If used alone, cookies and web beacons do not personally identify you.</p>

        <h4 className="text-2xl font-semibold mb-5">How long we keep your data</h4>
        <p className="text-gray-500 text-base mb-5  w-[860px] text-justify">We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>
        <p className="text-gray-500 text-base mb-5  w-[860px] text-justify">This means that we may retain your personal data for a reasonable period after your last interaction with us. When the personal data that we have collected is no longer required, we will delete it securely. We may process data for statistical purposes, but in such cases, data will be anonymized.</p>

        <h4 className="text-2xl font-semibold mb-5">Your rights to your personal data</h4>
        <p className="text-gray-500 text-base mb-5  w-[860px] text-justify">We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>

        <h4 className="text-2xl font-semibold mb-5">Hotjar’s privacy policy</h4>
        <p className="text-gray-500 text-base mb-5  w-[860px] text-justify">Pellentesque vestibulum venenatis iaculis. Aliquam viverra sodales ultrices. Quisque sed purus id massa consequat consectetur eu vel lorem. Maecenas lectus velit, cursus quis orci non, laoreet hendrerit mi. Nulla vitae ipsum fringilla, placerat metus eu, malesuada velit. Quisque viverra risus ex. Aenean commodo vestibulum efficitur. Nullam ligula orci, aliquet sed luctus vel, luctus vel dui. Sed pulvinar, ipsum at mattis imperdiet, diam augue tempor diam, sed porttitor odio elit ut ante. In posuere mi at mi pellentesque ornare sit amet gravida nisi. Praesent ac blandit odio. Curabitur iaculis ante elit, et imperdiet leo mollis at.</p>

        <h4 className="text-2xl font-semibold mb-5">Changes to this Privacy Policy</h4>
        <p className="text-gray-500 text-base mb-5  w-[860px] text-justify">Integer eu ornare lectus, ornare ullamcorper tellus. Morbi in urna a justo dignissim luctus. Nam sagittis ante ut lorem feugiat, sed consectetur ligula lacinia. Vestibulum quis mauris sed lectus pretium dictum sed vitae orci. Vestibulum facilisis facilisis mauris non maximus. Nam tristique ipsum egestas, suscipit orci sit amet, rutrum ante. Proin in felis pellentesque, ullamcorper enim vel, molestie ipsum.</p>
      </div>

        <Footer/>
        </>
    )
}
export default Privacypolicy;