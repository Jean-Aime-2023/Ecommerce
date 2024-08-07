import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from "react-icons/fa";

const TestimonialsCard = () => {
  return (
    <div className='flex flex-col gap-5 min-w-fit shadow-2xl md:p-16 p-10 rounded-xl max-md:max-w-[100px]'>
        <div className='flex flex-row gap-5 items-center'>
            <div><img width={80} height={80} className='rounded-full' src="https://toppng.com/uploads/preview/angry-person-png-free-image-angry-kid-png-transparent-115629678417zic9bd9z6.png" alt="img" /></div>
            <div>
                <p className='font-bold text-xl'>John Doe</p>
                <p className='text-[#787878] text-lg'>USA</p>
                <section className='flex flex-row items-center gap-3'>
                    <div className='flex'>
                        <FaStar size={20} color='#FFAD33' />
                        <FaStar size={20} color='#FFAD33' />
                        <FaStar size={20} color='#FFAD33' />
                        <FaStarHalfAlt size={20} color='#FFAD33' />
                    </div>
                    <p className='text-[#474747] text-lg'>4.8</p>
                </section>
            </div>
        </div>
        <p className='line-clamp-4 max-w-[600px]'>Lorem ipsum dolor sit amet consectetur. Metus ultrices praesent diam amet. Felis est faucibus vulputate at augue. Felis elit aliquet gravida est sit. Auctor quis viverra magna quam. Eget fusce feugiat scelerisque sit quis sed nunc eu. Convallis quam rhoncus lectus tristique elit at massa. Ullamcorper ullamcorper feugiat aliquet proin sed libero nunc tellus.</p>
    </div>
  )
} 

export default TestimonialsCard