import React, { useRef, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const images = [
    "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297779/beards_qtnim9.jpg",
    "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297983/trim_b39oeb.jpg",
    "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297967/friction_t7rnzu.jpg",
    "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297981/shop-two_rto4ip.jpg",
    "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297965/facial_w7bbj9.jpg",
    "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297960/clipper-two_kokl1j.jpg",
    "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297983/shop_ux926z.jpg",
    "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297980/shaving_tudxxw.jpg",
    "https://res.cloudinary.com/dlcoacdkb/image/upload/v1744297984/trimming_qvkeuh.jpg",
];

const ScrollGallery = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const imageWidth = scrollRef.current.firstChild.clientWidth + 16; // Image width + margin
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - imageWidth : scrollLeft + imageWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (!isHovered && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    }, 3000); // Change every 2.5s

    return () => clearInterval(autoScroll);
  }, [isHovered]);

  return (
    <div
      className="relative w-full mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Scroll Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full shadow-md hover:bg-opacity-70 z-10"
        onClick={() => scroll("left")}
      >
        <MdChevronLeft size={30} />
      </button>

      {/* Image Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide p-2"
        style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-[100%] h-48 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full shadow-md hover:bg-opacity-70 z-10"
        onClick={() => scroll("right")}
      >
        <MdChevronRight size={30} />
      </button>
    </div>
  );
};

export default ScrollGallery;
