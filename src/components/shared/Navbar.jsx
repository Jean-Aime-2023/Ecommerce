import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { Button } from '../ui/button';
import MobileNav from './MobileNav';

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState()
    const toggleSidebar = () => {
        setOpenSidebar(openSidebar)
    }
    return (
        <div className='flex flex-row items-center w-screen py-8 justify-between container'>
            <h1 className='text-xl font-bold leading-[24px] text-[#474747] inter cursor-pointer'>Kigali Ceramics</h1>
            {/* <div className='cursor-pointer md:hidden' onClick={() => toggleSidebar()}><CiMenuBurger color='#0D111E' size={25} /> </div> */}
            <div className='flex flex-row items-center justify-between nunito-sans max-md:hidden'>
                <ul className='flex flex-row justify-between items-center gap-8'>
                    <li className='text-lg cursor-pointer'>Home</li>
                    <li className='text-lg cursor-pointer'>Contact</li>
                    <li className='text-lg cursor-pointer'>About</li>
                    <li className='text-lg cursor-pointer'>Sign Up</li>
                </ul>
            </div>
            <div className='poppins flex flow-row items-center justify-between gap-10 max-md:hidden'>
                <li to={'/'} className='list-none cursor-pointer text-white'>Login</li>
                <Button className="rounded-full font-bold px-6 py-4 bg-white text-[#DB4444]">Register</Button>
            </div>
            <MobileNav/>
        </div>
    )
}

export default Navbar