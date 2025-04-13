import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import img1 from "/src/assets/img/shop-two.jpg";
// import img2 from "/src/assets/img/shop.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { GiHairStrands } from "react-icons/gi";
import { PiOfficeChairBold } from "react-icons/pi";
import { RxScissors } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const ImageOne = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297981/shop-two_rto4ip.jpg",
    }
]
const imageTwo = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297983/shop_ux926z.jpg",
    }
]

const AboutUs = () => {
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

//  HEADER SECTION
  const welcome = [
    {
        id: 1,
        header: "Welcome to Kings Salon",
        text2: "Personalized Beauty, Exceptional Care",
        information: "Kings Salon is where style and comfort come together. Our talented stylists listen to your needs and work with you to create looks that bring out your best. Whether you’re looking for a simple refresh or a bold new style, we’re here to help you feel confident and beautiful."
    }
  ]

  const achivements = [
    {
        id: 1,
        icon: <IoPeople />,
        results: "1500+",
        text: "Happy Customers",
    },
    {
        id: 2,
        icon: <IoDiamondOutline />,
        results: "4+",
        text: "Years of Experience",
    },
  ]

//   SECTION TWO (TEXT AND GRID)
const services = [
    {
        id: 1,
        heading: "Why choose us",
        text: "Our skilled stylists provide outstanding services, ensuring every visit leaves you feeling relaxed, refreshed, and truly confident."
    }
]

const offers = [
    {
        id: 1,
        icons: <GoClock />,
        heading: "Quick Appointments",
        info: "Booking your next salon visit is easy with our fast and simple scheduling options. Reserve your spot at a time that works best for you."
    },
    {
        id: 2,
        icons: <GiHairStrands />,
        heading: "Effortless Styling",
        info: "Our stylists work efficiently to deliver your desired look, whether it's a quick trim or a full makeover, all while ensuring a relaxing experience."
    },
    {
        id: 3,
        icons: <RxScissors  />,
        heading: "Timely Service",
        info: "We prioritize quick and professional service, ensuring your visit is efficient and leaves you with beautiful results on time."
    },
    {
        id: 4,
        icons: <PiOfficeChairBold />,
        heading: "Relaxed Atmosphere",
        info: "From the moment you walk in, we create a calming space where you can unwind, whether for a quick touch-up or a longer session."
    }
]

// SECTION THREE
const ServiceOffered = [
    {
        id: 1,
        header: "Your Beauty, Our Passion",
        text2: "Your Perfect Look Starts Here",
        information: "Kings Salon is a place where you can unwind and leave looking and feeling your best. Whether you’re here for a quick refresh or a complete transformation, our expert team will ensure you leave with a style that’s uniquely yours."
    }
  ]

//   FOOTER
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
                <button className={`md:hidden text-2xl text-white transition-all duration-500 cursor-pointer ${navOpen ? "hidden" : "block"}`}onClick={() => setNavOpen(true)}>
                    <GiHamburgerMenu />
                </button>

                <ul className="hidden md:flex text-white text-lg">
                    <li>
                        <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? 'text-black bg-white' : ''}`}>
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
                        <NavLink to="/shop" className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? 'text-black bg-white' : ''}`}>
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
                About Us
                </h1>
            </div>
        </section>

        {/* SECTION ONE */}
        <section>
            <div>
                <div className="px-7 py-10 md:px-10 lg:px-16 xl:px-20 xl:py-16">
                   <div>
                        {welcome.map((map) => (
                            <div key={map.id} className="overflow-x-hidden md:flex md:flex-row-reverse md:gap-9">
                                <div className="md:w-[100%] overflow-hidden" data-aos="fade-left">
                                    <div className="md:bg-dark-red md:text-white md:px-8 md:py-6 md:rounded-xl">
                                        <h2 className="uppercase pb-1 border-b-4 w-40">{map.header}</h2>
                                        <p className="text-2xl font-bold uppercase pt-2 pb-4 md:w-[80%] xl:pb-2 xl:w-[100%]">{map.text2}</p>
                                        <p className="pt-0 pb-5 md:pt-0">{map.information}</p>
                                    </div>
                                    <div className="text-center pb-5 grid gap-5 grid-cols-2 sm:pt-5 xl:w-[100%]">
                                        {achivements.map((ratings) => (
                                            <div key={ratings.id}>
                                                <div>
                                                    <div className="flex justify-center items-center text-xl">
                                                        <div className="flex justify-center items-center gap-2">
                                                            <p className="text-2xl font-bold">{ratings.results}</p>
                                                            <p className="pt-1 text-2xl">{ratings.icon}</p>
                                                        </div>
                                                    </div>
                                                    <p>{ratings.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full w-[100%]">
                                    {ImageOne.map((pic) => (
                                        <div key={pic.id}>
                                            <img src={pic.img} alt="" className="object-cover rounded-md md:h-[550px] lg:h-[450px] xl:w-[100%] xl:h-[400px]"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION TWO (WHY CHOOSE US) */}
        <section>
            <div className="bg-gray-300 px-7 py-10 md:px-10 lg:px-16 xl:px-20 xl:py-16">
                <div className="lg:flex lg:gap-12">
                    <div className="flex items-center" data-aos="zoom-in">
                        {services.map((skills) => (
                            <div key={skills.id} className="">
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold pb-3 uppercase">{skills.heading}</h3>
                                    <p className="pb-4 sm:pb-6 sm:px-16 md:px-20 lg:px-0">{skills.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:w-[100%]">
                        {offers.map((works) => (
                            <div key={works.id} className="bg-dark-red text-white px-3 pt-5 pb-7 shadow-t-2xl rounded-xl">
                                <div className="flex justify- gap-2">
                                    <div className="text-2xl">
                                        {works.icons}
                                    </div>
                                    <div className="pr-6">
                                        <h4 className="font-bold capitalize pb-2 text-center md:text-xl">{works.heading}</h4>
                                        <p className="text-">{works.info}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION THREE */}
        <section>
            <div>
                <div className="px-7 py-10 md:px-10 lg:px-16 xl:px-20 xl:py-16">
                   <div>
                        {ServiceOffered.map((map) => (
                            <div key={map.id} className="overflow-x-hidden md:flex md:gap-9 md:relative">
                                <div className="md:pl-20 md:pt-3 md:pb-10 md:w-[55%] md:z-10 lg:pt-6 lg:w-[48%] xl:pt-7 overflow-hidden" data-aos="fade-left">
                                    <div className="md:bg-dark-red text-black md:text-white md:px-8 md:py-6 md:rounded-xl">
                                        <h2 className="uppercase pb-1 border-b-4 w-40">{map.header}</h2>
                                        <p className="text-2xl font-bold uppercase pt-2 pb-4 md:w-[100%] md:pb-3 xl:pb-2">{map.text2}</p>
                                        <p className="pb-5">{map.information}</p>
                                    </div>
                                </div>
                                <div className="w-full sm:pt-0 md:absolute md:w-[48%] md:left-[52%] lg:w-[55%] lg:left-[45%] lg:h-[20%]">
                                    {imageTwo.map((pic) => (
                                        <div key={pic.id}>
                                            <img src={pic.img} alt="" 
                                                className="object-cover rounded-md md:h-[400px] lg:h-[400px] xl:w-[100%] xl:h-[325px]"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <section>
            <div id="contact" style={BannerImg} className="text-white">
                <div className="">
                    <div data-aos="zoom-in" className="grid sm:grid-cols-1 md:grid-cols-1 px-7 py-12 md:px-10 lg:px-16 xl:grid-cols-3 xl:px-20 xl:pb-20">
                        {/* company details */}
                        <div className="py-8">
                            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                                {/* <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536586/logo_mdednp.jpg" alt="" className="max-w-[50px] rounded-full" /> */}
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
  );
};

export default AboutUs;
