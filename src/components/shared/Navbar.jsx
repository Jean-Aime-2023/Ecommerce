/* eslint-disable no-mixed-operators */
import React from 'react';
import MobileNav from './MobileNav';
import { Link, useLocation } from 'react-router-dom';
import img1 from '../../assets/images/authImg (1).png'
import img2 from '../../assets/images/authImg (2).png'
import img3 from '../../assets/images/mobilebg.png'

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='flex flex-row items-center w-screen py-8 justify-between container relative'>
            {currentPath === '/signin' &&
                <div className='absolute -top-[5rem] -right-[22%] bg-login_bg h-screen bg-cover -z-10 max-lg:hidden'>
                    <img src={img2} alt="" className='relative top-[10rem] right-[15rem]' />
                </div>
            }
            {currentPath === '/signup' &&
                <div className='absolute -top-[5rem] -right-[22%] bg-login_bg h-screen bg-cover -z-10 max-md:hidden'>
                    <img src={img2} alt="" className='relative top-[10rem] right-[5rem]' />
                </div>
            }
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
                <Link to={'/signin'}
                    className={`list-none cursor-pointer ${currentPath === '/' || currentPath === '/home' ? 'text-white' : 'text-black'}`}
                >
                    Login
                </Link>
                <Link to={'/signup'} className={`rounded-full font-bold px-6 py-4 ${currentPath === '/' || currentPath === '/home' ? 'bg-white text-[#DB4444]' : 'bg-[#DB4444] text-white'}`}>
                    Register
                </Link>
            </div>
            <MobileNav />
        </div>
    );
}

export default Navbar;
