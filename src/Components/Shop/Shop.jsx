import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// import img1 from "/src/assets/img/clipper.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

// SECTION ONE (OUR PRODUCTS)
const Heading = [
    {
        id:1, 
        text: "What we sell",
        subhead: "Quality hair care and styling products to keep you looking your best every day.",
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
        goods: "Grooming set",
        price: "₦20,000",
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297979/shampoo_itltmg.jpg",
        goods: "Shampoo",
        price: "₦15,000",
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297975/ointment_hpk19y.jpg",
        goods: "Ointment",
        price: "₦10,000",
    },
    {
        id: 6,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297974/hairdressing_product_gqela7.jpg",
        goods: "Hair grooming products",
        price: "₦15,000",
    },
    {
        id: 7,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297970/groomset-two_hc3ef6.jpg",
        goods: "Grooming Set",
        price: "₦25,000",
    },
    {
        id: 8,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297962/combs_ekekv6.jpg",
        goods: "Combs",
        price: "₦7,000",
    },
]

  
const Shop = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    // Handle navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setNavOpen(false);
        }
        };
        if (navOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
        document.body.style.overflow = "auto"; // Enable scrolling
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [navOpen]);
    

    // FOOTER
    const BannerImg = {
        backgroundImage: `url(${"https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297966/footer_gbwd6p.png"})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };
    
    const FooterLinks = [
        {
            id: 1,
            title: "Home",
            link: "/#",
        },
        {
            id: 2,
            title: "About",
            link: "/about",
        },
        {
            id: 3,
            title: "Services",
            link: "/services",
        },
        {
            id: 4,
            title: "Shop",
            link: "/shop",
        },
        {
            id: 5,
            title: "Gallery",
            link: "/gallery",
        },
        {
            id: 6,
            title: "Contact",
            link: "/contact",
        },
    ]
    
    const FooterLinks2 = [
        {
            id: 1,
            titles: "Privacy policy",
            links: "/#",
        },
        {
            titles: "Terms of Service",
            links: "/#about",
        },
        {
            titles: "Disclamer",
            links: "/#contact",
        },
        {
            titles: "Credits",
            links: "/#blog",
        },
        {
            titles: "FAQ",
            links: "/#blog",
        },
    ]

  return (
    <section>
        {/* HEADER */}
        <section className="relative w-full">
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 lg:px-16 xl:px-20 py-4 z-40 transition-all duration-500 ${
                isScrolled ? "bg-dark-red shadow-[0_4px_20px_rgba(0,0,0,1)]" : "bg-transparent"
                }`}
            >
                <h1 className="text-white text-2xl font-bold z-30">
                    <a href="/" className="text-white">Kings Salon</a>
                </h1>

                {/* Hamburger Icon */}
                <button
                className={`md:hidden text-2xl text-white transition-all duration-500 cursor-pointer ${
                    navOpen ? "hidden" : "block"
                }`}
                onClick={() => setNavOpen(true)}
                >
                    <GiHamburgerMenu />
                </button>

                <ul className="hidden md:flex text-white text-lg">
                    <li>
                        <NavLink to="/" className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? 'text-black bg-white' : ''}`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? 'text-black bg-white' : ''}`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? 'text-black bg-white' : ''}`}>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? 'text-black bg-white' : ''}`}>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? 'text-black bg-white' : ''}`}>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? 'text-black bg-white' : ''}`}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-500 ease-in-out md:hidden ${
                navOpen ? "opacity-100 visible" : "opacity-0 invisible"
                } z-40`}
            >
                <div
                ref={menuRef}
                className={`fixed right-0 top-0 h-full bg-dark-red p-6 flex flex-col gap-6 shadow-lg transition-transform duration-500 ease-in-out z-50 w-2/3 md:w-1/2 ${
                    navOpen ? "translate-x-0" : "translate-x-full"
                }`}
                >
                {/* Close Button with Smooth Animation */}
                <button
                    className="text-2xl text-white self-end transition-all duration-500 cursor-pointer hover:text-gray-400"
                    onClick={() => setNavOpen(false)}
                >
                    <AiOutlineClose />
                </button>

                <ul className="flex flex-col gap-6 text-lg text-white">
                    <li className="w-24 text-center">
                        <NavLink to="/" onClick={() => {setNavOpen(false);window.scrollTo({ top: 0, behavior: "smooth" });}}
                            className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? "text-black bg-white" : ""}`}>
                                Home
                        </NavLink>
                    </li>
                    <li className="w-24 text-center">
                        <NavLink to="/about" onClick={() => {setNavOpen(false);window.scrollTo({ top: 0, behavior: "smooth" });}}
                            className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? "text-black bg-white" : ""}`}>
                                About
                        </NavLink>
                    </li>
                    <li className="w-24 text-center">
                        <NavLink to="/services" onClick={() => {setNavOpen(false);window.scrollTo({ top: 0, behavior: "smooth" });}}
                            className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? "text-black bg-white" : ""}`}>
                                Services
                        </NavLink>
                    </li>
                    <li className="w-24 text-center">
                        <NavLink to="/shop" onClick={() => {setNavOpen(false);window.scrollTo({ top: 0, behavior: "smooth" });}}
                            className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? "text-black bg-white" : ""}`}>
                                Shop
                        </NavLink>
                    </li>
                    <li className="w-24 text-center">
                        <NavLink to="/gallery" onClick={() => {setNavOpen(false);window.scrollTo({ top: 0, behavior: "smooth" });}}
                            className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? "text-black bg-white" : ""}`}>
                                Gallery
                        </NavLink>
                    </li>
                    <li className="w-24 text-center">
                        <NavLink to="/contact" onClick={() => {setNavOpen(false);window.scrollTo({ top: 0, behavior: "smooth" });}}
                            className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? "text-black bg-white" : ""}`}>
                                Contact
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>

            {/* Hero Section with Half Background */}
            <div
                className="h-[50vh] flex items-center justify-center text-white px-6 md:px-10 lg:px-16 xl:px-20 bg-cover bg-center bg-no-repeat relative"
                style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297977/sbg_whgvgl.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/80"></div>

                <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold uppercase">
                Shop
                </h1>
            </div>
        </section>

        {/* SECTION ONE (OUR PRODUCTS) */}
        <section>
            <div className='pb-10 px-7 py-12 md:px-10 lg:px-16 xl:px-20 xl:pb-20'>
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
                <div className='grid grid-cols-1 gap-6 pb-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                    {Products.map((items) => (
                        <div key={items.id} className='border-1 rounded-xl'>
                            <div>
                                <div>
                                    <img src={items.img} alt="" className='rounded-xl' />
                                </div>
                                <div className="text-center pt-2 pb-5">
                                    <p className='font-bold text-lg pb-1 capitalize'>{items.goods}</p>
                                    <p>{items.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section>
            <div id="contact" style={BannerImg} className="text-white">
                <div className="container">
                    <div data-aos="zoom-in" className="grid sm:grid-cols-1 md:grid-cols-1 px-7 py-12 md:px-10 lg:px-16 xl:grid-cols-3 xl:px-20 xl:pb-20">
                        {/* company details */}
                        <div className="py-8">
                            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                                <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536586/logo_mdednp.jpg" alt="" className="max-w-[50px] rounded-full" />
                                Kings Salon
                            </h1>
                            <p>
                                At our salon, your satisfaction is everything. Whether you're visiting for a quick 
                                refresh or a full makeover, we're here to ensure you leave feeling amazing. Reach 
                                out to us for appointments, inquiries, or just to say hello.
                            </p>
                        </div>
                        {/* Footer links */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 pl-0 md:pl-10">
                            <div>
                                <div className="py-8 px-1 md:px-4">
                                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Pages</h1>
                                    <ul className="flex flex-col gap-3">
                                        {
                                            FooterLinks.map((link) => (
                                                <li className="cursor-pointer hover:text-primary hover:translate-x-1 w-28 duration-300 text-gray-200" key={link.title}>
                                                    <Link to={link.link}>{link.title}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="py-8 px-1 md:px-4">
                                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Quick Links</h1>
                                    <ul className="flex flex-col gap-3">
                                        {
                                            FooterLinks2.map((links) => (
                                                <li className="cursor-pointer hover:text-primary hover:translate-x-1 w-32 duration-300 text-gray-200" key={links.titles}>
                                                    <span>{links.titles}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                            {/* social links */}
                            <div>
                                <div className="py-8 px-1 md:px-4">
                                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Pages</h1>
                                    <div className="mt-6">
                                        <div className="flex items-center gap-3">
                                            <FaLocationArrow />
                                            <p>No. 4 Highway Road</p>
                                        </div>
                                        <div className="flex items-center gap-3 pt-3">
                                            <FaMobileAlt />
                                            <p>+234 123 456 7890</p>
                                        </div>
                                        <div className="flex items-center gap-3 pt-3">
                                            <HiOutlineMail />
                                            <p>kingssalon@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 mt-6">
                                        <a href="#">
                                            <FaFacebook className="text-2xl" />
                                        </a>
                                        <a href="#">
                                            <FaInstagram className="text-2xl" />
                                        </a>
                                        <a href="#">
                                            <FaLinkedin className="text-2xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Shop;
