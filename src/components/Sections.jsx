import Features from './Features'
import Functions from './Functions'
import Investments from './Investments'
import Testimonies from './Testimonies'
import About from './About'


function Sections() {

    return(
        <div className="bg-[#f4f6f8] lg:px-15 px-5 lg:py-10 py-5 ">
            <Features />
            <Functions />
            <Investments />
            <Testimonies />
            <About />
        </div>
    )
}

export default Sections