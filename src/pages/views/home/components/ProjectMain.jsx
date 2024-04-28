import React from 'react'
import Button from '../../../../common/Button'

const ProjectMain = () => {
  return (
    <div className='w-full py-[3rem] bg-white'>
        <div className='w-[87%] mx-auto '>
            <div className='w-[80%] flex justify-start items-start gap-[5rem]'>
                <section className='w-[30%]'>
                    <div className='w-full pr-[2rem] flex justify-between items-center border rounded-md'>
                        <input type="text" className='text-[1rem] py-[0.8rem] focus:ring-none  border-none outline-none' placeholder='Search' />
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-full py-[2rem]'>
                        <div className='py-[1rem] text-[1.1rem] hover:text-indigo-600 border-b cursor-pointer'>
                            What is task management?
                        </div>
                        <div className='py-[1rem] text-[1.1rem] hover:text-indigo-600 border-b cursor-pointer'>
                            What are the benefits of efficient task management?
                        </div>
                        <div className='py-[1rem] text-[1.1rem] hover:text-indigo-600 border-b cursor-pointer'>
                            Examples of task management in action
                        </div>
                        <div className='py-[1rem] text-[1.1rem] hover:text-indigo-600 border-b cursor-pointer'>
                            What is the best way to manage tasks?
                        </div>
                        <div className='py-[1rem] text-[1.1rem] hover:text-indigo-600 border-b cursor-pointer'>
                            Why monday.com is your ideal task management solution
                        </div>
                    </div>
                </section>
                <section className='flex-1'>
                    <div className='w-full text-[1.1rem] text-gray-600'>
                        <p className='pb-[1rem] leading-[1.7rem]'>
                            You’ve heard the saying: “If you want something done, ask a busy person.” Why is that? Well, a busy person needs 
                            to know how to get things done, and done well and on time. They’ve got to have a system. And if you have a lot 
                            of tasks to get done, you need a system too.
                        </p>
                        <p className='pb-[1rem] leading-[1.7rem]'>
                            Simply jumping into tasks as and when they crop up, or plastering your workspace with more and more 
                            sticky-note reminders is a recipe for disaster.
                        </p>
                        <p className='pb-[1rem] leading-[1.7rem]'>
                            To work effectively and without burning yourself (or your team) out, you need to develop great task management. 
                            That way, you can stay on track and know you’re on top of your highest-priority task at any given moment. 
                            In addition, using a platform like monday.com can make it easier to plan, manage, and track all your team’s 
                            tasks in one flexible platform. 
                        </p>
                        <div className='pt-[1.3rem]'>
                            <Button />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default ProjectMain