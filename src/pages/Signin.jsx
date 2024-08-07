import React from 'react'
import googleLogo from '../assets/images/Google.png'
import { Checkbox } from '../components/ui/checkbox'
import { Link } from 'react-router-dom'
import img3 from '../assets/images/mobilebg.png'

const Signin = () => {
  return (
    <div className='poppins flex flex-col justify-center items-center gap-8 2xl:w-[35%] lg:w-[50%] max-lg:w-full max-lg:container max-md:px-12 max-lg:px-[6rem] px-20 py-10 2xl:ml-[10rem] relative'>
      <h4 className='text-2xl font-semibold leading-[48px]'>Welcome to Kigali Ceramics</h4>
      <section className='flex flex-row w-full justify-center items-center gap-4 border-2 border-[#DB4444] rounded-md py-3 cursor-pointer'>
        <img src={googleLogo} alt="" />
        <p className='text-[#DB4444]'>Sign up with Google</p>
      </section>
      <section className='flex flex-row justify-center items-center gap-3 w-full'>
        <hr className='border w-full border-gray-500' />
        <p>OR</p>
        <hr className='border w-full border-gray-500' />
      </section>
      <form action="" className='flex flex-col w-full gap-5'>
        <section className='flex flex-col w-full gap-3'>
          <label htmlFor="name" className='text-lg max-md:text-base'>Names <span className='text-[#DB4444]'>*</span></label>
          <input type="text" name='name' required className='px-4 py-3 rounded-md border border-gray-500 bg-transparent text-black outline-none focus:outline-none' />
        </section>
        <section className='flex flex-col w-full gap-3'>
          <label htmlFor="email"  className='text-lg max-md:text-base'>Email <span className='text-[#DB4444]'>*</span></label>
          <input type="email" name='email' required className='px-4 py-3 rounded-md border border-gray-500 bg-transparent text-black outline-none focus:outline-none' />
        </section>
        <Link to={'/signup'} className='text-lg text-end max-md:text-base mb-10'>Forgot Password?</Link>
        <button type='submit' className="bg-[#DB4444] text-white py-4 text-lg font-semibold poppins leading-[24px] rounded-md">CONTINUE SHOPPING</button>
      </form>
      <Link to={'/signup'} className='text-lg text-[#DB4444] max-md:text-base'>Don’t have an account?</Link>
      <img src={img3} alt="" className='absolute -z-10 -bottom-20 h-full md:hidden'/>
    </div>
  )
}

export default Signin