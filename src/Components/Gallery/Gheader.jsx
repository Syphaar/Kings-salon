import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Gheader = () => {
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

  return (
    <section>

        {/* HEADER */}
        <section className="relative w-full">
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 lg:px-16 xl:px-20 py-4 z-50 transition-all duration-500 ${
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
                        <NavLink to="/gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-white ${isActive ? 'text-black bg-white' : ''}`}>
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
                            className={({ isActive }) => `cursor-pointer font-semibold px-3 py-1 transition-all duration-500 rounded hover:text-black hover:bg-gray-300 ${isActive ? "text-black bg-gray-300" : ""}`}>
                                Contact
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>

            {/* Hero Section with Half Background */}
            <div
                className="h-[50vh] flex items-center justify-center text-white px-6 md:px-10 lg:px-16 xl:px-20 object-contain bg-cover bg-center bg-no-repeat relative"
                style={{backgroundImage:
                    "url('https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297977/sbg_whgvgl.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/80"></div>

                <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold uppercase">
                    Gallery
                </h1>
            </div>
        </section>
    </section>
  )
}

export default Gheader;
