import React, { useState } from 'react';
import { FaRegHeart, FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsEye, BsEyeFill } from "react-icons/bs";

const Card = ({ discount, likeIcon, seenIcon, image, name, currentPrice, cancelledPrice, sellerLikeIcon, isFullStars, value, seller }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isSeen, setIsSeen] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    const handleSeenClick = () => {
        setIsSeen(!isSeen);
    };

    return (
        <div className='flex flex-col gap-4 cursor-pointer min-w-[20rem]'>
            <div className='bg-[#F5F5F5] justify-center items-center relative group'>
                {discount && <div className='rounded bg-[#DB4444] p-2 px-4 text-white absolute left-4 top-4'>{discount}</div>}
                <div className='absolute right-6 top-6 flex flex-col gap-5'>
                    {likeIcon && <div onClick={handleLikeClick}>{isLiked ? <FaHeart size={25} color='#DB4444' /> : <FaRegHeart size={25} />}</div>}
                    {sellerLikeIcon && <div className='p-2 rounded-full bg-white' onClick={handleLikeClick}>{isLiked ? <FaHeart size={25} color='#DB4444' /> : <FaRegHeart size={25} />}</div>}
                    {seenIcon && <div onClick={handleSeenClick}>{isSeen ? <BsEyeFill size={25} color='#DB4444' /> : <BsEye size={25} />}</div>}
                </div>
                <div className='px-[4rem] pt-[4rem] pb-[1.5rem]'>
                    <img src={image} alt="" width={200} className='group-hover:scale-90 transform transition-transform duration-300' />
                </div>
                <div className='bg-black w-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <p className='text-white py-4'>Add To Cart</p>
                </div>
            </div>

            {seller ?
                <div className='flex flex-col gap-2 text-start'>
                    <section className='flex flex-row justify-between items-center'>
                        <p className='sm:text-[23px] text-[20px] font-medium'>{name}</p>
                        <section className='flex flex-row gap-3 items-center'>
                            <FaStar size={20} color='#FFAD33' />
                            <p className='text-[#474747] font-medium text-[20px]'>4.8</p>
                        </section>
                    </section>
                    <section><p className='text-[#DB4444] font-medium text-[20px]'>$120</p></section>
                </div> :
                <div className='flex flex-col gap-2 text-start'>
                    <p className='sm:text-[23px] text-[20px] font-medium'>{name}</p>
                    <section className='flex flex-row gap-10'>
                        <p className='text-[#DB4444] font-medium text-[20px]'>{currentPrice}</p>
                        <p className='text-[#7D8184] font-medium through-text text-[20px]'>{cancelledPrice}</p>
                    </section>
                    <section className='flex gap-10'>
                        {isFullStars
                            ? <div className='flex'>
                                <FaStar size={20} color='#FFAD33' />
                                <FaStar size={20} color='#FFAD33' />
                                <FaStar size={20} color='#FFAD33' />
                                <FaStar size={20} color='#FFAD33' />
                                <FaStar size={20} color='#FFAD33' />
                            </div>
                            : <div className='flex'>
                                <FaStar size={20} color='#FFAD33' />
                                <FaStar size={20} color='#FFAD33' />
                                <FaStar size={20} color='#FFAD33' />
                                <FaStar size={20} color='#FFAD33' />
                                <FaStarHalfAlt size={20} color='#FFAD33' />
                            </div>
                        }
                        <p className='text-[#474747] font-medium text-[20px]'>{value}</p>
                    </section>
                </div>
            }
        </div>
    );
};

export default Card;
