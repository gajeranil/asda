import React from "react";
import Shopwithslidebar from "../Shop/Shopwithslidebar";
import Newletter from "../Home/Newletter";
import Footer from "../Home/Footer";
import '../Blog/Bloglist.css'
import Latestpost from '../../assets/latest-post.png'
import Latestpost2 from '../../assets/latest-post2.png'
import Latestpost3 from '../../assets/latest-post3.png'
import Tshirt from '../../assets/asset 8.jpeg'
import WhiteShoes from '../../assets/asset 9.jpeg'
import Blackshoes from '../../assets/asset 13.jpeg'
import Digital from '../../assets/digital-art.jpg'
import Photography from '../../assets/photography.jpg'
import Music from '../../assets/music.jpg'
import Sports from '../../assets/sports.jpg'
import Virtualstudio from '../../assets/virtual-studio.jpg'


const Bloggrid = () => {
    return (
        <>
            <Shopwithslidebar />
            
                <div className="right-section  inline-block h-[100%] mx-24 pb-[900px]">
                    <div className="image-section flex">
                        <div className="digital-art-section border border-gray-100 p-5 rounded-md mr-9 mb-7">
                            <div className="thumbnail-section w-[300px] rounded-md overflow-hidden mb-6 relative">
                                <img src={Digital} className="rounded-md hover:scale-110 duration-500" alt="" />
                                <a href="#" className="absolute bottom-3 right-4 px-2 rounded-md py-1 border text-white text-sm border-white bg-gray-400 font-semibold">Digital Art's</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="text-xl text-gray-800  font-semibold hover:text-blue-600 duration-500">Keeping yourself safe when<br></br> buying NFTs on Trade</a>
                            </div>
                            <a href="#" className="font-semibold relative before:absolute before:content-[''] before:w-[0] before:h-[1px] before:bg-blue-600 before:-bottom-1 before:right-0 before:hover:left-0 before:hover:w-[106px] before:duration-300 hover:text-blue-600 duration-300 ">Read More <i class="fa-solid fa-arrow-right-long pl-2 pt-3"></i></a>
                        </div>
                        <div className="photography-section border border-gray-100 p-5 rounded-md mb-7">
                            <div className="thumbnail-section w-[300px] rounded-md overflow-hidden mb-6 relative">
                                <img src={Photography} className="rounded-md hover:scale-110 duration-500" alt="" />
                                <a href="#" className="absolute bottom-3 right-4 px-2 rounded-md py-1 border text-white text-sm border-white bg-gray-400 font-semibold">Photography</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="text-xl text-gray-800  font-semibold hover:text-blue-600 duration-500">Important updates fro listing<br></br> and dilisting your NFTs</a>
                            </div>
                            <a href="#" className="font-semibold relative before:absolute before:content-[''] before:w-[0] before:h-[1px] before:bg-blue-600 before:-bottom-1 before:right-0 before:hover:left-0 before:hover:w-[106px] before:duration-300 hover:text-blue-600 duration-300 ">Read More <i class="fa-solid fa-arrow-right-long pl-2 pt-3"></i></a>
                        </div>
                    </div>
                    <div className="image-section flex">
                        <div className="digital-art-section border border-gray-100 p-5 rounded-md mr-9 mb-7">
                            <div className="thumbnail-section w-[300px] rounded-md overflow-hidden mb-6 relative">
                                <img src={Music} className="rounded-md hover:scale-110 duration-500" alt="" />
                                <a href="#" className="absolute bottom-3 right-4 px-2 rounded-md py-1 border text-white text-sm border-white bg-gray-400 font-semibold">Music</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="text-xl text-gray-800  font-semibold hover:text-blue-600 duration-500">Keeping yourself safe when<br></br> buying NFTs on Trade</a>
                            </div>
                            <a href="#" className="font-semibold relative before:absolute before:content-[''] before:w-[0] before:h-[1px] before:bg-blue-600 before:-bottom-1 before:right-0 before:hover:left-0 before:hover:w-[106px] before:duration-300 hover:text-blue-600 duration-300 ">Read More <i class="fa-solid fa-arrow-right-long pl-2 pt-3"></i></a>
                        </div>
                        <div className="photography-section border border-gray-100 p-5 rounded-md mb-7  ">
                            <div className="thumbnail-section w-[300px] rounded-md overflow-hidden mb-6 relative">
                                <img src={Sports} className="rounded-md hover:scale-110 duration-500" alt="" />
                                <a href="#" className="absolute bottom-3 right-4 px-2 rounded-md py-1 border text-white text-sm border-white bg-gray-400 font-semibold">Sports</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="text-xl text-gray-800  font-semibold hover:text-blue-600 duration-500">Important updates fro listing<br></br> and dilisting your NFTs</a>
                            </div>
                            <a href="#" className="font-semibold relative before:absolute before:content-[''] before:w-[0] before:h-[1px] before:bg-blue-600 before:-bottom-1 before:right-0 before:hover:left-0 before:hover:w-[106px] before:duration-300 hover:text-blue-600 duration-300 ">Read More <i class="fa-solid fa-arrow-right-long pl-2 pt-3"></i></a>
                        </div>
                    </div>

                    <div className="image-section flex">
                        <div className="digital-art-section border border-gray-100 p-5 rounded-md mr-9 mb-7">
                            <div className="thumbnail-section w-[300px] rounded-md overflow-hidden mb-6 relative">
                                <img src={Virtualstudio} className="rounded-md hover:scale-110 duration-500" alt="" />
                                <a href="#" className="absolute bottom-3 right-4 px-2 rounded-md py-1 border text-white text-sm border-white bg-gray-400 font-semibold">Virtual Studio</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="text-xl text-gray-800  font-semibold hover:text-blue-600 duration-500">Keeping yourself safe when<br></br> buying NFTs on Trade</a>
                            </div>
                            <a href="#" className="font-semibold relative before:absolute before:content-[''] before:w-[0] before:h-[1px] before:bg-blue-600 before:-bottom-1 before:right-0 before:hover:left-0 before:hover:w-[106px] before:duration-300 hover:text-blue-600 duration-300 ">Read More <i class="fa-solid fa-arrow-right-long pl-2 pt-3"></i></a>
                        </div>
                        <div className="photography-section border border-gray-100 p-5 rounded-md mb-7  ">
                            <div className="thumbnail-section w-[300px] rounded-md overflow-hidden mb-6 relative">
                                <img src={Music} className="rounded-md hover:scale-110 duration-500" alt="" />
                                <a href="#" className="absolute bottom-3 right-4 px-2 rounded-md py-1 border text-white text-sm border-white bg-gray-400 font-semibold">Utility</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="text-xl text-gray-800  font-semibold hover:text-blue-600 duration-500">Important updates fro listing<br></br> and dilisting your NFTs</a>
                            </div>
                            <a href="#" className="font-semibold relative before:absolute before:content-[''] before:w-[0] before:h-[1px] before:bg-blue-600 before:-bottom-1 before:right-0 before:hover:left-0 before:hover:w-[106px] before:duration-300 hover:text-blue-600 duration-300 ">Read More <i class="fa-solid fa-arrow-right-long pl-2 pt-3"></i></a>
                        </div>
                    </div>

                    <div className="image-section flex">
                        <div className="digital-art-section border border-gray-100 p-5 rounded-md mr-9 mb-7">
                            <div className="thumbnail-section w-[300px] rounded-md overflow-hidden mb-6 relative">
                                <img src={Digital} className="rounded-md hover:scale-110 duration-500" alt="" />
                                <a href="#" className="absolute bottom-3 right-4 px-2 rounded-md py-1 border text-white text-sm border-white bg-gray-400 font-semibold">Sketch</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="text-xl text-gray-800  font-semibold hover:text-blue-600 duration-500">Keeping yourself safe when<br></br> buying NFTs on Trade</a>
                            </div>
                            <a href="#" className="font-semibold relative before:absolute before:content-[''] before:w-[0] before:h-[1px] before:bg-blue-600 before:-bottom-1 before:right-0 before:hover:left-0 before:hover:w-[106px] before:duration-300 hover:text-blue-600 duration-300 ">Read More <i class="fa-solid fa-arrow-right-long pl-2 pt-3"></i></a>
                        </div>
                        <div className="photography-section border border-gray-100 p-5 rounded-md mb-7  ">
                            <div className="thumbnail-section w-[300px] rounded-md overflow-hidden mb-6 relative">
                                <img src={Digital} className="rounded-md hover:scale-110 duration-500" alt="" />
                                <a href="#" className="absolute bottom-3 right-4 px-2 rounded-md py-1 border text-white text-sm border-white bg-gray-400 font-semibold">Digital Art's</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="text-xl text-gray-800  font-semibold hover:text-blue-600 duration-500">Important updates fro listing<br></br> and dilisting your NFTs</a>
                            </div>
                            <a href="#" className="font-semibold relative before:absolute before:content-[''] before:w-[0] before:h-[1px] before:bg-blue-600 before:-bottom-1 before:right-0 before:hover:left-0 before:hover:w-[106px] before:duration-300 hover:text-blue-600 duration-300 ">Read More <i class="fa-solid fa-arrow-right-long pl-2 pt-3"></i></a>
                        </div>
                    </div>

                    <div className="image-section flex">
                        <div className="digital-art-section border border-gray-100 p-5 rounded-md mr-9 mb-7">
                            <div className="thumbnail-section w-[300px] rounded-md overflow-hidden mb-6 relative">
                                <img src={Digital} className="rounded-md hover:scale-110 duration-500" alt="" />
                                <a href="#" className="absolute bottom-3 right-4 px-2 rounded-md py-1 border text-white text-sm border-white bg-gray-400 font-semibold">Digital Art's</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="text-xl text-gray-800  font-semibold hover:text-blue-600 duration-500">Keeping yourself safe when<br></br> buying NFTs on Trade</a>
                            </div>
                            <a href="#" className="font-semibold relative before:absolute before:content-[''] before:w-[0] before:h-[1px] before:bg-blue-600 before:-bottom-1 before:right-0 before:hover:left-0 before:hover:w-[106px] before:duration-300 hover:text-blue-600 duration-300 ">Read More <i class="fa-solid fa-arrow-right-long pl-2 pt-3"></i></a>
                        </div>
                        <div className="photography-section border border-gray-100 p-5 rounded-md mb-7  ">
                            <div className="thumbnail-section w-[300px] rounded-md overflow-hidden mb-6 relative">
                                <img src={Photography} className="rounded-md hover:scale-110 duration-500" alt="" />
                                <a href="#" className="absolute bottom-3 right-4 px-2 rounded-md py-1 border text-white text-sm border-white bg-gray-400 font-semibold">Photography</a>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="text-xl text-gray-800  font-semibold hover:text-blue-600 duration-500">Important updates fro listing<br></br> and dilisting your NFTs</a>
                            </div>
                            <a href="#" className="font-semibold relative before:absolute before:content-[''] before:w-[0] before:h-[1px] before:bg-blue-600 before:-bottom-1 before:right-0 before:hover:left-0 before:hover:w-[106px] before:duration-300 hover:text-blue-600 duration-300 ">Read More <i class="fa-solid fa-arrow-right-long pl-2 pt-3"></i></a>
                        </div>
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
                <div className="left-section max-w-7xl inline-block sticky h-[100%] top-0 pb-[900px]">
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

        
            <Newletter />
            <Footer />
        
        </>
    )
}
export default Bloggrid;