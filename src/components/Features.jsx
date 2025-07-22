
import Image from '../assets/images/image.png';
import vectorOne from '../assets/images/Vector1.png';
import vectorTwo from '../assets/images/Vector2.png';
import vectorThree from '../assets/images/Vector3.png';
import vectorFour from '../assets/images/Vector4.png';
import vectorFive from '../assets/images/Vector5.png';
import vectorSix from '../assets/images/Vector6.png';

function Features() {

    const feature = [
        {
            id: 1,
            vector: vectorOne,
            title: "Investment Opportunities",
            text: "Invest in properties via direct purchase or crowdfunding",

        },
        {
            id: 2,
            vector: vectorTwo,
            title: "Property Management",
            text: "Handle tenant registrations, rent collection and maintenance",
        },
        {
            id: 3,
            vector: vectorThree,
            title: "Secure Payments",
            text: "Escrow payments, revenue distribution and secure transfers",
        },
        {
            id: 4,
            vector: vectorFour,
            title: "Reports and Insights",
            text: "Track investments, rental income and generate reports",
        },
        {
            id: 5,
            vector: vectorFive,
            title: "Quality Assurance",
            text: "We verify every property to meet quality and legal standards",
        },
        {
            id: 6,
            vector: vectorSix,
            title: "Insurance",
            text: "Each property is insured to keep you protected",
        }
    ]

    return(
        <div data-aos="fade-up">
            <div className="text-center">
                <small className="bg-[#FAFAFA] text-[#2A9DAF] lg:py-3 lg:px-8 rounded-sm inline-block
                                transition-transform duration=300 ease-in-out hover:scale-105 hover:shadow-sm">Key Features</small>
                <h1 className="lg:my-5 lg:text-6xl text-2xl my-1 font-semibold">Unlock Powerful Features</h1>
                <p className="lg:w-150 lg:text-lg m-auto text-[#646464] text-sm ">Streamline real estate investment and development with powerful tools tailored for you</p>
            </div>
            <div className='lg:flex justify-between py-15'>
                <div >
                    <img className='rounded-lg lg:w-155 lg:h-164' src={Image} alt="" />
                </div>
                <div className='flex flex-col text-left sm:py-10 py-7 lg:py-0'>
                    {
                    feature.map((item) => (
                        <div  className=''  key={item.id}>
                            <div className='flex lg:items-start md:justify-center gap-5 lg:mb-10 sm:mb-8 mb-5  transition-transform duration-400 ease-in-out hover:-translate-x-10'>
                                <div className=' bg-[#F0F0F0] h-8 w-8 p-2 rounded'>
                                    <img src={item.vector} />
                                </div>
                                <div className='lg:text-left lg:w-100'>
                                    <h1 className='font-medium lg:text-3xl text-xl mb-2'>{item.title}</h1>
                                    <p className=' text-[#646464] text-sm'>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>

    )
}
export default Features