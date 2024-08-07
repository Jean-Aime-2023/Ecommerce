import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import img from '../../assets/images/g92-2-500x500 1.png'
import { Progress } from '../ui/progress';

const FlashSales = () => {
    const [progress, setProgress] = useState(0);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollContainerRef.current;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const scrollLeft = container.scrollLeft;
            const scrollProgress = (scrollLeft / maxScrollLeft) * 100;
            setProgress(scrollProgress);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className='container poppins flex flex-col justify-center items-center gap-4'>
            <p className='text-[#DB4444] text-lg font-medium flex flex-row items-center gap-2'>
                <hr className='w-[30px] rounded border-2 border-[#DB4444]' />Latest
            </p>

            <h4 className='text-[#474747] sm:text-3xl text-2xl font-semibold leading-[48px] tracking-wide'>Flash Sales</h4>
            <div className='flex flow-row items-center gap-5 justify-end self-end'>
                <div className='p-3 bg-[#F5F5F5] rounded-full cursor-pointer' onClick={scrollLeft}>
                    <FaArrowLeft size={25} />
                </div>
                <div className='p-3 bg-[#F5F5F5] rounded-full cursor-pointer' onClick={scrollRight}>
                    <FaArrowRight size={25} />
                </div>
            </div>

            <div ref={scrollContainerRef} className='flex flex-row hide-scrollbar container overflow-x-scroll gap-10 px-0'>
                <Card 
                  discount={'-40%'}
                  likeIcon={true}
                  sellerLikeIcon={false}
                  seenIcon={true}
                  image={img}
                  name={'Chine titles'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={false}
                  isFullStars={false}
                  value={'88'}
                />
                <Card 
                  discount={'-40%'}
                  likeIcon={true}
                  sellerLikeIcon={false}
                  seenIcon={true}
                  image={img}
                  name={'Chine titles'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={false}
                  isFullStars={false}
                  value={'88'}
                />
                <Card 
                  discount={'-40%'}
                  likeIcon={true}
                  sellerLikeIcon={false}
                  seenIcon={true}
                  image={img}
                  name={'Chine titles'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={false}
                  isFullStars={false}
                  value={'88'}
                />
                <Card 
                  discount={'-40%'}
                  likeIcon={true}
                  sellerLikeIcon={false}
                  seenIcon={true}
                  image={img}
                  name={'Chine titles'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={false}
                  isFullStars={false}
                  value={'88'}
                />
                <Card 
                  discount={'-40%'}
                  likeIcon={true}
                  sellerLikeIcon={false}
                  seenIcon={true}
                  image={img}
                  name={'Chine titles'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={false}
                  isFullStars={false}
                  value={'88'}
                />
                <Card 
                  discount={'-40%'}
                  likeIcon={true}
                  sellerLikeIcon={false}
                  seenIcon={true}
                  image={img}
                  name={'Chine titles'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={false}
                  isFullStars={false}
                  value={'88'}
                />
                <Card 
                  discount={'-40%'}
                  likeIcon={true}
                  sellerLikeIcon={false}
                  seenIcon={true}
                  image={img}
                  name={'Chine titles'}
                  currentPrice={'$120'}
                  cancelledPrice={'$160'}
                  seller={false}
                  isFullStars={false}
                  value={'88'}
                />
            </div>

            <Progress value={progress} className="h-3 max-w-[50%] mt-10" />
        </div>
    );
}

export default FlashSales;
