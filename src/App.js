import Hero from './components/shared/Hero';
import Navbar from './components/shared/Navbar';
import img from './assets/images/Vector.png'
import Support from './components/shared/Support';
import FlashSales from './components/shared/FlashSales';
import Benefits from './components/shared/Benefits';
import Sellers from './components/shared/Sellers';
import Category from './components/shared/Category';
import Tesimonials from './components/shared/Tesimonials';

export default function App() {
  return (
    <div className="flex flex-col gap-16">
        <div className='relative flex flex-col gap-16'>
        <Navbar />
        <Hero />
        <div className='absolute right-0 top-0 -z-10 max-md:hidden'>
          <img src={img} alt='img'/>
        </div>
        </div>
        <Support/>
        <div><hr className='max-w-[1470px] mx-auto' /></div>
        <FlashSales/>
        <div><hr className='max-w-[1470px] mx-auto' /></div>
        <Benefits/>
        <div><hr className='max-w-[1470px] mx-auto' /></div>
        <Sellers/>
        <div><hr className='max-w-[1470px] mx-auto' /></div>
        <Category/>
        <div><hr className='max-w-[1470px] mx-auto' /></div>
        <Tesimonials/>
    </div>
  );
}
