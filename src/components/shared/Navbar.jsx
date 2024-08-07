import React from 'react';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='flex flex-row items-center w-screen py-8 justify-between container'>
            <h1 className='text-xl font-bold leading-[24px] text-[#474747] inter cursor-pointer'>Kigali Ceramics</h1>
            <div className='flex flex-row items-center justify-between nunito-sans max-md:hidden'>
                <div className='flex flex-row justify-between items-center gap-8'>
                <Link to={'/'} className={`text-lg cursor-pointer ${currentPath === '/' ? 'text-[#DB4444]' : ''}`}>Home</Link>
                    <Link to={'/contact'} className={`text-lg cursor-pointer ${currentPath === '/contact' ? 'text-[#DB4444]' : ''}`}>Contact</Link>
                    <Link to={'/about'} className={`text-lg cursor-pointer ${currentPath === '/about' ? 'text-[#DB4444]' : ''}`}>About</Link>
                    <Link to={'/signup'} className={`text-lg cursor-pointer ${currentPath === '/signup' ? 'text-[#DB4444]' : ''}`}>Sign Up</Link>
                </div>
            </div>
            <div className='poppins flex flow-row items-center justify-between gap-10 max-md:hidden'>
                <li
                    to={'/'}
                    className={`list-none cursor-pointer ${currentPath === '/' || currentPath === '/home' ? 'text-white' : 'text-black'}`}
                >
                    Login
                </li>
                <Button className={`rounded-full font-bold px-6 py-4 ${currentPath === '/' || currentPath === '/home' ? 'bg-white text-[#DB4444]' : 'bg-[#DB4444] text-white'}`}>
                    Register
                </Button>
            </div>
            <MobileNav />
        </div>
    );
}

export default Navbar;
