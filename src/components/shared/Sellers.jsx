import React from 'react'
import svg from '../../assets/icons/Rectangle 18.svg'
import Card from './Card'
import { Button } from '../ui/button'

const Sellers = () => {
    return (
        <div className='container poppins flex flex-col gap-4'>
            <div className='w-full flex flex-row gap-4 justify-start items-center'>
                <img src={svg} alt="svg" />
                <p className='text-[#DB4444] text-lg font-medium flex flex-row items-center gap-2'>Best Seller</p>
            </div>
            <div className='w-full flex flow-row items-center justify-between'>
                <h4 className='text-[#474747] text-3xl font-semibold leading-[48px] tracking-wide'>Our Best Seller Products</h4>
                <Button className="bg-[#DB4444] text-white py-3 px-6 rounded">View All</Button>
            </div>
            <div className='flex flex-row gap-12 mt-[3rem]'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Sellers