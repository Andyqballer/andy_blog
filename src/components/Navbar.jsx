import { Button, Navbar } from "flowbite-react";

export default function Component() {
  return (
    <div className="w-full border-b fixed bg-white">
            <Navbar fluid rounded className="w-[85%] mx-auto">
            <Navbar.Brand href="https://flowbite-react.com">
                <div className="w-[40px] h-[40px] mr-4 rounded-full bg-black"></div>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Danshevah</span>
            </Navbar.Brand>
            <div className="flex md:order-2 justify-center items-center gap-[1rem]">
                <div className="mainShowList relative">
                    <div className="flex justify-start items-center gap-[1rem]">
                        <div>Topic</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="showList w-[300px] absolute top-[2rem] shadow-lg left-[-2rem] bg-white">
                        <ul className="w-full text-gray-400 text-left">
                        <li className="w-full border-b py-[0.7rem] px-[2rem]">Project Management</li>  
                        <li className="w-full border-b py-[0.7rem] px-[2rem]">Project Management</li>  
                        <li className="w-full border-b py-[0.7rem] px-[2rem]">Project Management</li>  
                        <li className="w-full border-b py-[0.7rem] px-[2rem]">Project Management</li>  
                        <li className="w-full border-b py-[0.7rem] px-[2rem]">Project Management</li>  
                        <li className="w-full border-b py-[0.7rem] px-[2rem]">Project Management</li>  
                        
                        </ul>
                    </div>
                </div>
                <div className="w-[1.5px] h-[1rem] mx-[1rem] bg-gray-400"></div>
                <div className="pr-[1rem] text-[1.2rem] text-indigo-500">danshevah@support.com</div>
                <div className="w-[250px] mr-[1rem] flex justify-center items-center gap-[1rem] border border-gray-300 rounded-[2rem]">
                    <input className="w-[70%] py-[0.5rem] border-none outline-none" type="search" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <Button>Get started</Button>
                <Navbar.Toggle />
            </div>
            
            <Navbar.Collapse>
                {/* <Navbar.Link href="#" active>
                Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link> */}
            </Navbar.Collapse>
        
        </Navbar>
    </div>
  );
}
