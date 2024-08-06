import React from 'react'
import svg from '../../assets/icons/Rectangle 18.svg'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Subscribe = () => {
    return (
        <div className='container poppins flex flex-col gap-4'>
            <div className='w-full flex flex-row gap-4 justify-start items-center'>
                <img src={svg} alt="svg" />
                <p className='text-[#DB4444] text-lg font-medium flex flex-row items-center gap-2'>Subscribe</p>
            </div>
            <div className='w-full flex flow-row items-center justify-between'>
                <h4 className='text-[#474747] text-3xl font-semibold leading-[48px] tracking-wide'>Subscribe to our website</h4>
            </div>
            <div className='bg-subscribe bg-cover w-full flex-1'>
               <div className='bg-[#DB4444] h-full w-[48%] flex flex-col p-[5rem] gap-10'>
                <p className='text-white text-2xl nunito-sans'>Subscribe to our website to be <br /> notified when products arrive</p>
                <form action="" className='flex flex-col gap-3'>
                    <input type="email" placeholder='Enter your Email address' className='px-6 py-4 border-2 border-gray-200 rounded-lg bg-transparent outline-none focus:outline-none placeholder:text-white text-white'/>
                    <button type='submit' className='bg-white px-5 py-4 text-[#DB4444] text-lg rounded-lg self-end'>Subscribe</button>
                </form>
              </div> 
            </div>
        </div>
    )
}

export default Subscribe