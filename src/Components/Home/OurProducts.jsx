import React from 'react'
import { Link } from "react-router-dom";
// import img1 from "/src/assets/img/sone.jpg";

const Heading = [
    {
        id:1, 
        text: "What we sell",
        // text2: "Architecture studio",
        subhead: "Quality hair care and styling products to keep you looking your best every day.",
        // info: "We are committed to building strong, reliable structures with quality craftsmanship. From homes to commercial spaces, we bring your vision to life with precision and care. Our team prioritizes safety, efficiency, and durability in every project. Let’s build something great together.",
    },
]

const Products = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297961/clipper_qgxaoh.jpg",
        goods: "Clipper",
        price: "₦30,000",
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297978/scissors_htton8.jpg",
        goods: "Scissors",
        price: "₦10,000",
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297969/groomingset_nqpott.jpg",
        goods: "Grooming Set",
        price: "₦20,000",
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297979/shampoo_itltmg.jpg",
        goods: "Shampoo",
        price: "₦15,000",
    },
]

const OurProducts = () => {
    return (
        <section>
            <div className='px-7 py-10 md:px-10 lg:px-16 xl:px-20 xl:py-20'>
                <div data-aos="zoom-in">
                    {Heading.map((header) => (
                        <div key={header.id} className='pb-4'>
                            <div className='text-center'>
                                <h3 className='text-3xl font-bold uppercase pb-2'>{header.text}</h3>
                                <p className=''>{header.subhead}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='grid grid-cols-1 gap-5 pb-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4'>
                    {Products.map((items) => (
                        <div key={items.id}>
                            <div>
                                <div>
                                    <img src={items.img} alt="" className='rounded-xl' />
                                </div>
                                <div className="text-center pt-2">
                                    <p className='font-bold pb-1 text-lg capitalize'>{items.goods}</p>
                                    <p>{items.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='sm:flex sm:justify-center sm:items-center'>
                    <Link to="/shop">
                        <button className='w-full text-center bg-transparent rounded-sm border-2 border-black hover:bg-dark-red hover:border-dark-red hover:text-white transition-all duration-500 cursor-pointer sm:w-38'>
                            <p className="text-black font-bold px-4 py-2 uppercase transition-all duration-500 hover:text-white">
                                View All
                            </p>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OurProducts;
