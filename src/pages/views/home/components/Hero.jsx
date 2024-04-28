import React from 'react'
import Button from '../../../../common/Button';
import HeroImg from '../items/img/hero03.avif'

const Hero = () => {
  return (
    <section className='w-full h-[480px] border flex items-center'>
        <div className='w-[45%] h-full py-[5rem] bg-[#ECEFF8]'>
            <div className='w-[80%] mx-auto px-[1rem]'>
                <small className='text-[1rem] text-indigo-600'>Project management</small>
                <h2 className='w-[300px] py-[1rem] text-[2.5rem] leading-[3rem] font-semibold'>A guide to task management</h2>
                <div className='w-full py-[1rem] flex justify-start items-center gap-[1rem]'>
                    <div className='w-[30px] h-[30px] bg-black rounded-full'></div>
                    <small className='pr-[1rem] text-[1rem] font-medium text-gray-600'>Rosanna Campbell</small>
                    <ul className='flex justify-start items-center gap-[1.5rem] font-medium text-gray-600 list-disc'>
                        <li>Updated on Feb 23, 2024 </li>
                        <li>11 min read </li>
                    </ul>
                </div>
                <div className='py-[2rem]'>
                    <Button />
                </div>
            </div>
        </div>
        <div className='flex-1 h-full'>
            <div className='w-full h-full '>
                <img className='w-full h-full ' src={HeroImg} alt="Hero Image" />
            </div>
        </div>
    </section>
  )
}

export default Hero