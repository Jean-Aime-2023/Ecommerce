import React from 'react'
import svg from '../../assets/icons/Rectangle 18.svg'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import svg1 from '../../assets/icons/Chair.svg'
import svg2 from '../../assets/icons/Toilet.svg'

const Category = () => {
    return (
        <div className='container poppins flex flex-col gap-4'>
            <div className='w-full flex flex-row gap-4 justify-start items-center'>
                <img src={svg} alt="svg" />
                <p className='text-[#DB4444] text-lg font-medium flex flex-row items-center gap-2'>Best Seller</p>
            </div>
            <div className='w-full flex flow-row items-center justify-between'>
                <h4 className='text-[#474747] text-3xl font-semibold leading-[48px] tracking-wide'>Our Best Seller Products</h4>
                <div className='flex flow-row items-center gap-5'>
                    <div className='p-3 bg-[#F5F5F5] rounded-full'>
                        <FaArrowLeft size={25} />
                    </div>
                    <div className='p-3 bg-[#F5F5F5] rounded-full'>
                        <FaArrowRight size={25} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between mt-[3rem]'>
               <div className='flex flex-col gap-4 justify-center items-center p-3 px-16 rounded border-2 border-gray-300'>
                 <img src={svg1} alt="" />
                 Furniture 
               </div> 
               <div className='flex flex-col gap-4 justify-center items-center p-3 px-16 rounded border-2 border-gray-300'>
                 <img src={svg1} alt="" />
                 Furniture 
               </div> 
               <div className='flex flex-col gap-4 justify-center items-center p-3 px-16 rounded border-2 border-gray-300'>
                 <img src={svg1} alt="" />
                 Furniture 
               </div> 
               <div className='flex flex-col gap-4 justify-center items-center p-3 px-16 rounded border-2 border-gray-300'>
                 <img src={svg1} alt="" />
                 Furniture 
               </div> 
               <div className='flex flex-col gap-4 justify-center items-center p-3 px-16 rounded border-2 border-gray-300'>
                 <img src={svg1} alt="" />
                 Furniture 
               </div> 
               <div className='flex flex-col gap-4 justify-center items-center p-3 px-16 rounded border-2 border-gray-300'>
                 <img src={svg1} alt="" />
                 Furniture 
               </div> 
            </div>
        </div>
    )
}

export default Category