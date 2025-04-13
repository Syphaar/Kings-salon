import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Sophia Daniels",
    img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656448/nia_qpegtv.jpg",
    review:
      "Absolutely love this salon! The stylists are skilled, and they truly understand what works best for my hair. I always leave feeling confident.",
  },
  {
    id: 2,
    name: "Mark Stevens",
    img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656442/john_dtfjzz.jpg",
    review:
      "Best salon experience I’ve had! The staff is friendly, and they really listen to what you want. My haircut and beard trim were perfect.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656440/ellie_otnnyd.jpg",
    review:
      "I always get compliments after a visit here! The stylists have a great eye for detail, and their treatments leave my hair feeling amazing.",
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false, // No arrows for a cleaner look
  };

  return (
    <section className="flex flex-col gap-4 md:flex-row items-center justify-between w-full px-5 py-10 md:px-10 md:py-16 lg:px-16 xl:pb-20 xl:gap-10">
      {/* Heading Section */}
      <div className="w-full text-center md:text-left md:w-1/2 lg:w-1/3 xl:w-full" data-aos="zoom-in">
        <h3 className="text-3xl font-bold uppercase text-gray-900 leading-tight">
          What People Are Saying
        </h3>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          See Why Our Clients Trust Us with Their Hair, A Salon Experience Like No Other.
        </p>
      </div>

      {/* Stylish Carousel Container */}
      <div className="w-full md:w-1/2 lg:w-[55%] bg-dark-red pt-12 pb-12 px-6 md:px-10 rounded-lg shadow-lg">
        <div className="hidden md:block bg-white p-10 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105">
          {/* Desktop Version */}
          <Slider {...settings} className="w-full">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col items-center text-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full shadow-md border-2 border-gray-200"
                  />
                  <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile Version with Different Design */}
        <div className="md:hidden bg-gray-100 p-6 rounded-2xl shadow-lg">
          <Slider {...settings} className="w-full">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col items-center text-center p-4 border border-gray-300 rounded-xl bg-white">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover shadow-lg border-4 border-gray-300"
                />
                <p className="text-base text-gray-700 mt-4 leading-relaxed">"{testimonial.review}"</p>
                <p className="text-lg font-semibold text-gray-900 mt-3">{testimonial.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
