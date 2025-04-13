import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const header = [
    {
        id: 1,
        shop: "Barbing salon",
        head: "Get the perfect cut from top-tier barbers.",
        intro: "Experience premium grooming with expert barbers who understand your style. From sharp fades to classic cuts, we’ve got you covered.",
    }
];

const SectionOne = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);
  
    // Handle scroll effect
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    // Close menu when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setNavOpen(false);
        }
      };
      if (navOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [navOpen]);
  
    return (
        <section>
            <div>
                <header>
                    {/* Navbar */}
                    <nav
                        className={`fixed top-0 left-0 w-full flex justify-between items-center z-40 transition-all duration-500 px-7 py-5 md:px-10 lg:px-16 xl:px-20 ${
                            isScrolled ? "bg-dark-red shadow-[0_4px_20px_rgba(0,0,0,1)]" : "bg-transparent"
                          }`}
                        >
                        <h1 className="text-white text-2xl font-bold z-30">
                            <a href="/" className="text-white">Kings Salon</a>
                        </h1>

                        {/* Hamburger Icon */}
                        <button
                        className={`md:hidden text-white text-2xl transition-all duration-500 cursor-pointer ${
                            navOpen ? "hidden" : "block"
                        }`}
                        onClick={() => setNavOpen(true)}
                        >
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

                    {/* Sidebar with Backdrop */}
                    <div className={`fixed inset-0 bg-black/50 transition-opacity duration-500 ease-in-out md:hidden z-40 ${
                            navOpen ? "opacity-100 visible" : "opacity-0 invisible"
                            } z-30`}
                            >
                            {/* Sidebar */}
                        <div ref={menuRef}
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
                </header>

                {/* Page Content */}
                <div className="relative min-h-screen flex items-center justify-center px-7 md:px-10 lg:px-16 xl:px-20 overflow-hidden">

                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    >
                        <source src="https://res.cloudinary.com/dlcoacdkb/video/upload/v1744297993/bg-video_wqbldo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Overlay (optional for dark filter) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

                    {/* Foreground Content */}
                    <div className="relative z-20 pt-24 w-full xl:pt-10">
                        {header.map((data) => (
                        <div key={data.id} className="pb-12 xl:pb-0">
                            <h2 className="text-white uppercase">{data.shop}</h2>
                            <p className="text-3xl text-white font-bold uppercase pt-2 pb-6 w-[100%] sm:w-[70%] sm:text-4xl md:text-5xl lg:w-[65%] xl:text-6xl xl:pb-4">
                            {data.head}
                            </p>
                            <p className="text-white w-[100%] pb-7 sm:w-[70%] lg:w-[65%]">{data.intro}</p>
                            <div>
                            <Link to="/contact">
                                <button className="w-full text-white font-bold px-4 py-2 uppercase bg-transparent rounded-sm border-2 border-white hover:text-black hover:bg-white transition-all duration-500 cursor-pointer sm:w-38">
                                Our Contact
                                </button>
                            </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
      </section>
    );
  };
  
  export default SectionOne;