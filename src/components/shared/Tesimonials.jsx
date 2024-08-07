import React, { useEffect, useRef, useState } from 'react';
import TestimonialsCard from './TestimonialsCard';
import { Progress } from '../ui/progress';

const Testimonials = () => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const scrollLeft = container.scrollLeft;
            const scrollProgress = (scrollLeft / maxScrollLeft) * 100;
            setProgress(scrollProgress);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className='container poppins flex flex-col justify-center items-center gap-4'>
            <p className='text-[#DB4444] text-lg font-medium flex flex-row items-center gap-2'>
                <hr className='w-[30px] rounded border-2 border-[#DB4444]' />Testimonials
            </p>
            <section className='text-3xl font-semibold leading-[48px] tracking-wide flex flow-row items-center justify-between relative'>
                <h4 className='text-[#474747] sm:text-3xl text-2xl font-semibold leading-[48px] tracking-wide'>
                    Our Customer Testimonials
                </h4>
            </section>
            <div
                className='flex flex-row hide-scrollbar container overflow-x-scroll gap-10 px-5 py-20 mt-[3rem]'
                ref={containerRef}
            >
                <TestimonialsCard />
                <TestimonialsCard />
                <TestimonialsCard />
            </div>
            <Progress value={progress} className="h-3 max-w-[50%] mt-10" />
        </div>
    );
};

export default Testimonials;
