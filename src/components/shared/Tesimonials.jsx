import React from 'react'
import Card from './Card'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import TestimonialsCard from './TestimonialsCard';

const Testimonials = () => {
    return (
        <div className='container poppins flex flex-col justify-center items-center gap-4'>
            <p className='text-[#DB4444] text-lg font-medium flex flex-row items-center gap-2'> <hr className='w-[30px] rounded border-2 border-[#DB4444]' />Testimonials</p>
            <section className='text-3xl font-semibold leading-[48px] tracking-wide flex flow-row items-center justify-between relative'>
                <h4 className='text-[#474747]'>Our Customer Testimonials</h4>
            </section>
            <div className='flex flex-row gap-12 mt-[3rem]'>
                <TestimonialsCard/>
                <TestimonialsCard/>
                <TestimonialsCard/>
            </div>

            <p className='py-5'>TRACKER</p>
        </div>
    )
}

export default Testimonials