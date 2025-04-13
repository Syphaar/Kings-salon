import React from 'react'
import { Link } from "react-router-dom";
import { PiSprayBottle } from "react-icons/pi";
import { GiHairStrands } from "react-icons/gi";
// import Img from "/src/assets/img/haircut.jpg";

const heading = [
    {
        id: 1,
        topic: "What we do",
        text: "Enhancing your look through creativity, skill, and high-quality salon services.",
    }
];

const service1 = [
    {
        id: 1,
        icon: <GiHairStrands />,
        srendered: "Hair Grooming & Styling",
        desc: "A great haircut isn’t just about trimming hair, it’s about craftsmanship. Our experienced barbers ensure every cut is precise and suited to your individual look."
    },
];

const service2 = [
    {
        id: 2,
        icon: <PiSprayBottle />,
        srendered: "Luxury Hair & Skin Treatments",
        desc: "Healthy hair and skin require professional care and attention. Our treatments focus on deep hydration, relaxation, and restoring your natural glow with expert precision."
    },
];

const image = [
    {
        id: 1,
        picture: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297973/haircut_hkxub0.jpg",
    }
];

const Whatwedo = () => {
  return (
    <section>
        <div className="xl:flex gap-10 xl:px-20">
            <div className='xl:w-[100%]'>
                <div className='px-7 sm:py-4 md:px-10 lg:px-16' data-aos="zoom-in">
                    {heading.map((header) => (
                        <div key={header.id} className='text-center'>
                            <div>
                                <h3 className='text-3xl font-bold uppercase pb-2'>{header.topic}</h3>
                                <p>{header.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='sm:grid grid-cols-2 gap-5 px-7 pb-5 md:pb-5 md:px-10 lg:px-16 xl:pb-5 xl:px-0'>
                    <div className='bg-dark-red text-white px-6 py-6 mt-5 sm:px-10 sm:mt-0 rounded-xl'>
                        {service1.map((skill) => (
                            <div key={skill.id}>
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
                    <div className='bg-dark-red text-white px-6 py-6 mt-5 rounded-xl sm:px-10 sm:mt-0'>
                        {service2.map((skill) => (
                            <div key={skill.id}>
                                {/* <div></div> */}
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
                <div className='px-7 pb-5 sm:flex sm:justify-center sm:items-center'>
                    <Link to="/services">
                        <button className='w-full font-bold uppercase border-black border-2 px-4 py-2 rounded-md hover:bg-dark-red hover:border-dark-red hover:text-white transition-all duration-500 sm:w-38'>Learn More</button>
                    </Link>
                </div>
            </div>
            <div className='xl:w-[100%]'>
                {image.map((img) => (
                    <div key={img.id}>
                        <img src={img.picture} alt="" className='w-[100%] h-[250px] object-cover sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[530px] xl:rounded-xl' />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Whatwedo;