import React from 'react'
import { RxScissors } from "react-icons/rx";
import { PiSprayBottle } from "react-icons/pi";
import { GiHairStrands } from "react-icons/gi";
import { LiaSprayCanSolid } from "react-icons/lia";
// import Img from "/src/assets/img/shop-two.jpg";

const heading = [
    { id: 1, topic: "What we do", text: "Enhancing your look through creativity, skill, and high-quality salon services."}
]

const service1 = [
    {
        id: 1,
        icon: <GiHairStrands />,
        srendered: "Hair Grooming & Styling",
        desc: "A great haircut isn’t just about trimming hair—it’s about craftsmanship. Our experienced barbers ensure every cut is precise and suited to your individual look."
    },
    {
        id: 2,
        icon: <PiSprayBottle />,
        srendered: "Luxury Hair & Skin Treatments",
        desc: "Healthy hair and skin require professional care and attention. Our treatments focus on deep hydration, relaxation, and restoring your natural glow with expert precision."
    },
    {
        id: 3,
        icon: <LiaSprayCanSolid />,
        srendered: "Coloring & Chemical Services",
        desc: "Transforming your hair or beard with color and texture requires expertise. We use premium products to ensure vibrant, long-lasting results tailored to your style."
    },
    {
        id: 4,
        icon: <RxScissors />,
        srendered: "Specialist Hair Services",
        desc: "For those seeking unique styling and personalized hair care, our specialists provide customized services designed to match your vision and lifestyle."
    }
];

const image = [
    { id: 1, picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297981/shop-two_rto4ip.jpg" }
]

const Whatwedo = () => {
  return (
    <section>
        <div className="pb-16 xl:flex gap-10 xl:px-20 xl:py-20">
            <div className='xl:w-[100%]'>
                <div className='px-7 pt-10 pb-3 sm:pt-10 sm:pb-5 md:px-10 lg:px-16 xl:pb-5 xl:pt-0' data-aos="zoom-in">
                    {heading.map((header) => (
                        <div key={header.id} className='text-center'>
                            <div>
                                <h3 className='text-3xl font-bold uppercase pb-2'>{header.topic}</h3>
                                <p>{header.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='sm:grid gap-5 px-7 pb-5 md:pb-5 md:px-10 lg:px-16 xl:pb-5 xl:px-0'>
                    <div className='grid gap-5 text-white mt-3 rounded-xl sm:mt-0 sm:grid-cols-2'>
                        {service1.map((skill) => (
                            <div key={skill.id} className='bg-dark-red px-6 py-6 rounded-xl xl:pb-9'>
                                <div>
                                    <div className='flex justify-center items-center'>
                                        <p className='text-3xl'>{skill.icon}</p>
                                    </div>
                                    <h3 className='text-xl font-bold text-center pt-2 pb-4'>
                                        {skill.srendered}
                                    </h3>
                                    <p> {skill.desc} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='xl:w-[100%]'>
                {image.map((img) => (
                    <div key={img.id}>
                        <img src={img.picture} alt="" className='w-[100%] h-[250px] object-cover sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[790px] xl:rounded-xl' />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Whatwedo;