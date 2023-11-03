import React from 'react'
import Newsletter from '../../assets/asset 47(1).jpeg'
import Newslettericon from '../../assets/asset 39.png'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Newletter = () => {
  return (
    <div>
       <div className='Newsletter mx-24 w-[1130px] h-auto rounded-lg mb-8 relative'>
                <img src={Newsletter} className='rounded-lg' alt="" />
                <div className='newaletter-content absolute top-24 left-32'>
                    <div className='newsletter flex mb-3'>
                        <FontAwesomeIcon icon={faEnvelopeOpen} className='text-white bg-blue-500 p-2 rounded-full mr-3 ' /> <h1 className='text-blue-500 mt-1 font-semibold'>Newsletter</h1>
                    </div>
                    <h1 className='text-4xl font-sans font-bold mb-8 text-gray-800'>Get weekly update</h1>

                    <div className='flex  '>
                        <input type='text' className='relative w-96 px-14 py-4 rounded-md text-gray-800 mx-2' placeholder=' example@gmail.com'>
                        </input>
                        <img src={Newslettericon} className='absolute email-icon top-32 left-7 mt-1 ' alt="" />
                        <div className='relative group z-10'>
                        <a href='#' className='py-4 px-8 leading-[50px] bg-[#292930] text-white rounded-md before:content-[""] before:-z-10 before:absolute before:w-[126px] before:h-[50px] before:rounded-md before:scale-0 before:group-hover:scale-125 before:bg-[#292930] before:duration-300 before:left-1 before:right-0 before:bottom-0 before:top-0 before'>Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Newletter
