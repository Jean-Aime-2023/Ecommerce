import React from 'react'
import img from '../../assets/images/Mask group (1).png'
import img2 from '../../assets/images/Mask group (2).png'
import img3 from '../../assets/images/Mask group (3).png'
import img4 from '../../assets/images/Mask group (4).png'
import img5 from '../../assets/images/Mask group.png'

const Support = () => {
  return (
    <div className='text-center mt-10'>
        <p className='montserrat text-[#CAC9C9]'>Support by:</p>
        <div className='hide-scrollbar flex flex-row justify-between items-center container overflow-x-scroll gap-10'>
            <img src={img} alt="" />
            <img src={img3} alt="" />
            <img src={img2} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
    </div>
  )
}

export default Support