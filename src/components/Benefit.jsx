import React from 'react'
import BG1 from '../assets/icons/BGBenefit1.svg'
import BG2 from '../assets/icons/BGbenefit2.svg'
import BG3 from '../assets/icons/BGBenefit3.svg'
import Iteme1 from '../assets/images/benefitimg1.png'
import Iteme2 from '../assets/images/benefitimg2.png'
import Iteme3 from '../assets/images/benefitimg3.png'
const Benefit = () => {
    const CardValue = [
        {
            id: 1,
            "bgImage": BG1,
            "Image1": Iteme1,
            "Alt": "Items",
            "Para": "Services, Products and Community All in one place! "
        },
        {
            id: 2,
            "bgImage": BG2,
            "Image1": Iteme2,
            "Alt": "Items",
            "Para": "Services, Products and Community All in one place! "
        },
        {
            "bgImage": BG3,
            "Image1": Iteme3,
            "Alt": "Items",
            "Para": "Services, Products and Community All in one place! "
        }
    ]
    const CardComponents = CardValue.map((listing) => (
        <div className='w-full lg:my-[60px]' key={listing.id}>
            <div style={{ backgroundImage: `url(${listing.bgImage})` }} className='w-full flex items-end justify-center bg-no-repeat bg-center sm:min-h-[287px]'>
                <img src={listing.Image1} alt={listing.Alt} />
            </div>
            <p className=' font-Montserrat text-base font-normal opacity-70 text-black max-w-[300px] mx-auto mt-3 sm:mt-5 text-center'>{listing.Para}</p>
        </div>
    ))
    return (
        <div className='mt-5 sm:mt-10'>
            <h2 className=' font-Montserrat text-[22px] xs:text-2xl sm:text-[35px] lg:text-[50px]  text-[#32352C] font-bold text-center'>Benefits</h2>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 items-center gap-5 mt-5'>
                {CardComponents}
            </div>
        </div>
    )
}

export default Benefit
