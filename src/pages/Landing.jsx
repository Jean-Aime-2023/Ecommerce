import React from 'react'
import Hero from '../components/shared/Hero';
import Navbar from '../components/shared/Navbar';
import img from '../assets/images/Vector.png'
import Support from '../components/shared/Support';
import FlashSales from '../components/shared/FlashSales';
import Benefits from '../components/shared/Benefits';
import Sellers from '../components/shared/Sellers';
import Category from '../components/shared/Category';
import Tesimonials from '../components/shared/Tesimonials';
import Subscribe from '../components/shared/Subscribe';
import Footer from '../components/shared/Footer';

const Landing = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className='relative flex flex-col gap-16'>
                <Navbar />
                <Hero />
                <div className='absolute right-0 top-0 -z-10 max-md:hidden'>
                    <img src={img} alt='img' />
                </div>
            </div>
            <Support />
            <div><hr className='container' /></div>
            <FlashSales />
            <div><hr className='container' /></div>
            <Benefits />
            <div><hr className='container' /></div>
            <Sellers />
            <div><hr className='container' /></div>
            <Category />
            <div><hr className='container' /></div>
            <Tesimonials />
            <div><hr className='container' /></div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Landing