import { Link } from "react-router-dom";
// import img1 from "/src/assets/img/sone.jpg";
// import img2 from "/src/assets/img/shop.jpg";

const Heading = [
    {
        id:1, 
        text: "Who are we",
        text2: "Our Story",
        subhead: "Dedicated to quality, creativity, and transforming your look with passion and precision.",
        info: "We created this salon to offer expert styling and a luxurious experience. With skill, creativity, and attention to detail, we craft every style and treatment to perfection. More than just a salon, we’re a destination for quality, comfort, and confidence. Step in, relax, and let us bring your beauty goals to life—because you deserve to look and feel your absolute best, every single day.",
    },
]

const imageOne = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297982/sone_allq6a.jpg",
    }
]

const imageTwo = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297983/shop_ux926z.jpg",
    }
]

const About = () => {
    return (
        <section id="about" className="bg- text-black overflow-hidden">
            <div className="px-7 py-10 md:px-10 lg:px-16 xl:px-20 xl:py-20">
                <div>
                    {Heading.map((data) => (
                        <div key={data.id} className="md:flex md:flex-row-reverse md:gap-9">
                            <div className="flex gap-5 md:w-[88%] lg:w-[100%] lg:mt-10 xl:mt-12 overdlow-hidden" data-aos="fade-left">
                                {/* <div className="hidden pt-2 md:block">
                                    <p className="w-7 h-1 bg-black rounded-full"></p>
                                </div> */}
                                <div>
                                    <h2 className="uppercase pb-1 border-b-4 w-26">{data.text}</h2>
                                    <p className="text-3xl font-bold uppercase pt-2 pb-2 xl:pb-3">{data.text2}</p>
                                    <h3 className="text-xl text-black font-bold uppercase md:w-[80%] xl:w-[100%]">{data.subhead}</h3>
                                    <p className="pt-3 pb-5 md:pb-4">{data.info}</p>
                                    <div className="pb-6 lg:pb-0">
                                        <Link to="/about">
                                            <button className="w-full text-black font-bold px-4 py-2 uppercase bg-transparent rounded-sm border-2 border-black hover:bg-dark-red hover:text-white hover:border-dark-red transition-all duration-500 cursor-pointer sm:w-38">
                                                {/* <p className=" transition-all duration-500">Read More</p> */}
                                                Read More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full mb-60">
                                <div data-aos="fade-up">
                                    {imageOne.map((pic) => (
                                        <div key={pic.id}>
                                            <img src={pic.img} alt="" 
                                                className="w-[80%] h-[200px] rounded-xl object-cover sm:w-[60%] sm:h-[310px] md:w-[60%] md:h-[200px] lg:w-[300px] lg:h-[210px] lg:object-cover xl:w-[60%] xl:h-[230px]" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {imageTwo.map((pics) => (
                                        <div key={pics.id}>
                                            <img src={pics.img} alt="" 
                                            className="absolute top-[180px] left-[50px] w-[80%] h-[260px] rounded-xl object-cover sm:w-[75%] sm:h-[100%] sm:top-[280px] sm:left-[145px] md:w-[75%] md:h-[300px] md:top-[180px] md:left-[90px] lg:w-[365px] lg:h-[280px] lg:top-[190px] lg:object-cover xl:w-[65%] xl:h-[270px] xl:top-[210px] xl:left-[190px] z-10" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
};

export default About;