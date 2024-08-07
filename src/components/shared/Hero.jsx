import React from 'react'
import { Button } from '../ui/button'
import HeroImg from '../../assets/images/image 53.png'
import svg from '../../assets/icons/Rectangle 18.svg'
const Hero = () => {
  return (
    <div className='flex flex-col w-full md:flex-row md:flex-1 md:gap-8 justify-between items-center gap-10 xl:max-w-[1470px] md:max-w-[1570px] md:mx-auto md:pl-12 md:mt-[5rem] max-md:px-10'>
      <div className='flex flex-col gap-8 max-md:text-center nunito-sans lg:w-[40%] md:w-[60%]'>
        <section className='flex flex-row flex-1 gap-2'>
        <h2 className='text-3xl font-extrabold lg:text-[45px] md:text-4xl md:leading-[50px] w-[90%]'>Unite your <span className='text-[#DB4444]'>Shopping:</span> <br /> Diverse Products from <br /> <span className='text-[#DB4444]'>Trusted</span> Companies</h2>
        <img src={svg} alt='img' className='w-[5%]'/>
        </section>
        <div className='flex flex-col gap-4 max-w-[550px]'>
          <p className='text-lg md:text-[20px]'>Our platform ensures a safe and secure shopping experience with 100% buyer protection.</p>
          <p className='text-lg md:text-[20px] md:line-clamp-4'>Lorem ipsum dolor sit amet consectetur. Metus ultrices praesent diam amet. Felis est faucibus vulputate at augue.Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='max-md:hidden'><Button className="bg-[#DB4444] px-10 py-6 text-lg poppins font-bold leading-[24px] hover:bg-red-500">Start Now</Button></div>
      </div>
      <div className='lg:w-[60%] md:w-[40%]'>
        <img src={HeroImg} alt="" className='object-cover'/>
      </div>
      <div className='md:hidden'><Button className="bg-[#DB4444] px-10 py-6 text-lg poppins font-bold leading-[24px] rounded hover:bg-red-500">Start Now</Button></div>
    </div>
  )
}

export default Hero