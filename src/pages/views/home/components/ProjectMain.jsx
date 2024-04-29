import React from 'react'
import Button from '../../../../common/Button'
import task01Img from '../items/img/task-img.webp'
import flowchart from '../items/img/flowchart.jpeg'
import architecture from '../items/img/architecture.jpeg'
import todoImg from '../items/img/todo-img.webp'

const ProjectMain = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
  return (
    <div className='w-full py-[4rem] bg-white'>
        <div className='w-[87%] mx-auto '>
            <div className='w-[80%] max-h-[550px] h-full flex justify-start items-start gap-[5rem] overflow-auto'>
                <section className='w-[30%] h-full sticky top-0 z-[10]'>
                    <div className='w-full pr-[2rem] flex justify-between items-center border rounded-md'>
                        <input type="text" className='text-[1rem] py-[0.8rem] focus:ring-none  border-none outline-none' placeholder='Search' />
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-full py-[2rem] '>
                        <div onClick={() => scrollToSection('introduction')} className='py-[1rem] text-[1.1rem] hover:text-indigo-600 border-b cursor-pointer'>
                            Introduction
                            
                        </div>
                        <div onClick={() => scrollToSection('key-features')} className='py-[1rem] text-[1.1rem] hover:text-indigo-600 border-b cursor-pointer'>
                            Key features
                        </div>
                        <div onClick={() => scrollToSection('architecture')} className='py-[1rem] text-[1.1rem] hover:text-indigo-600 border-b cursor-pointer'>
                            Architecture of the system
                        </div>
                        <div onClick={() => scrollToSection('benefits')} className='py-[1rem] text-[1.1rem] hover:text-indigo-600 border-b cursor-pointer'>
                            Benefits
                        </div>
                        <div onClick={() => scrollToSection('conclusion')} className='py-[1rem] text-[1.1rem] hover:text-indigo-600 border-b cursor-pointer'>
                            Conclusion
                        </div>
                    </div>
                </section>
                <section className='flex-1 h-full overflow-y-auto'>
                    <div id="introduction" className='w-full text-[1.1rem] text-gray-600'>
                    <h2 className='pb-[1rem] text-[1.8rem] font-bold hover:text-indigo-600 leading-[2.3rem]'>Introduction </h2>

                        <p className='pb-[2rem] leading-[1.7rem]'>
                            In today’s fast-paced world, staying on top of our tasks and projects is more crucial than ever. That’s 
                            why we are excited to introduce our latest innovation: a cloud-based task management system designed to 
                            streamline workflows and boost productivity for teams and individuals alike.
                        </p>
                        <div className='w-[650px] h-[400px] mx-auto'>
                            <img className='w-full h-full' src={flowchart} alt="" />
                        </div>

                        <div className='pt-[2rem] w-fit mx-auto'>
                            <Button />
                        </div>
                    </div>
                    <div id="key-features" className='w-full pt-[3rem]'>
                        <h2 className='pb-[1rem] text-[1.8rem] font-bold hover:text-indigo-600 leading-[2.3rem]'>Key features </h2>
                        <div className='w-full text-[1.1rem] text-gray-600'>
                            <div className='pb-[1.5rem]'>
                                <h3 className='pb-[0.7rem] text-[1.5rem] font-semibold leading-[2rem]'>1.	Centralized Task Management: </h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Organize all your tasks in one accessible cloud platform. Whether you’re at the office or on the go, 
                                    access your projects anytime, anywhere.
                                </p>
                            </div>
                            <div className='pb-[1.5rem]'>
                                <h3 className='pb-[1rem] text-[1.5rem] font-semibold leading-[2rem]'>2.	Real-Time Collaboration: </h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Communicate and collaborate with team members in real time. Our system ensures that everyone is on the 
                                    same page, reducing miscommunications and increasing efficiency.
                                </p>
                            </div>
                            <div className='pb-[1.5rem]'>
                                <h3 className='pb-[1rem] text-[1.5rem] font-semibold leading-[2rem]'>3.	Customizable Workspaces: </h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Adapt the platform to fit your needs. Customize workflows, integrate third-party apps, and set personal 
                                    preferences to create a workspace that works for you.
                                </p>
                            </div>
                            <div className='pb-[1.5rem]'>
                                <h3 className='pb-[1rem] text-[1.5rem] font-semibold leading-[2rem]'>4.	Automated Reminders and Notifications: </h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Stay ahead of deadlines with automated reminders. Our system sends notifications directly to your devices, ensuring you never 
                                    miss a beat.
                                </p>
                            </div>
                            <div className='pb-[1.5rem]'>
                                <h3 className='pb-[1rem] text-[1.5rem] font-semibold leading-[2rem]'>5.	Data Security and Reliability:  </h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Your data’s security is our top priority. With state-of-the-art encryption and regular backups, your 
                                    information is safe and always available.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="architecture">
                        <h2 className='pb-[1rem] text-[1.8rem] font-bold hover:text-indigo-600 leading-[2.3rem]'>Architecture of the system </h2>
                        <p className='pb-[2rem] leading-[1.7rem]'>
                            The s diagram depicts a three-tier architecture for a proposed system. This architecture consists of three layers: client app, web app, and microservices.
                        </p>
                        <div className='w-[600px] h-[400px] mx-auto'>
                            <img className='w-full h-full' src={architecture} alt="" />
                        </div>
                        <div className='pt-[2rem] pb-[1rem]'>
                            <h3 className='pb-[1rem] text-[1.5rem] font-semibold leading-[2rem]'>1. Client and Web App </h3>
                            <p className='pb-[1rem] leading-[1.7rem]'>
                                The client app layer provides a user interface for users to interact with the web app. The web app layer,  communicates with the 
                                microservices layer through an API gateway. The API gateway acts as an intermediary between the web app and the microservices layer, 
                                routing requests to the appropriate microservice.
                            </p>
                        </div>
                        <div className='pb-[1.5rem]'>
                            <h3 className='pb-[1rem] text-[1.5rem] font-semibold leading-[2rem]'>2. Microservices Layer </h3>
                            <p className='pb-[1rem] leading-[1.7rem]'>
                                The microservices layer  is comprised of independent services that are responsible for specific tasks.  In the image, there are 
                                three microservices depicted: Users Service, Tasks Service, and Billings Service. Each microservice has its own database, 
                                presumably a MongoDB database.
                            </p>
                            <p className='pb-[1rem] leading-[1.7rem]'>
                                This type of architecture can be beneficial because it is modular and scalable.  Microservices 
                                can be developed, deployed, and scaled independently. This can make the system more flexible and 
                                easier to maintain.
                            </p>
                        </div>
                    </div>
                    <div id="benefits" className='w-full'>
                        <h2 className='pb-[1rem] text-[1.8rem] font-bold hover:text-indigo-600 leading-[2.3rem]'>Benefits </h2>
                        <div className='w-full text-[1.1rem] text-gray-600'>
                            <div className='pb-[1.5rem]'>
                                <h3 className='pb-[0.7rem] text-[1.5rem] font-semibold leading-[2rem]'>1. Increased Productivity </h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Streamline processes and reduce time spent on managing tasks.
                                </p>
                            </div>
                            <div className='pb-[1.5rem]'>
                                <h3 className='pb-[1rem] text-[1.5rem] font-semibold leading-[2rem]'>2. Enhanced Team Collaboration</h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Improve communication and collaboration across all levels of your organization.
                                </p>
                            </div>
                            <div className='pb-[1.5rem]'>
                                <h3 className='pb-[1rem] text-[1.5rem] font-semibold leading-[2rem]'>3.	Scalability </h3>
                                <p className='pb-[1rem] leading-[1.7rem]'>
                                    Our system grows with you. As your team or business expands, our platform adapts to meet your evolving needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="conclusion" className='w-full pb-[2rem]'>
                        <h2 className='pb-[1rem] text-[1.8rem] font-bold hover:text-indigo-600 leading-[2rem]'>Conclusion </h2>
                        <div className='w-full text-[1.1rem] text-gray-600'>
                            <p className='pb-[1rem] leading-[1.7rem]'>
                                Embrace the future of work with our cloud-based task management system. It’s more than just a tool; 
                                it’s an essential partner in your professional journey. Join us and transform the way you work, one task 
                                at a time.
                            </p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h2 className='pb-[1rem] text-[1.5rem] font-semibold leading-[2rem]'>Call to Action </h2>
                        <div className='w-full text-[1.1rem] text-gray-600'>
                            <p className='pb-[1rem] leading-[1.7rem]'>
                                Ready to boost your productivity? <span className='text-indigo-600 cursor-pointer'>Sign up</span>  for a free trial today and experience the power of efficient task management!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default ProjectMain