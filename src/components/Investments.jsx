import { Link } from "react-router-dom";
import houseOne from "../assets/images/greenwood.png";
import houseTwo from "../assets/images/honeyland.png";
import houseThree from "../assets/images/lakeside.png";

function Investments () {

    const apartments = [
        {
            id: 1,
            image: houseOne,
            title: "Greenwood Apartment",
            span: " ₦5m",
            location: "Location: Victoria Island, Lagos",
            text: "Project Description: Modern Apartment in a serene and well-connected neighborhood, ideal for your next investment move",
            link: "View Details",
        },
        {
            id: 2,
            image: houseTwo,
            title: "Honeyland Apartment",
            span: "₦10m",
            location: "Location: Ikeja, Lagos",
            text: "Project Description: Modern eco-friendly apartments designed for urban professionals and growing families, in a fast-developing neighborhood",
            link: "View Details", 
        },
        {
            id: 3,
            image: houseThree,
            title: "Lakeside Apartment",
            span: "₦8m",
            location: "Location: Lekki, Lagos",
            text: "Project Description: Premium residential units in a secure and thriving environment, offering a blend of comfort and great lon-term value",
            link: "View Details",
        }
    ]

    return(
        <div>
            <div className="text-center">
                <small className="bg-[#FFFFFF] text-[#2A9DAF] text-sm p-2">Investment Options</small>
                <h1 className="font-semibold lg:text-6xl md:text-3xl sm:text-2xl text-xl  my-5">Explore Investment</h1>
                <p className="text-[#646464] text-base">Start owning a property for as low as  ₦2,000,0000</p>
            </div>
            <div className="lg:flex md:flex gap-10 my-10">
                {
                   apartments.map((places) => (
                    <div className="bg-[#FFFFFF] py-5 px-5 rounded-lg lg:w-250 md:w-200 lg:text-left md:text-left sm:text-center text-center">
                        <img className="rounded-lg w-85 m-auto" src={places.image} alt="house image" />
                        <div className="flex justify-between lg:gap-10 md:gap-7 my-2 md:text-sm md:items-center lg:text-base font-medium">
                            <h5>{places.title}</h5>
                            <h5>{places.span}</h5>
                        </div>
                        <p className="text-[#646464] text-xs">{places.location}</p>
                        <p className="text-[#646464] text-xs mb-10">{places.text}</p>
                        <div className="flex justify-center">
                            <Link className="bg-[#2A9DAF] text-[#FFFFFF] hover:text-[#2A9DAF] hover:bg-[#f4f6f8] duration-300 ease-in xl:px-25 2xl:px-35 lg:px-17 md:px-9.5 sm:px-15 px-13 py-1 rounded-lg" to=''>{places.link}</Link>
                        </div>
                    </div>
                   )) 
                }
            </div>
        </div>
    )
}
export default Investments