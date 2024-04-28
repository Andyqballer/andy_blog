import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MainFooter = () => {
  return (
    <div className='w-full  bg-white'>
        <Footer container className='py-[4rem]'>
            <div className="w-[80%] mx-auto">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div className='flex justify-start items-center gap-[1rem]'>
                    {/* <Footer.Brand
                    href="https://flowbite.com"
                    src="/src/pages/views/home/items/img/hero.jpg"
                    alt="Flowbite Logo"
                    name="Flowbite"
                    className='w-[40px] h-[40px] rounded-full'
                    /> */}
                    <div className='w-[40px] h-[40px] rounded-full bg-black'></div>
                    <h3 className='text-[1.3rem] font-semibold'>Danshevah</h3>
                </div>
                <div className="pb-[1.5rem] grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title="about" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#">Danshevah</Footer.Link>
                        <Footer.Link href="#">Our blog posts</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Follow us" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#">Github</Footer.Link>
                        <Footer.Link href="#">Discord</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Legal" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                    <Footer.Icon href="#" icon={BsGithub} />
                    <Footer.Icon href="#" icon={BsDribbble} />
                </div>
                </div>
            </div>
        </Footer>
    </div>
  )
}

export default MainFooter