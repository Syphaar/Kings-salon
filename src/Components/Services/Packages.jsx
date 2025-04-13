import React from 'react'
// import Img1 from "/src/assets/img/haircut.jpg";

const image = [
    {
        id: 1,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297973/haircut_hkxub0.jpg",
    }
]

const imagetwo = [
    {
        id: 1,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297982/Treatment_u7x24v.jpg",
    }
]

const imagethree = [
    {
        id: 1,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297964/dye_xbl1l3.jpg",
    }
]

const imagefour = [
    {
        id: 1,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297965/facial_w7bbj9.jpg",
    }
]

const Grooming = [
    { id: 1, groom: "Standard Haircut", price: "₦6,000" },
    { id: 2, groom: "Haircut & Wash", price: "₦9,000" },
    { id: 3, groom: "Haircut & Enhancement", price: "₦10,000" },
    { id: 4, groom: "Haircut & Custom Design", price: "₦9,500" },
    { id: 5, groom: "Haircut, Design & Wash", price: "₦14,500" },
    { id: 6, groom: "European Haircut (Includes Wash)", price: "₦10,000" },
    { id: 7, groom: "Beard Trim & Grooming", price: "₦4,400" },
    { id: 8, groom: "Kids Haircut", price: "₦4,000" },
    { id: 9, groom: "Kids Haircut & Wash", price: "₦5,000" },
    { id: 10, groom: "Kids Haircut & Design", price: "₦8,000" }
];

const Chemicals = [
    { id: 1, groom: "Professional Hair & Beard Dyeing", price: "₦7,000" },
    { id: 2, groom: "Texturizing Treatments", price: "₦11,500" },
    { id: 3, groom: "Double Process Color Services", price: "₦20,000" },
    { id: 4, groom: "Custom Color Applications", price: "₦4,500" },
    { id: 5, groom: "Black Dye with Wash & Conditioning", price: "₦6,000" },
    { id: 6, groom: "Beard Dye & Grooming", price: "₦4,000" },
    { id: 7, groom: "Texturizing for Beard", price: "₦6,000" },
    { id: 8, groom: "Texturizing for Hair", price: "₦11,000" },
    { id: 9, groom: "Customer Provided Dye Application", price: "₦6,500" }
];

const Treatment = [
    { id: 1, groom: "Steam Hydration Therapy", price: "₦9,000" },
    { id: 2, groom: "Mini-Facial Rejuvenation", price: "₦12,000" },
    { id: 3, groom: "Ear Waxing", price: "₦3,500" },
    { id: 3, groom: "Nose Waxing", price: "₦3,500" },
    { id: 3, groom: "Nose & Ear Waxing", price: "₦6,000" },
    { id: 4, groom: "Head & Shoulder Massages", price: "₦7,000" },
    { id: 5, groom: "Relaxing Head & Shoulder Massage", price: "₦10,500" },
    { id: 6, groom: "Therapeutic Foot Massage", price: "₦6,500" }
];

const Specials = [
    { id: 1, groom: "Natural Locs (Excludes Attachment)", price: "₦30,000" },
    { id: 2, groom: "Relocking & Maintenance", price: "₦20,000" },
    { id: 3, groom: "Relocking & Tip Coloring", price: "₦25,500" },
    { id: 4, groom: "Tip Coloring Only", price: "₦7,000" },
    { id: 5, groom: "Loc Styling & Customization", price: "₦11,000" },
    { id: 6, groom: "Loc Washing & Hydration", price: "₦6,000" },
    { id: 7, groom: "Natural Twist (Excludes Extensions)", price: "₦11,000" },
    { id: 8, groom: "Loc/Extension Take-Out Service", price: "₦3,500" }
];

const Packages = () => {
  return (
    <section>
        <div>
            <div>
                <div className='bg-dark-red text-white py-10 grid gap-16 grid-cols-1 sm:gap-5 sm:grid-cols-2 md:gap-10 lg:py-16 xl:py-20'>
                    <div>
                        <div className='xl:w-[100%]'>
                            {image.map((img) => (
                                <div key={img.id}>
                                    <img src={img.picture} alt="" className='w-[100%] h-[100%] object-cover sm:h-[650px] md:h-[550px]' />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pr-7 pl-7 sm:pl-0 md:pr-10 lg:pr-16 lg:pt-5 xl:pr-20 xl:pr-20'>
                        <div>
                            <h3 className='text-2xl font-bold pb-3 uppercase lg:text-3xl'>Hairy Affairs</h3>
                        </div>
                        {Grooming.map((rendered) => (
                            <div key={rendered.id} className='pb-5'>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-semibold">
                                        {rendered.groom}
                                    </span>
                                    <div className="flex-grow border-b-4 border-dotted text-xl border-white"></div>
                                    <span className="text-lg font-semibold">
                                        {rendered.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='py-10 grid gap-10 sm:flex sm:flex-row-reverse sm:gap-0 md:gap-4 lg:py-16 xl:py-20'>
                    <div>
                        <div className='xl:w-[100%]'>
                            {imagetwo.map((img) => (
                                <div key={img.id}>
                                    <img src={img.picture} alt="" className='w-[100%] h-[100%] object-cover sm:w-[540px] sm:h-[620px] md:h-[550px] lg:w-[523px] lg:h-[500px] xl:w-[820px]' />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pr-7 pl-7 sm:pl-7 sm:w-[540px] md:pl-10 lg:pl-16 lg:pt-5 xl:pl-20 xl:pl-20 xl:w-[57%] 2xl:w-[50%]'>
                        <div>
                            <h3 className='text-2xl font-bold pb-3 uppercase lg:text-3xl'>Chemical Services</h3>
                        </div>
                        {Chemicals.map((chm) => (
                            <div key={chm.id} className='pb-5'>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-semibold">
                                        {chm.groom}
                                    </span>
                                    <div className="flex-grow border-b-4 border-dotted text-xl border-gray-900"></div>
                                    <span className="text-lg font-semibold">
                                        {chm.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>  
                <div className='bg-dark-red text-white py-10 grid gap-16 grid-cols-1 sm:gap-5 sm:grid-cols-2 md:gap-10 lg:py-16 xl:py-20'>
                    <div>
                        <div className='xl:w-[100%]'>
                            {imagethree.map((img) => (
                                <div key={img.id}>
                                    <img src={img.picture} alt="" className='w-[100%] h-[100%] object-cover sm:h-[580px] md:h-[450px]' />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pr-7 pl-7 sm:pl-0 md:pr-10 lg:pr-16 lg:pt-5 xl:pr-20 xl:pr-20'>
                        <div>
                            <h3 className='text-2xl font-bold pb-3 uppercase lg:text-3xl'>Treatments</h3>
                        </div>
                        {Treatment.map((treat) => (
                            <div key={treat.id} className='pb-5'>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-semibold">
                                        {treat.groom}
                                    </span>
                                    <div className="flex-grow border-b-4 border-dotted text-xl border-white"></div>
                                    <span className="text-lg font-semibold">
                                        {treat.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='py-10 grid gap-10 sm:flex sm:flex-row-reverse sm:gap-0 md:gap-4 lg:py-16 xl:py-20 xl:justify-between xl:items-center xl:gap-0'>
                    <div>
                        <div className='xl:w-[100%]'>
                            {imagefour.map((img) => (
                                <div key={img.id}>
                                    <img src={img.picture} alt="" className='w-[100%] h-[100%] object-cover sm:w-[540px] sm:h-[620px] md:h-[505px] lg:w-[523px] lg:h-[450px] xl:w-[650px] 2xl:w-[820px]' />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pr-7 pl-7 sm:pl-7 sm:w-[540px] md:pl-10 lg:pl-16 lg:pt-5 xl:pl-20 xl:pl-20 xl:w-[50%] 2xl:w-[50%]'>
                        <div>
                            <h3 className='text-2xl font-bold pb-3 uppercase lg:text-3xl'>Specials</h3>
                        </div>
                        {Specials.map((list) => (
                            <div key={list.id} className='pb-5'>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-semibold">
                                        {list.groom}
                                    </span>
                                    <div className="flex-grow border-b-4 border-dotted text-xl border-gray-900"></div>
                                    <span className="text-lg font-semibold">
                                        {list.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Packages;
