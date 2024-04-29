import React from 'react'
import chart from '../items/img/chart.webp';
import book from '../items/img/book.webp';
import planning from '../items/img/sprint-planning.webp';
import hero from '../items/img/hero.jpg';

const Posts = () => {
  return (
    <div className='w-full bg-[#ECEFF8] pt-[2rem] pb-[3rem]'>
        <div className='w-[85%] mx-auto'>
            <h2 className='w-fit mx-auto mb-[2.5rem] pb-[0.3rem] text-[1.5rem] font-semibold text-center border-b-2 border-gray-500'>Engineering Team</h2>
            <div className='w-full flex justify-between items-center gap-[2rem]'>
                <div className='w-[350px] flex flex-col justify-center items-center'>
                    <img className='w-[150px] h-[150px] rounded-full' src={hero} alt="Chart" />
                    <h3 className='py-[1rem] text-[1.3rem] text-black text-center font-semibold'>David Nicholas</h3>
                    <h2 className='text-[1rem] text-indigo-600 leading-[1.1rem] text-center'>Project manager, Architect, Backend Developer</h2>
                    <small className='py-[1rem] text-[0.9rem] leading-[1.2rem]'>
                        The project manager, architect, and backend developer collaborate seamlessly to drive successful software projects through effective planning, design, and implementation.
                    </small>
                </div>
                <div className='w-[350px] flex flex-col justify-center items-center'>
                    <img className='w-[150px] h-[150px]  rounded-full' src={hero} alt="Chart" />
                    <h3 className='py-[1rem] text-[1.4rem] text-black text-center font-semibold'>Vahid Babaey</h3>
                    <h2 className='text-[1rem] text-indigo-600 leading-[1.1rem] text-center'>Architect, Back-end developer, integration</h2>
                    <small className='py-[1rem] text-[0.9rem] leading-[1.2rem]'>
                        The architect designs the structural blueprint, the back-end developer implements it with optimized code, and integration ensures seamless cohesion, enabling efficient functionality across software systems.
                    </small>
                </div>
                <div className='w-[350px] flex flex-col justify-center items-center'>
                    <img className='w-[150px] h-[150px]  rounded-full' src={hero} alt="Chart" />
                    <h3 className='py-[1rem] text-[1.4rem] text-black text-center font-semibold'>Chunyuan Shen</h3>
                    <h2 className='text-[1rem] text-indigo-600 leading-[1.1rem] text-center'>Frontend developer, Integration, end-to-end tester</h2>
                    <small className='py-[1rem] text-[0.9rem] leading-[1.2rem]'>
                        The frontend developer creates the interface, integration ensures system cohesion, and end-to-end testers validate functionality for a seamless and user-friendly software product.
                    </small>
                </div>
                <div className='w-[350px] flex flex-col justify-center items-center'>
                    <img className='w-[150px] h-[150px]  rounded-full' src={hero} alt="Chart" />
                    <h3 className='py-[1rem] text-[1.4rem] text-black text-center font-semibold'>Andrew Quansah</h3>
                    <h2 className='text-[1rem] text-indigo-600 leading-[1rem] text-center'>Front-end developer, end-to-end tester</h2>
                    <small className='py-[1rem] text-[0.9rem] leading-[1.2rem]'>
                        The front-end developer designs the interface, while end-to-end testers ensure comprehensive functionality, guaranteeing a seamless user experience.
                    </small>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Posts