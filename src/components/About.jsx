import { Link } from "react-router-dom";
import house from '../assets/images/house.png';
import background from '../assets/images/housebackground.png';
import AOS from 'aos'
import { useEffect } from "react";


function About() {

    useEffect(() => {
                AOS.refresh()
            },[])

    return(
        <div className='text-center py-15'  data-aos="fade-up" id="about">
            <small className="bg-[#FFFFFF] text-[#2A9DAF] text-sm p-2 rounded-sm inline-block
                                transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-sm">Built on Trust</small>
            <h1 className="font-semibold lg:text-6xl md:text-3xl sm:text-2xl text-xl  my-5">Who We Are</h1>
            <p  className="text-[#646464] text-base">Seamless and secure real estate solutions for all</p>
            <div className='lg:flex bg-[#FFFFFF] items-center lg:gap-20 my-10 rounded'>
                    <img className='lg:w-150 lg:m-0 md:m-auto' src={house} alt="" />
                <div className='md:px-15 px-10 lg:py-0 md:p-8 py-5'>
                    <h3 className='text-[#2A9DAF] lg:text-xl text-base font-bold mb-5'>Simplifying real estate for everyone involved</h3>
                    <p className='text-[#646464] md:text-base text-sm'>We are an indigenous real estate company driven by the vision to make property ownership and investment accessible and attainable for people across all walks of life</p>
                </div>
            </div>
            <div className='relative bg-cover bg-center text-center py-30 overflow-hidden rounded-xl' style={{backgroundImage: `url(${background})`,
                                                backgroundRepeat: "no-repeat",
                                                opacity: "3",
                                                transform: "none",
                                                }}>
                <div className="absolute inset-0 bg-black/50 z-10">
                </div>
                <div className="relative z-10 md:px-0 px-10">
                    <h1 className='text-[#FFFFFF] md:text-5xl text-2xl  mb-5 font-semibold'>Ready To Invest In Real Estate?</h1> 
                    <Link className='bg-[#2A9DAF] text-[#FFFFFF] md:text-xl text-sm py-1 px-3 rounded-3xl' to="/createaccount">Get Started</Link>
                </div>
            </div>
        </div>
    )
}
export default About