
import investor from '../assets/images/john.png';
import developer from '../assets/images/serah.png';
import propertyManager from '../assets/images/micheal.png';
import stars from '../assets/images/stars.png';

function Testimonies() {
    
    const comments = [
        {
            id: 1,
            text: "Investing in real estate has never been easier. I co-funded a property and started earning returns seamlessly",
            vector: investor,
            name: "John D.",
            position: "Investor",
            stars: stars,
            rating: "4.5+",
        },
        {
            id: 2,
            text: "Listing my project and connecting with investors was easy. The funding process is smooth and transparent",
            vector: developer,
            name: "Sarah T.",
            position: "Developer",
            stars: stars,
            rating: "4.5+",
        },
        {
            id: 3,
            text: "Managing tenant payments and maintenance in one place has saved me time",
            vector: propertyManager,
            name: "Michael R.",
            position: "Property Manager",
            stars: stars,
            rating: "4.5+",
        }
    ]
    
    return(
       <div className='pt-10'>
            <div className='text-center '>
                <small className="bg-[#FFFFFF] text-[#2A9DAF] text-sm p-2">Trusted Users</small>
                <h1 className="font-semibold lg:text-6xl md:text-3xl sm:text-2xl text-xl  my-5">What Our Early Users Say</h1>
                <p className="text-[#646464] text-base">Real stories from investors, developers and property managers who trust our platform</p>
            </div>
            <div className='lg:flex  gap-10 mt-10'>
                {
                    comments.map((c) => (
                        <div>
                            <p className='bg-[#FFFFFF] lg:px-10 md:px-5 py-7 lg:w-half rounded-xl text-sm mb-10 font-light '>{c.text}</p>
                            <div className='md:flex md:justify-between lg:m-0 md:mb-5  items-center md:text-left text-center'>
                                <div className='flex gap-3 items-center md:justify justify-center'>
                                    <img className='rounded-full w-15 h-15 ' src={c.vector} alt="" />
                                    <div>
                                        <h6 className='my-0 font-semibold'>{c.name}</h6>
                                        <small>{c.position}</small>
                                    </div>
                                </div>
                                <div className='md:text-end text-center md:my-0 my-2'>
                                    <img className='md:m-0 m-auto' src={c.stars} alt="" />
                                    <small>{c.rating}</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
       </div>
    )
}
export default Testimonies