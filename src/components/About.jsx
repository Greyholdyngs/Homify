
import house from '../assets/images/house.png';
import background from '../assets/images/housebackground.png';

function About() {


    return(
        <div className='text-center py-15'>
            <small className="bg-[#FFFFFF] text-[#2A9DAF] text-sm p-2">Built on Trust</small>
            <h1 className="font-semibold lg:text-6xl md:text-3xl sm:text-2xl text-xl  my-5">Who We Are</h1>
            <p  className="text-[#646464] text-base">Seamless and secure real estate solutions for all</p>
            <div className='flex bg-[#FFFFFF] items-center gap-20 my-10 rounded'>
                    <img className='w-150' src={house} alt="" />
                <div className='px-15'>
                    <h3 className='text-[#2A9DAF] lg:text-xl font-bold mb-5'>Simplifying real estate for everyone involved</h3>
                    <p className='text-[#646464] text-base'>We are an indigenous real estate company driven by the vision to make property ownership and investment accessible and attainable for people across all walks of life</p>
                </div>
            </div>
            <div className='text-center' style={{backgroundImage: `url(${background})`}}> 

            </div>
        </div>
    )
}
export default About