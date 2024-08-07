import React from 'react'
import svg from '../../assets/icons/Rectangle 18.svg'

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
            <div className='bg-subscribe md:bg-subscribe_1 bg-cover w-full flex-1'>
                <div className='subscribe-container h-full md:w-[55%] flex flex-col md:p-[3rem] p-[2rem] gap-10'>
                    <p className='text-white text-2xl nunito-sans'>Subscribe to our website to be <br className='max-lg:hidden' /> notified when products arrive</p>
                    <form action="" className='flex flex-col gap-3 lg:max-w-[80%]'>
                        <input type="email" placeholder='Enter your Email address' className='md:px-6 md:py-4 px-5 py-3 border-2 border-gray-200 rounded-lg bg-transparent outline-none focus:outline-none placeholder:text-white text-white' />
                        <button type='submit' className='bg-white md:px-5 md:py-4 px-4 py-3 text-[#DB4444] md:text-lg rounded-lg self-end'>Subscribe</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Subscribe