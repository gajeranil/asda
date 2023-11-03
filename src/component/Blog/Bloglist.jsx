import React from "react";
import Shopwithslidebar from "../Shop/Shopwithslidebar";
import Newletter from "../Home/Newletter";
import Footer from "../Home/Footer";
import Review from '../../assets/author-image-2.png'
import Blog from '../../assets/blog-01.png'
import ContentImage from '../../assets/author-image-1.png'
import Video from '../../assets/blog-02.png'
import Slider from '../../assets/blog-03.png'
import '../Blog/Bloglist.css'
import buttonslider from '../../assets/author-image-3.png'
import Latestpost from '../../assets/latest-post.png'
import Latestpost2 from '../../assets/latest-post2.png'
import Latestpost3 from '../../assets/latest-post3.png'
import Tshirt from '../../assets/asset 8.jpeg'
import WhiteShoes from '../../assets/asset 9.jpeg'
import Blackshoes from '../../assets/asset 13.jpeg'

const Bloglist = () => {
    return (
        <>
            <Shopwithslidebar />
            <div className="Blog-section flex justify-between  mx-24">
                <div className="right-section">
                    <div className="content-blog bg-[#f9f3f0] w-[700px] h-auto p-[50px] rounded-md border-l-4 border-[#FAB8C4] mb-16">
                        <a href="#" className=" text-2xl hover:text-blue-700 font-medium duration-300">Dubai's Offers its Take Nike SB Dunk.</a>
                        <div className="review flex items-center mt-5 mb-8">
                            <div className="image">
                                <img src={Review} className="w-[50px]" alt="" />
                            </div>
                            <div className="image-content">
                                <a href="#" className="ml-4 hover:text-blue-700 duration-300 font-sans font-medium">Ralph Edwards</a>
                                <ul className="flex ">
                                    <li className="relative text-[#777777] px-4 after:absolute after:content-[''] after:w-[1px] after:h-[20px] after:bg-[#cbd3d9] after:bottom-0 after:right-0 ">Mar 27, 2022</li>
                                    <li className="text-[#777777] px-4">9 min to read</li>
                                </ul>

                            </div>
                        </div>
                        <p className="text-[#777777] mb-10">Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                        <a href="#" className="px-10 py-5 z-10 bg-blue-500 text-white font-semibold rounded-md relative before:absolute before:contetn-[''] before:px-10 before:py-5 before:bg-blue-500 before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-md before:-z-10 before:hover:scale-110 before:duration-300">Read More</a>
                    </div>
                    <div className="second-blog w-[700px] h-auto border-t-2 pt-16 mb-10">
                        <img src={Blog} className="rounded-md " alt="" />
                    </div>
                    <div className="content h-[350px] w-[700px] mb-12">
                        <p className="text-2xl mb-10 font-medium">UCLA Athletics Reaches Multi-YearAgreement with NIKE, Inc.<br></br> and Jordan Brand</p>
                        <div className="review flex items-center mt-5 mb-8">
                            <div className="image">
                                <img src={ContentImage} className="w-[50px] rounded-full" alt="" />
                            </div>
                            <div className="image-content">
                                <a href="#" className="ml-4 hover:text-blue-700 duration-300 font-sans font-medium">Theresa Underwood</a>
                                <ul className="flex ">
                                    <li className="relative text-[#777777] px-4 after:absolute after:content-[''] after:w-[1px] after:h-[20px] after:bg-[#cbd3d9] after:bottom-0 after:right-0 ">Mar 27, 2022</li>
                                    <li className="text-[#777777] px-4">9 min to read</li>
                                </ul>

                            </div>
                        </div>
                        <p className="text-[#777777] mb-10 text-base w-[700px]">Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                        <a href="#" className="px-10 py-5 z-10 bg-blue-500 text-white font-semibold rounded-md relative before:absolute before:contetn-[''] before:px-10 before:py-5 before:bg-blue-500 before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-md before:-z-10 before:hover:scale-110 before:duration-300">Read More</a>

                    </div>
                    <div className="content-blog bg-[#f9f3f0] w-[700px] h-auto p-[50px] rounded-md border-l-4 border-[#FAB8C4] mb-16">
                        <a href="#" className=" text-4xl italic  hover:text-blue-700 font-semibold duration-300">“An oral history of the AIM away message (by the people who were there)”</a>
                        <div className="review flex items-center mt-5 ">
                            <div className="image">
                                <img src={ContentImage} className="w-[50px] rounded-full" alt="" />
                            </div>
                            <div className="image-content">
                                <a href="#" className="ml-4 hover:text-blue-700 duration-300 font-sans font-medium">Theresa Underwood</a>
                                <ul className="flex ">
                                    <li className="relative text-[#777777] px-4 after:absolute after:content-[''] after:w-[1px] after:h-[20px] after:bg-[#cbd3d9] after:bottom-0 after:right-0 ">Mar 27, 2022</li>
                                    <li className="text-[#777777] px-4">9 min to read</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="video-section border-t-2 pt-20 -z-10 w-[700px] h-auto ">
                        <div className="image-section relative mb-10 after:absolute after:content-[''] after:w-[100%] after:h-[100%] after:bg-black after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-md after:opacity-[0.2] after:z-10 " >
                            <img src={Video} className="rounded-md" alt="" />
                            <a href="https://www.youtube.com/watch?v=Youugn7xW_A&list=RDYouugn7xW_A&start_radio=1" target="_blank" className="absolute top-[50%] -translate-x-2/4 -translate-y-2/4 left-[50%]   mx-auto z-20 rounded-full  bg-black "><i class="fa-solid fa-play w-40 h-40 text-4xl z-30 text-white  flex justify-center items-center opacity-100 "></i> </a>
                        </div>
                    </div>

                    <div className="content h-[350px] w-[700px] mb-12">
                        <p className="text-2xl mb-10 font-medium">UCLA Athletics Reaches Multi-Year
                            Agreement with NIKE, Inc.<br></br> and Jordan Brand</p>
                        <div className="review flex items-center mt-5 mb-8">
                            <div className="image">
                                <img src={ContentImage} className="w-[50px] rounded-full" alt="" />
                            </div>
                            <div className="image-content">
                                <a href="#" className="ml-4 hover:text-blue-700 duration-300 font-sans font-medium">Theresa Underwood</a>
                                <ul className="flex ">
                                    <li className="relative text-[#777777] px-4 after:absolute after:content-[''] after:w-[1px] after:h-[20px] after:bg-[#cbd3d9] after:bottom-0 after:right-0 ">Mar 27, 2022</li>
                                    <li className="text-[#777777] px-4">9 min to read</li>
                                </ul>

                            </div>
                        </div>
                        <p className="text-[#777777] mb-10 text-base w-[700px]">Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                        <a href="#" className="px-10 py-5 z-10 bg-blue-500 text-white font-semibold rounded-md relative before:absolute before:contetn-[''] before:px-10 before:py-5 before:bg-blue-500 before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-md before:-z-10 before:hover:scale-110 before:duration-300">Read More</a>

                    </div>

                    <div className=" slider-section w-[700px] border-t-2 pt-20 mb-10">
                        <div className="slider rounded-md relative z-10 group">
                            <a href="#"><img src={Slider} className="rounded-md " alt="" /></a>
                            <div className="btns group absolute top-[50%] w-[100%] translate-y-2/4 z-20">
                                <a href="#" className="left-btn  absolute text-[#777777] px-5 py-4 left-14 bg-[#F7F6FB] rounded-md group-hover:left-2 -z-10 duration-300  after:absolute after:content[''] after:px-5 after:py-4 after:bg-[#F7F6FB] after:left-0 after:top-0 after:right-0 after:bottom-0 after:rounded-md after:hover:scale-110 after:-z-10 after:duration-300">
                                <i class="fa-solid fa-arrow-left-long"></i>
                                </a>
                                <a href="#" className="right-btn absolute right-14 text-gray-500 px-5 py-4 bg-[#F7F6FB] rounded-md group-hover:right-2 duration-300 after:absolute after:content[''] after:px-5 after:py-4 after:bg-[#F7F6FB] after:left-0 after:top-0 after:right-0 after:bottom-0 after:rounded-md after:hover:scale-110 after:-z-10 after:duration-300">
                                <i class="fa-solid fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="content h-[350px] w-[700px] mb-10">
                        <p className="text-2xl mb-10 font-medium">UCLA Athletics Reaches Multi-Year
                            Agreement with NIKE, Inc.<br></br> and Jordan Brand</p>
                        <div className="review flex items-center mt-5 mb-8">
                            <div className="image">
                                <img src={buttonslider} className="w-[50px] rounded-full" alt="" />
                            </div>
                            <div className="image-content">
                                <a href="#" className="ml-4 hover:text-blue-700 duration-300 font-sans font-medium">Theresa Underwood</a>
                                <ul className="flex ">
                                    <li className="relative text-[#777777] px-4 after:absolute after:content-[''] after:w-[1px] after:h-[20px] after:bg-[#cbd3d9] after:bottom-0 after:right-0 ">Mar 27, 2022</li>
                                    <li className="text-[#777777] px-4">9 min to read</li>
                                </ul>

                            </div>
                            </div>
                            <p className="text-[#777777] mb-10">The Converse x AMBUSH® CTAS Duck Boot and Chuck 70 Fuzzy release November 21 in Greater China. A global release follows November 24.</p>
                            <a href="#" className="px-10 py-5 z-10 bg-blue-500 text-white font-semibold rounded-md relative before:absolute before:contetn-[''] before:px-10 before:py-5 before:bg-blue-500 before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-md before:-z-10 before:hover:scale-110 before:duration-300">Read More</a>
                            </div>

                            <div className="page-number mb-16">
                                <ul className="flex">
                                    <li className="w-[45px] h-[45px] text-center leading-[45px] border rounded-md mr-1 text-white bg-blue-500 duration-300">1</li>
                                    <li className="w-[45px] h-[45px] text-center leading-[45px] border rounded-md mr-1 hover:text-white hover:bg-blue-500 duration-300">2</li>
                                    <li className="w-[45px] h-[45px] text-center leading-[45px] border rounded-md mr-1 hover:text-white hover:bg-blue-500 duration-300">3</li>
                                    <li className="w-[45px] h-[45px] text-center leading-[45px] border rounded-md mr-1 hover:text-white hover:bg-blue-500 duration-300">4</li>
                                    <li className="w-[45px] h-[45px] text-center leading-[45px] border rounded-md mr-1 hover:text-white hover:bg-blue-500 duration-300">5</li>
                                    <li className="w-[45px] h-[45px] text-center leading-[45px] border rounded-md mr-1 hover:text-white hover:bg-blue-500 duration-300"><i class="fa-solid fa-arrow-right"></i></li>
                                </ul>
                            </div>

                </div>

            <div className="left-section">
                <div className="Latest-post-section border rounded-lg w-[400px] h-auto p-8 mb-10">
                        <h3 className="text-lg font-semibold text-[#27272E] border-e-2">Latest Posts</h3>
                        <div className="image-section flex items-center border-b-2 py-8 group ">
                            <div className="image mr-5 overflow-hidden rounded-lg">
                                <img src={Latestpost} className=" rounded-lg w-[150px] group-hover:scale-110 duration-300" alt="" />
                            </div>
                            <div className="content">
                                <h4 className="text-#292930 font-semibold mb-1"><a href="#" className="hover:text-blue-500 duration-300" >Dubai's FRAME Offers its Take on the</a></h4>
                                <ul className="flex ">
                                    <li className="mr-2 text-gray-500 text-base border-r-2 pr-3">Mar 27,2022</li>
                                    <li className=" text-gray-500 text-base">300k Views</li>
                                </ul>
                            </div>
                        </div>
                         <div className="image-section flex items-center border-b-2 py-8 group ">
                            <div className="image mr-5 overflow-hidden rounded-lg">
                                <img src={Latestpost2} className=" rounded-lg w-[150px] group-hover:scale-110 duration-300" alt="" />
                            </div>
                            <div className="content">
                                <h4 className="text-#292930 font-semibold mb-1"><a href="#" className="hover:text-blue-500 duration-300" >Apple presents App Best of 2020 winners</a></h4>
                                <ul className="flex ">
                                    <li className="mr-2 text-gray-500 text-base border-r-2 pr-3">Mar 20,2022</li>
                                    <li className=" text-gray-500 text-base">300k Views</li>
                                </ul>
                            </div>
                        </div>
                         <div className="image-section flex items-center  pt-8 group ">
                            <div className="image mr-5 overflow-hidden rounded-lg">
                                <img src={Latestpost3} className=" rounded-lg w-[150px] group-hover:scale-110 duration-300" alt="" />
                            </div>
                            <div className="content">
                                <h4 className="text-#292930 font-semibold mb-1"><a href="#" className="hover:text-blue-500 duration-300" >Gallaudet University innovation in education</a></h4>
                                <ul className="flex ">
                                    <li className="mr-2 text-gray-500 text-base border-r-2 pr-3">Mar 15,2022</li>
                                    <li className=" text-gray-500 text-base">300k Views</li>
                                </ul>
                            </div>
                        </div>
                </div>

                <div className="recent-post-section border rounded-lg w-[400px] h-auto p-8 mb-10">
                        <h3 className="text-lg font-semibold text-[#27272E] ">Recent Viewed Products</h3>
                        <div className="image-section flex items-center border-b-2 py-5 group ">
                            <div className="image mr-5 overflow-hidden rounded-lg">
                                <img src={Tshirt} className=" rounded-lg w-[120px] group-hover:scale-110 duration-300" alt="" />
                            </div>
                            <div className="content">
                            <h4 className="text-#292930 font-semibold mb-1"><a href="#" className="hover:text-blue-500 duration-300 text-lg" >Men's Fashion Tshirt</a></h4>
                                <ul className="flex ">
                                    <del className=" text-gray-300 font-semibold text-lg  pr-3">$30</del>
                                    <li className="  text-black text-lg font-semibold">$20</li>
                                </ul>
                            </div>
                        </div>
                         <div className="image-section flex items-center border-b-2 py-5 group ">
                            <div className="image mr-5 overflow-hidden rounded-lg">
                                <img src={WhiteShoes} className=" rounded-lg w-[120px] group-hover:scale-110 duration-300" alt="" />
                            </div>
                            <div className="content">
                                <h4 className="text-#292930 font-semibold mb-1"><a href="#" className="hover:text-blue-500 duration-300 text-lg" >Nike Shoes</a></h4>
                                <ul className="flex ">
                                    <del className=" text-gray-300 font-semibold text-lg  pr-3">$200</del>
                                    <li className="  text-black text-lg font-semibold">$150</li>
                                </ul>
                            </div>
                        </div>
                         <div className="image-section flex items-center  pt-5 group ">
                            <div className="image mr-5 overflow-hidden rounded-lg">
                                <img src={Blackshoes} className=" rounded-lg w-[120px] group-hover:scale-110 duration-300" alt="" />
                            </div>
                            <div className="content">
                                <h4 className="text-#292930 font-semibold  text-lg mb-1"><a href="#" className="hover:text-blue-500 duration-300" >Adidas Shoes</a></h4>
                                <ul className="flex ">
                                    <del className=" text-gray-300 font-semibold text-lg  pr-3">$300</del>
                                    <li className=" text-black text-lg font-semibold">$200</li>
                                </ul>
                            </div>
                        </div>
                </div>

                <div className="recent-post-section border rounded-lg w-[400px] h-auto p-8 mb-10">
                        <h3 className="text-lg font-semibold text-[#27272E] mb-6 ">Search</h3>
                        <div className="relative">
                        <input type="search" placeholder="Search" className=" relative  py-3 pr-24 font-sans pl-12 bg-[#f0f2f5] placeholder:text-[#676768] rounded-md"></input>
                        <i class="fa-solid fa-magnifying-glass absolute left-5 text-gray-500 top-4"></i>
                        </div>     
                </div>

                <div className="Archives-list-section border rounded-lg w-[400px] h-auto p-8 mb-10">
                        <h3 className="text-lg font-semibold text-[#27272E] mb-6 ">Archives List </h3>
                    
                        <ul className="list-disc marker:text-gray-300 marker:duration-300 pl-3 ">
                            <li className="leading-8 text-gray-500 text-base marker:hover:text-blue-700 hover:text-black duration-300">January 2020</li>
                            <li className="leading-8 text-gray-500 marker:hover:text-blue-700 hover:text-black duration-300">February 2020</li>
                            <li className="leading-8 text-gray-500 marker:hover:text-blue-700 hover:text-black duration-300">March 2020</li>
                            <li className="leading-8 text-gray-500 marker:hover:text-blue-700 hover:text-black duration-300">April 2020</li>
                        </ul>   
                
                </div>

                <div className="Archives-list-section border rounded-lg w-[400px] h-auto p-8 mb-10">
                        <h3 className="text-lg font-semibold text-[#27272E] mb-6 ">Archives List </h3>
                    
                        <select className="border rounded-md bg-white py-3 pl-6 pr-48 text-gray-600">
                            <option className="bg-gray-300  visited:bg-gray-200">Select Month</option>
                            <option>April 2020 (4)</option>
                            <option>May 2020 (4)</option>
                            <option>June 2020 (4)</option>
                            <option>July 2020 (4)</option>
                        </select>
                
                </div>

                <div className="Tags-section border rounded-lg w-[400px] h-auto p-8 mb-10">
                        <h3 className="text-lg font-semibold text-[#27272E] mb-6 ">Tags </h3>
                    
                        <div className="buttons flex mb-2">
                            <a href="#" className="border-2 border-gray-200 px-5 py-1 rounded-full mr-2 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-500">Design</a>
                            <a href="#" className="border-2 px-4 py-1 rounded-full mx-2 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-500">HTML</a>
                            <a href="#" className="border-2 px-4 py-1 rounded-full mx-2 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-500">Graphic</a>
                        </div>
                        <div className="buttons flex mb-2">
                            <a href="#" className="border-2 border-gray-200 px-4 py-1 rounded-full mr-2 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-500">Development</a>
                            <a href="#" className="border-2 px-4 py-1 rounded-full mx-2 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-500">Ui/Ux Design</a>
                           
                        </div>
                        <div className="buttons flex">
                            <a href="#" className="border-2 border-gray-200 px-5 py-1 rounded-full mr-2 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-500">eCommerce</a>
                            <a href="#" className="border-2 px-4 py-1 rounded-full mx-2 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-500">CSS</a>
                            <a href="#" className="border-2 px-4 py-1 rounded-full mx-2 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-500">Js</a>
                        </div>
                </div>
            </div>
            </div>





            {/* <div className="content-section px-20 bg-orange-100 w-[650px] h-[350px]">
        <h4 className="text-pink-500 font-bold text-sm"><i class="fa-solid fa-fire-flame-curved text-white bg-pink-500 w-7 leading-6 rounded-full h-7 text-center"></i> Hot Deal In This Week</h4>
        <h1 className="text-6xl font-bold mb-20">Roco Wireless<br></br> Headphone</h1>
        <div className="button-image flex items-center ">
            <div className="button  mx-2 ">
            <a href="#" className="px-10 py-5 z-10 bg-white  font-semibold rounded-md relative before:absolute before:contetn-[''] before:px-10 before:py-5 before:bg-white before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-md before:-z-10 before:hover:scale-110 before:duration-300"><i class="fa-solid fa-cart-shopping"></i> Shop Now</a>
            </div>
            <div className="img-star flex justify-between items-center">
                <div className="images mx-3">
                    <ul className="flex">
                        <li className=" inline-block border-2 rounded-full border-white"><img src={Author1} alt="" /></li>
                        <li className=" inline-block -ml-4 border-2 rounded-full border-white"><img src={Author2} alt="" /></li>
                        <li className=" inline-block -ml-4 border-2 rounded-full border-white"><img src={Author3} alt="" /></li>
                        <li className=" inline-block -ml-4 border-2 rounded-full border-white" ><img src={Author4} alt="" /></li>
                    </ul>
                </div>
                <div className="star text-left">
                    <ul className="flex justify-center">
                        <li><i class="fa-solid fa-star text-xs text-[#ffa800] mx-0.5"></i></li>
                        <li><i class="fa-solid fa-star text-xs text-[#ffa800] mx-0.5"></i></li>
                        <li><i class="fa-solid fa-star text-xs text-[#ffa800] mx-0.5"></i></li>
                        <li><i class="fa-solid fa-star text-xs text-[#ffa800] mx-0.5"></i></li>
                        <li><i class="fa-solid fa-star-half-stroke text-xs text-[#ffa800] mx-0.5"></i></li>
                    </ul> 
                    <span className="text-xs font-semibold">100+<span className="ml-1 font-semibold">Reviews</span></span>
                </div>
            </div>
        </div>
        </div> */}


            <Newletter/>
    <Footer/>
            {/* <div className="headphone w-[500px] relative">
            <img src={Headphone} alt="" />
            <div className="music-signal">
                <div className="item-circle circle-1"></div>
                <div className="item-circle circle-2"></div>
                <div className="item-circle circle-3"></div>
                <div className="item-circle circle-4"></div>
                <div className="item-circle circle-5"></div>
            </div>
        </div> */}
        </>
    )
}
export default Bloglist;