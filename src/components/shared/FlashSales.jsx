import React from 'react'
import Card from './Card'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const FlashSales = () => {
    return (
        <div className='container poppins flex flex-col justify-center items-center gap-4'>
            <p className='text-[#DB4444] text-lg font-medium flex flex-row items-center gap-2'> <hr className='w-[30px] rounded border-2 border-[#DB4444]' />Latest</p>
            <section className='text-3xl font-semibold leading-[48px] tracking-wide flex flow-row items-center justify-between relative'>
                <h4 className='text-[#474747]'>Flash Sales</h4>
                <div className='flex flow-row items-center gap-5 absolute -right-[350%]'>
                    <div className='p-3 bg-[#F5F5F5] rounded-full'>
                        <FaArrowLeft size={25} />
                    </div>
                    <div className='p-3 bg-[#F5F5F5] rounded-full'>
                        <FaArrowRight size={25} />
                    </div>
                </div>
            </section>
            <div className='flex flex-row gap-12 mt-[3rem]'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <p className='py-5'>TRACKER</p>
        </div>
    )
}

export default FlashSales