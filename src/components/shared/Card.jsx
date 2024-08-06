import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import img from '../../assets/images/g92-2-500x500 1.png'

const Card = () => {
    return (
        <div className='flex flex-col gap-4 cursor-pointer'>
            <div className='bg-[#F5F5F5] justify-center items-center relative group'>
                <div className='rounded bg-[#DB4444] p-2 px-4 text-white absolute left-4 top-4'>-35%</div>
                <div className='absolute right-6 top-6 flex flex-col gap-5'>
                    <FaRegHeart size={25} />
                    <BsEye size={25} />
                </div>
                <div className='px-[4rem] pt-[4rem] pb-[1.5rem]'>
                    <img src={img} alt="" width={200} className='group-hover:scale-90 transform transition-transform duration-300' />
                </div>
                <div className='bg-black w-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <p className='text-white py-4'>Add To Cart</p>
                </div>
            </div>


            <div className='flex flex-col gap-2 text-start'>
                <p className='text-[23px] font-medium'>China tiles</p>
                <section className='flex flex-row gap-10'>
                    <p className='text-[#DB4444] font-medium text-[20px]'>$120</p>
                    <p className='text-[#7D8184] font-medium through-text text-[20px]'>$160</p>
                </section>
                <section className='flex gap-10'>
                    <div className='flex'>
                        <FaStar size={20} color='#FFAD33' />
                        <FaStar size={20} color='#FFAD33' />
                        <FaStar size={20} color='#FFAD33' />
                        <FaStar size={20} color='#FFAD33' />
                        <FaStar size={20} color='#FFAD33' />
                    </div>
                    <p className='text-[#474747] font-medium text-[20px]'>(88)</p>
                </section>
            </div>
        </div>
    )
}

export default Card