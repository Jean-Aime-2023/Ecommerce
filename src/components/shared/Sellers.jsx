import React from 'react';
import svg from '../../assets/icons/Rectangle 18.svg';
import Card from './Card';
import { Link } from 'react-router-dom';
import img from '../../assets/images/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'

const Sellers = () => {
    return (
        <div className='container poppins flex flex-col gap-4'>
            <div className='w-full flex flex-row gap-4 justify-start items-center'>
                <img src={svg} alt="svg" />
                <p className='text-[#DB4444] text-lg font-medium flex flex-row items-center gap-2'>Best Seller</p>
            </div>
            <div className='w-full flex flow-row items-center justify-between'>
                <h4 className='text-[#474747] sm:text-3xl text-2xl font-semibold leading-[48px] tracking-wide'>Our Best Seller Products</h4>
                <Link to='/products' className='sm:bg-[#DB4444] sm:text-white py-3 px-6 rounded w-fit text-gray-500 max-sm:underline max-sm:underline-offset-2'>View All</Link>
            </div>
            <div className='flex flex-row hide-scrollbar container overflow-x-scroll gap-10 mt-[3rem] px-0'>
                <Card 
                  discount={false}
                  sellerLikeIcon={true}
                  seenIcon={false}
                  image={img}
                  name={'Luxury lights'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={true}
                  isFullStars={true}
                  value={false}
                />
                <Card 
                  discount={false}
                  sellerLikeIcon={true}
                  seenIcon={false}
                  image={img}
                  name={'Luxury lights'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={true}
                  isFullStars={true}
                  value={false}
                />
                <Card 
                  discount={false}
                  sellerLikeIcon={true}
                  seenIcon={false}
                  image={img}
                  name={'Luxury lights'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={true}
                  isFullStars={true}
                  value={false}
                />
                <Card 
                  discount={false}
                  sellerLikeIcon={true}
                  seenIcon={false}
                  image={img}
                  name={'Luxury lights'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={true}
                  isFullStars={true}
                  value={false}
                />
            </div>
        </div>
    );
}

export default Sellers;
