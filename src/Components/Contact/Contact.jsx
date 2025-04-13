import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// import img2 from "/src/assets/img/stwo.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// SECTION ONE (LINKS)
const Details = [
    {
        id: 1,
        subhead: "Address",
        text: "We are located in a convenient spot, easily accessible and close to major landmarks in the city.",
        icon: <IoLocationOutline />,
        info: "123 Main Street, YourCity, ST 56789",
    },
    {
        id: 2,
        subhead: "Hours",
        text: "Our salon operates throughout the week with flexible hours to accommodate your schedule.",
        icon: <IoTimeOutline />,
        info: "Monday - Friday: 9 AM - 7 PM",
        info2: "Saturday: 10 AM - 5 PM",
    },
    {
        id: 3,
        subhead: "Call us",
        text: "Have questions or need assistance? Our team is happy to help with all your hair care needs.",
        icon: <IoMdCall />,
        info: "(090) 123-456-77",
    },
    {
        id: 4,
        subhead: "Email",
        text: "For inquiries, appointments, or special requests, feel free to reach out via email anytime.",
        icon: <HiOutlineMail />,
        info: "kingssalon@gmail.com",
    },
];


// SECTION TWO (FAQ SECTION)
const Image = [
    {
        id:1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297981/shop-two_rto4ip.jpg",
    },
]

const data = [
    {
        id: 1,
        question: "What hair treatments do you offer?",
        answer:   "We provide deep conditioning, keratin treatments, scalp care, and strengthening masks to improve hair health and texture."
    },
    {
        id: 2,
        question: "How often should I get a haircut?",
        answer:   "A trim every 6-8 weeks helps prevent split ends, maintain your style, and keep your hair looking fresh and healthy over time."
    },
    {
        id: 3,
        question: "Which hair color is best for me?",
        answer:   "The best hair color depends on your skin tone, personal style, and hair condition. Our experts can help you choose a flattering shade."
    },
    {
        id: 4,
        question: "How can I keep my hair healthy?",
        answer:   "Use sulfate-free shampoos, apply heat protectants before styling, get regular trims, and follow a proper hair care routine to prevent damage."
    },
];
  
const Contact = () => {
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

    // SECTION TWO (FAQ SECTION)
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    
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
                            <NavLink to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? 'text-black bg-white' : ''}`}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Sidebar */}
                <div
                    className={`fixed inset-0 bg-black/50 transition-opacity duration-500 ease-in-out md:hidden ${
                    navOpen ? "opacity-100 visible" : "opacity-0 invisible z-40"
                    } z-40`}
                >
                    <div
                    ref={menuRef}
                    className={`fixed right-0 top-0 h-full bg-dark-red p-6 flex flex-col gap-6 shadow-lg transition-transform duration-1000 ease-in-out z-40
                        w-2/3 md:w-1/2 ${navOpen ? "translate-x-0" : "translate-x-full"}`}
                        >
                        {/* Close Button with Slower Animation */}
                        <button
                            className="text-2xl self-end transition-transform duration-500 ease-in-out text-white cursor-pointer"
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
                    Contact Us
                    </h1>
                </div>
            </section>

            {/* SECTION ONE */}
            <section>
                <div className="px-7 py-10 md:px-10 lg:px-16 lg:py-16 xl:px-20 xl:py-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
                        {Details.map((information) => (
                            <div key={information.id} className="border-b-2 pb-4 xl:border-b-0">
                                <div>
                                    <h4 className="text-lg font-bold">{information.subhead}</h4>
                                    <p className="pt-2 pb-4">{information.text}</p>
                                    <div className="">
                                        <div className="flex gap-2">
                                            <p className="px-1 py-1 text-lg bg-gray-200 rounded-full">{information.icon}</p>
                                            <p>{information.info}</p>
                                        </div>
                                        <div>
                                            <p className="pl-9">{information.info2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION TWO (FAQ SECTION) */}
            <section>
            <div className="lg:flex sm:flex-row-reverse gap-10 px-7 pb-10 overflow-hidden md:pb-14 md:px-10 lg:px-16 xl:px-20">
                <div className="flex w-full justify-center" data-aos="fade-left">
                    <div className="w-[500px] pb-4 lg:w-[470px] xl:w-[500px]">
                        <div className="pb-4 text-center">
                            <h3 className="text-3xl font-bold uppercase md:text-3xl xl:text-4xl">Frequently Asked Questions</h3>
                        </div>
                        {data.map((item, i) => (
                            <div key={item.id} className="bg-dark-red text-white mb-2 px-5 py-5 rounded-xl">
                                <div onClick={() => toggle(i)} className=" flex justify-between items-center cursor-pointer">
                                    <h2>{item.question}</h2>
                                    <span className="pl-4">{selected === i ? <IoIosArrowUp /> : <IoIosArrowDown /> }</span>
                                    </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        selected === i
                                            ? "opacity-100 scale-y-100 max-h-[500px]"
                                            : "opacity-0 scale-y-0 max-h-0 pointer-events-none"
                                    }`}
                                >
                                    <p className="py-2">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="w-full h-full">
                        {Image.map((pic) => (
                            <div key={pic.id}>
                                <img src={pic.img} alt="" className="rounded-2xl h-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </section>


        </section>
    );
};

export default Contact;