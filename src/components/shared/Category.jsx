import React, { useEffect, useRef, useState } from 'react';
import svg from '../../assets/icons/Rectangle 18.svg';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import svg1 from '../../assets/icons/Chair.svg';
import svg2 from '../../assets/icons/Toilet.svg';
import svg3 from '../../assets/icons/Group 1000005976.svg';
import { Progress } from '../ui/progress';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: 1, name: 'Furniture', icon: svg1 },
    { id: 2, name: 'Toilets', icon: svg2 },
    { id: 3, name: 'Shower', icon: svg3 },
    { id: 4, name: 'Furniture', icon: svg1 },
    { id: 5, name: 'Toilets', icon: svg2 },
    { id: 6, name: 'Shower', icon: svg3 }
  ];

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

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className='container poppins flex flex-col gap-4'>
      <div className='w-full flex flex-row gap-4 justify-start items-center'>
        <img src={svg} alt="svg" />
        <p className='text-[#DB4444] text-lg font-medium flex flex-row items-center gap-2'>Categories</p>
      </div>
      <div className='w-full flex flow-row items-center justify-between'>
        <h4 className='text-[#474747] sm:text-3xl text-2xl font-semibold leading-[48px] tracking-wide'>Browse By Category</h4>
        <div className='flex flow-row items-center gap-5'>
          <div className='p-3 bg-[#F5F5F5] rounded-full cursor-pointer' onClick={scrollLeft}>
            <FaArrowLeft size={25} />
          </div>
          <div className='p-3 bg-[#F5F5F5] rounded-full cursor-pointer' onClick={scrollRight}>
            <FaArrowRight size={25} />
          </div>
        </div>
      </div>
      <div ref={scrollContainerRef} className='flex flex-row hide-scrollbar container overflow-x-scroll gap-7 px-0 mt-[3rem] categories'>
        {categories.map(category => (
          <div
            key={category.id}
            className={`flex flex-col gap-4 justify-center items-center p-3 px-16 rounded border-2 category cursor-pointer ${
              selectedCategory === category.id ? 'bg-[#DB4444] text-white border-[#DB4444]' : 'border-gray-300'
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <img src={category.icon} alt={category.name} />
            {category.name}
          </div>
        ))}
      </div>
      <div className='mt-10 flex justify-center'>
      </div>
    </div>
  );
};

export default Category;
