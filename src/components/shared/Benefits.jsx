import React from 'react'
import svg from '../../assets/icons/Rectangle 18.svg'
import ic1 from '../../assets/icons/Icon-Customer service.svg'
import ic2 from '../../assets/icons/Icon-secure.svg'
import ic3 from '../../assets/icons/icon-delivery.svg'

const Benefits = () => {
    return (
        <div className='container poppins flex flex-col gap-4'>
            <div className='w-full flex flex-row gap-4 justify-start items-center'>
                <img src={svg} alt="svg" />
                <p className='text-[#DB4444] text-lg font-medium flex flex-row items-center gap-2'>Benefits</p>
            </div>
            <div>
                <h4 className='text-[#474747] sm:text-3xl text-2xl font-semibold leading-[48px] tracking-wide'>Exclusive Benefits of Kigali Ceramics</h4>
            </div>
            <div className='flex flow-row justify-between flex-wrap mt-10 gap-8 max-sm:justify-center'>
                <div className='flex flex-col gap-4 items-start max-sm:items-center max-sm:text-center'>
                  <div className='p-6 shadow rounded-full'>
                    <img src={ic3} alt="icon" />
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-bold text-xl'>FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4 items-start max-sm:items-center max-sm:text-center'>
                  <div className='p-6 shadow rounded-full'>
                    <img src={ic1} alt="icon" />
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-bold text-xl'>24/7 CUSTOMER SERVICE</p>
                    <p>Friendly 24/7 customer support</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4 items-start max-sm:items-center max-sm:text-center'>
                  <div className='p-6 shadow rounded-full'>
                    <img src={ic2} alt="icon" />
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-bold text-xl'>SAFE AND SECURE PAYMENTS</p>
                    <p>Payment is safe and track is easy</p>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits