import React from 'react'

const Footer = () => {
    return (
        <div className='w-screen bg-[#DB4444] text-white poppins'>
            <div className='container flex md:flex-row flex-col gap-10 md:justify-between py-14'>
                <h1 className='text-4xl max-sm:text-3xl font-bold leading-[24px] inter cursor-pointer'>Kigali Ceramics</h1>
                <div className='flex flex-col gap-5'>
                    <h5 className='md:text-xl text-lg font-bold'>QUICK LINKS</h5>
                    <p className='font-extralight text-sm cursor-pointer'>Legacy & Privacy</p>
                    <p className='font-extralight text-sm cursor-pointer'>Contact</p>
                    <p className='font-extralight text-sm cursor-pointer'>Customer Service</p>
                    <p className='font-extralight text-sm cursor-pointer'>My account</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h5 className='md:text-xl text-lg font-bold'>QUICK LINKS</h5>
                    <ul className='flex gap-2 flex-wrap text-sm max-w-[18rem]'>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Fashion</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Clothing</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Chair</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Bag</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Accessories</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Shoes</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Furniture</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Tiles</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Lights</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Water Tapes</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Toilets</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Couches</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Lamps</li>
                        <li className='font-extralight cursor-pointer bg-[#BA2D2D] p-2 rounded max-w-fit'>Watch</li>
                    </ul>


                </div>
                <div className='flex flex-col gap-5'>
                    <h5 className='md:text-xl text-lg font-bold'>HELP AND SUPPORT</h5>
                    <p className='font-extralight text-sm cursor-pointer'>Support</p>
                    <p className='font-extralight text-sm cursor-pointer'>FAQs</p>
                    <p className='font-extralight text-sm cursor-pointer'>Community</p>
                    <p className='font-extralight text-sm cursor-pointer'>Blog</p>
                </div>
            </div>
            <div><hr className='container' /></div>
            <p className='font-extralight text-sm flex justify-center items-center text-center py-10'>© 2024 Kigali Ceramics. All Rights Reserved.</p>
        </div>
    )
}

export default Footer