import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Heading = [
    {
        id:1, 
        text: "Our blogs",
        // text2: "Architecture studio",
        subhead: "Expert Hair Care Tips, Trends, and Salon Secrets, All in One Place.",
        // info: "We are committed to building strong, reliable structures with quality craftsmanship. From homes to commercial spaces, we bring your vision to life with precision and care. Our team prioritizes safety, efficiency, and durability in every project. Let’s build something great together.",
    },
]

const Blogs = [
    {
        id: 1,
        subheading: "The Secret to Healthy, Shiny Hair",
        information: "Discover expert tips on keeping your hair strong, smooth, and full of life. Learn about the best products, treatments, and daily habits for long-lasting shine.",
        link: "Read More",
    },
    {
        id: 2,
        subheading: "Why Professional Haircare Matters",
        information: "Salon-quality products and expert styling make all the difference. Learn why investing in professional haircare leads to healthier, more beautiful hair.",
        link: "Read More",
    },
    {
        id: 3,
        subheading: "Healthy Hair Between Salon Visits",
        information: "Proper hair care doesn’t stop at the salon. Learn simple yet effective ways to maintain your hairstyle and keep your hair looking fresh for long.",
        link: "Read More",
    },
    {
        id: 4,
        subheading: "The Ultimate Guide to Hair Treatments",
        information: "From deep conditioning to keratin treatments, explore different salon treatments that can transform your hair and keep it looking flawless.",
        link: "Read More",
    },
]

const OurBlogs = () => {
  return (
    <section>
        <div className='px-7 py-10 md:px-10 lg:px-16 xl:px-20 '>
            <div>
                {Heading.map((header) => (
                    <div key={header.id} className='pb-4'>
                        <div className='text-center'>
                            <h3 className='text-3xl font-bold capitalize pb-2'>{header.text}</h3>
                            <p className=''>{header.subhead}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid gap-4 pb-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4'>
                {Blogs.map((news) => (
                    <div key={news.id} className='text-white bg-gray-700 px-6 py-6 rounded-md'>
                        <div>
                            <h3 className='text-xl font-bold capitalize'>{news.subheading}</h3>
                            <p className='pt-3 pb-5'>{news.information}</p>
                            <p>
                                <a href="" className='flex items-center font-bold'>
                                    {news.link}
                                    <div className='pt-1'>
                                        <IoIosArrowForward />
                                    </div>
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center'>
                <a href="">
                    <button className='w-full sm:w-38 text-black font-bold px-4 py-2 uppercase bg-transparent border-3 border-black rounded-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>
                        View All
                    </button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default OurBlogs;