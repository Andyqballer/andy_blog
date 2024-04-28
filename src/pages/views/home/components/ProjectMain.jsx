import React from 'react'
import Button from '../../../../common/Button'
import task01Img from '../items/img/task-img.webp'
import todoImg from '../items/img/todo-img.webp'

const ProjectMain = () => {
  return (
    <div className='w-full py-[4rem] bg-white'>
        <div className='w-[87%] mx-auto '>
            <div className='w-[80%] max-h-[550px] h-full flex justify-start items-start gap-[5rem] overflow-auto'>
                <section className='w-[30%] h-full'>
                    <div className='w-full pr-[2rem] flex justify-between items-center border rounded-md'>
                        <input type="text" className='text-[1rem] py-[0.8rem] focus:ring-none  border-none outline-none' placeholder='Search' />
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-full py-[2rem] '>
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
                <section className='flex-1 h-full '>
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
                    <div className='w-full pt-[3rem]'>
                        <h2 className='pb-[1.5rem] text-[2rem] font-semibold hover:text-indigo-600'>What is task management?</h2>
                        <div className='w-full text-[1.1rem] text-gray-600'>
                            <div className='pb-[2rem]'>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Task management is the process of planning and completing your tasks in the most effective and 
                                    efficient way. With task management, you oversee the whole lifespan of your tasks, from conception 
                                    to completion, so that you achieve your specific goals and objectives.
                                </p>
                                <div className='py-[1rem]'>That involves:</div>
                                <ul className='list-disc'>
                                    <li className='pb-[0.3rem]'>defining your tasks</li>
                                    <li className='pb-[0.3rem]'>prioritizing tasks by urgency</li>
                                    <li className='pb-[0.3rem]'>assigning tasks to other people</li>
                                    <li className='pb-[0.3rem]'>setting timelines and deadlines</li>
                                    <li className='pb-[0.3rem]'>making adjustments</li>
                                    <li className='pb-[0.3rem]'>monitoring progress towards your objectives.</li>
                                </ul>
                                <div className='w-[720px] h-[400px]'>
                                    <img className='w-full h-full' src={task01Img} alt="" />
                                </div>
                            </div>
                            <div>
                                <h3 className='pb-[1.5rem] text-[2rem] font-bold leading-[2rem]'>The difference between project management and task management</h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    How does task management differ from project management? In general, it’s a matter of scale, scope, 
                                    and timeframe. Project management deals with the planning, running, and overseeing of an entire project 
                                    life cycle, with all the complexity of its constituent objectives. Task management, on the other hand, 
                                    focuses on the more straightforward actions that help you achieve those objectives.
                                </p>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    In terms of time, project management covers the whole duration of the project — which could be months 
                                    or even years. Task management is more focused on what needs to be done here and now — all those daily 
                                    and weekly actions that lead to short-term goals. Task management, then, is essentially a subset of 
                                    project management, and effective overall project management relies on great task management.
                                </p>
                            </div>
                            <div>
                                <h3 className='pb-[1.5rem] text-[2rem] font-bold leading-[2rem]'>The difference between workflow management and task management</h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Task management is related to workflow management. However, workflow management is also concerned 
                                    with the bigger picture — in this case, the end-to-end processes, the dependencies of multiple tasks, 
                                    and the specific sequence of activities that will lead to objectives.
                                </p>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    In terms of time, project management covers the whole duration of the project — which could be months 
                                    or even years. Task management is more focused on what needs to be done here and now — all those daily 
                                    and weekly actions that lead to short-term goals. Task management, then, is essentially a subset of 
                                    project management, and effective overall project management relies on great task management.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='w-full pt-[3rem]'>
                        <h2 className='pb-[1.5rem] text-[2rem] font-bold hover:text-indigo-600 leading-[2.3rem]'>What are the benefits of efficient task management?</h2>
                        <div className='w-full text-[1.1rem] text-gray-600'>
                            <div className='pb-[2rem]'>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    We’ve all been there: faced with a to-do list of tasks to tick off that just never seems to get done. 
                                    Worse, we may even experience ‘task paralysis’ — when the number or complexity of our tasks becomes so 
                                    overwhelming that we don’t know how or where to begin. And so we do nothing, and the work piles up even 
                                    higher. 
                                </p>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Task management is all about avoiding those scenarios. The problem isn’t having too many tasks or not knowing how to do them. 
                                    It’s more about not having a strategy and a practice for getting them done efficiently. This is where task management comes 
                                    in. 
                                </p>
                                <div className='py-[1rem]'>Let’s take a closer look at the benefits of effective task management.</div>
                                <div className='w-[720px] h-[400px]'>
                                    <img className='w-full h-full' src={todoImg} alt="" />
                                </div>
                            </div>
                            <div>
                                <h3 className='pb-[1.5rem] text-[2rem] font-bold leading-[2rem]'>1. Task management boosts productivity</h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Task management is like solving a puzzle. You examine how items relate to each other, and decide on the most 
                                    productive order to complete them. When you get it right, individuals and teams are strategic and in sync when 
                                    dealing with the tasks in their workflows and projects. By involving the whole team in task management, 
                                    you keep the overall project moving forward more smoothly and productively.
                                </p>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Task management can also boost engagement by breaking down workflows into more manageable and quickly 
                                    achievable chunks, which you can organize more effectively. This avoids the diluted focus of multitasking, 
                                    as well as distraction, procrastination or unproductive antics (The Office’s Jello stapler, anyone?) 
                                    Instead, you create a more engaged workforce that is more productive.
                                </p>
                                <div className='py-[1rem]'>For more on productivity, check out these productivity apps.</div>

                            </div>
                            <div>
                                <h3 className='pb-[1.5rem] text-[2rem] font-bold leading-[2rem]'>2. Task management ensures high-priority tasks get done on time</h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Without task management, it’s easy to treat less important tasks with more urgency than they merit, 
                                    and high-priority tasks can fall by the wayside. Sure, a manager might send out email reminders, but 
                                    that can just add to the pressure, without guaranteeing that tasks will be done on time.
                                </p>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    With task management, you can take a more structured and organized approach to your work, categorizing 
                                    and prioritizing tasks to allocate time and effort more effectively. Creating dependencies between tasks 
                                    lets you organize tasks logically and efficiently. With a system in place to set clear priorities and 
                                    due dates, you can ensure high-priority tasks get the attention they deserve.
                                </p>
                            </div>
                            <div>
                                <h3 className='pb-[1.5rem] text-[2rem] font-bold leading-[2rem]'>3. Task management gives a better overview of your projects and business</h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Using project management software does more than simply helping teams get more done, and get it 
                                    done better. It also gives managers and team members a better perspective on the tasks that help 
                                    move workflows and projects forward.
                                </p>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Tools such as Kanban boards and Gantt charts offer different visualizations of how your tasks 
                                    fit within your workflows and projects. These can help you track real-time progress, forecast any 
                                    potential bottlenecks, and give you insights into the progress of tasks and the overall project.
                                </p>
                                <div className='pt-[1.3rem]'>
                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default ProjectMain