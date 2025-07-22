
import AOS from 'aos'
import { useEffect } from "react";

function Functions() {

        useEffect(() => {
            AOS.refresh()
        },[])

    const types = [
        {
            id: 1,
            number: "01",
            main: "Sign up and Verify",
            text: "Create an account and complete verification to get started",
        },
        {
            id: 2,
            number: "02",
            main: "Explore and Invest",
            text: "Browse investment opportunities, property projects and management",
        },
        {
            id: 3,
            number: "03",
            main: "Manage and Grow",
            text: "Track your investments, manage properties and maximize returns",
        }
    ]

    return(
        <div className="text-center" data-aos="fade-up">
            <small className=" inline-block text-[#2A9DAF] bg-[#FFFFFF] p-2 text-sm rounded-sm inline-block
                                transition-transform duration=300 ease-in-out hover:scale-105 hover:shadow-sm">Quick and easy</small>
            <h1 className="font-semibold md:text-6xl text-2xl my-5">How it Works</h1>
            <p className="text-[#646464] text-base">A simple way to invest, develop and manage real estate</p>
                <div className="lg:flex md:flex lg:gap-10 md:gap-7">
                    {
                        types.map((item) => (
                            <div className="bg-[#FFFFFF] lg:py-8 py-5 lg:px-3 px-5 rounded-lg my-10 hover:shadow-2xl
                                            transition-transform duration-500 ease-in-out hover:-translate-y-4" key={item.id}>
                                <h2 className="text-[#2A9DAF] font-semibold text-2xl">{item.number}</h2>
                                <h3 className="font-medium lg:text-xl md:text-lg sm:text-base my-3">{item.main}</h3>
                                <p className="text-[#646464] text-sm">{item.text}</p>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}
export default Functions