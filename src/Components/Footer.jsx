import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";

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
        link: "/",
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

const Footer = ({ contactRef }) => {
    return (
        <div ref={contactRef} id="contact" style={BannerImg} className="text-white">
            <div className="">
                <div data-aos-offset="100" data-aos="zoom-in" className="grid sm:grid-cols-1 md:grid-cols-1 px-7 py-12 md:px-10 lg:px-16 xl:grid-cols-3 xl:px-20 xl:pb-20">
                    {/* company details */}
                    <div className="py-8">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
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
                                    {FooterLinks.map((link) => (
                                        <li className="cursor-pointer hover:text-primary hover:translate-x-1 w-28 duration-300 text-gray-200" key={link.title}>
                                            <Link to={link.link}>{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-1 md:px-4">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Quick Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks2.map((links) => (
                                        <li className="cursor-pointer hover:text-primary hover:translate-x-1 w-32 duration-300 text-gray-200" key={links.titles}>
                                            <span>{links.titles}</span>
                                        </li>
                                    ))}
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
    );
};

export default Footer;