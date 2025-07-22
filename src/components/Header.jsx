import { Link } from "react-router-dom";
import logo from '../assets/images/Group.png';
import background from '../assets/images/backgrnd.png';
import burger from '../assets/images/menu.png';
import close from '../assets/images/close.png';
import { useState } from "react";



function Header() {

    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropDown = () => {
        setShowDropdown(true)
    }

    const handleClose = () => {
        setShowDropdown()
    }
    
    return(
        <header className="lg:px-2 h-220 sm:1 md:px-1 scroll-smooth" style={{backgroundImage: `url(${background})`, 
                                                backgroundPosition: 'center', 
                                                backgroundSize: 'cover', 
                                                backgroundRepeat: "no-repeat",
                                                height: "200"}}>
            <nav className="flex justify-between items-center font-semi-bold text-xl lg:px-15 md:px-5 py-8 backdrop-blur-lg
                            backdrop-brightness px-5 sm:px-8 ">
                <div className="flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="company image" />
                    <h1 className="text-3xl text-[#FFFFFF] font-bold">Homify</h1>
                </div>
                    <ul className="flex items-center lg:gap-10 md:gap-5 bg-[#FFFFFF] lg:px-10 md:px-5 md:py-2  py-3 font-semi-bold rounded-sm hidden md:flex">
                        <li className=" hover:text-[#2A9DAF] duration-1000 ease-out md:text-xl">
                            <Link to="./">Home</Link>
                        </li>
                        <li className=" hover:text-[#2A9DAF] duration-1000 ease-out">
                            <Link to="./Features">Features</Link>
                        </li>
                        <li className=" hover:text-[#2A9DAF] duration-1000 ease-out md:text-xl">
                            <a href="#about" smooth={true} duration={1000}>About Us</a>
                        </li>
                        <li className=" hover:text-[#2A9DAF] duration-1000 ease-out">
                            <Link to="./Support">Support</Link>
                        </li>
                    </ul>
                    <div>
                        <Link className="px-4 py-2 bg-[#2A9DAF] font-light text-[#FFFFFF] hover:text-[#2A9DAF] hove:bg-[#FFFFFF] duration-1000 ease-out rounded-md hidden md:block" to="/createaccount">Join Now</Link>
                    </div>
                    <div className="block md:hidden">
                        <img src={burger} alt="menu" onClick={handleDropDown}/>
                        <div className={`fixed h-screen bg-[#FFFFFF] top-0 right-0 w-3/4 px-4 py-7
                                                transform transition-transform duration-1000 ease-in-out z-50
                                                ${showDropdown ? 'translate-x-0' : 'translate-x-full'}`}>
                             {
                            showDropdown && (
                                <div>
                                    <div className="flex justify-end">
                                        <img src={close} alt="close" onClick={handleClose}/>
                                    </div>
                                    <ul>
                                        <li className="my-2">
                                            <Link to="">Home</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="">Features</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="about" smooth={true} duration={300}>About Us</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="">Support</Link>
                                        </li>
                                        <li className="my-7">
                                            <Link className="px-4 py-2 bg-[#2A9DAF] font-light text-[#FFFFFF] hover:text-[#2A9DAF] hove:bg-[#FFFFFF] duration-1000 ease-out rounded-md" to="/createaccount">Join Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                        </div>
                    </div>
            </nav>
            <section className="lg:px-15 lg:my-35 my-15 sm:my-17 sm:px-5 px-5">
                <div className="">
                    <h2 className="lg:text-7xl text-3xl my-2 font-bold text-[#FFFFFF] lg:w-200 leading-tight ">Smart <br />
                    <span className="text-[#2A9DAF]"> Real Estate </span>Solutions</h2>
                </div>
                <p className="lg:w-150 my-10 text-[#FFFFFF]">Connect with top investors, developers and property managers. 
                Fund, invest and grow your real estate portfolio all in one place</p>
                <Link className="px-4 py-2 bg-[#2A9DAF] font-semi-bold text-xl text-[#FFFFFF] rounded-md hover:bg-[#2A9DA5] duration-1000" to="/createaccount">Sign In</Link>
            </section>
        </header>
    )
}
export default Header