import Footer from "./Footer";
import About from "./Home/About";
// import OurBlogs from "./Home/OurBlogs";
import OurProducts from "./Home/OurProducts";
import ScrollGallery from "./Home/ScrollGallery";
import SectionOne from "./Home/Sectionone";
import TestimonialsCarousel from "./Home/Testimonials";
import Whatwedo from "./Home/Whatwedo";

const Index = () => {
  return (
    <div>
      <SectionOne />
      <About />
      <Whatwedo />
      <OurProducts />
      <ScrollGallery />
      <TestimonialsCarousel />
      {/* <OurBlogs /> */}
      <Footer />
    </div>
  );
};

export default Index;
