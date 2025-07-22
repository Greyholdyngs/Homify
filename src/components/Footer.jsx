import { Link } from "react-router-dom";
import footerLogo from '../assets/images/logoFooter.png'
import arrow from '../assets/images/arrow-right.png';
import frame from '../assets/images/framer.png';
import socials from '../assets/images/links.png'
import { useEffect, useState } from "react";
import AOS from 'aos'

function Footer() {

    const [email, sentEmail] = useState("");

    useEffect(() => {
                AOS.refresh()
            },[])
    

    const links = [
        {
            id: 1,
            subheading: "Quick Links",
            li: ["Home", "Features", "About Us"],
        },
        {
            id: 2,
            subheading: "Support",
            li: ["Contact Us", "FAQs", "Terms & Conditions"],
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault('Please fill this form')
        sentEmail("")
    }

    return(
        <div className=" bg-[#FFFFFF] py-10 px-5 rounded-xl md:text-left text-center" data-aos="fade-up">
            <div className="md:flex justify-between">
                <div>
                    <img className="md:m-0 m-auto" src={footerLogo} alt="" />
                    <small className=''>Smarter real estate investing</small>
                </div>
                {
                    links.map((l, index) => (
                        <ul key={index}>
                                <h5 className="font-semibold text-lg">{l.subheading}</h5>
                                {
                                    l.li.map((list, i) =>
                                    <li className="my-4 text-sm hover:text-[#2A9DAF] transition-transform duration-1000
                                                    ease-in-out hover:translate-x-5" key={i}>
                                        <Link to="/createaccount">{list}</Link>
                                    </li>      
                                    )
                                }
                        </ul>
                    ))
                }
                <ul>
                    <h5 className="font-semibold text-lg">Subscribe</h5>
                    <form onSubmit={handleSubmit} className=" ">
                        <div className="relative flex items-center">
                            <input type="email" name="email" placeholder="Email" value={email} required onChange={(e) => sentEmail(e.target.value)} className="my-4 text-base p-1
                                                                                                    focus:outline-none
                                                                                                    focus:ring-2
                                                                                                    focus:ring-[#2a9daf]
                                                                                                    outline-1
                                                                                                    rounded-lg
                                                                                                    w-full" 
                                                                                                    />
                            <button type="submit" className="absolut right-5 top-1/2 transform -translate-x-7">
                                <img className="bg-[#2A9DAF] rounded-xl" src={arrow} alt="" />
                            </button>
                        </div>
                    </form>
                    <li className="flex md:justify-start justify-center ">
                        <img className="w-20" src={socials} alt="" />
                    </li>
                </ul>
            </div>
            <div className="flex justify-between my-4">
                <img className="md:w-50 md:h-13 h-7" src={frame} alt="" />
                <img className="md:w-50 md:h-13 h-7" src={frame} alt="" />
            </div>
        </div>
    )
}

export default Footer